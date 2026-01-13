// app/api/dashboard/route.ts
import { client } from "@/sanity/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const range = searchParams.get("range") || "month";
    const month = searchParams.get("month");

    // Build date range query based on selected range
    const dateRange = getDateRange(range, month || undefined);

    console.log("Fetching earnings with date range:", dateRange);

    // FIXED: Removed project reference since it doesn't exist in the schema
    const earningsQuery = `*[_type == "projectEarning" && date >= $startDate && date <= $endDate]{
      _id,
      title,
      amount,
      date,
      type,
      platform,
      status,
      notes
    } | order(date desc)`;

    const earnings = await client.fetch(earningsQuery, dateRange);

    console.log(`Fetched ${earnings.length} earnings`);

    // If no earnings found, return empty data structure
    if (earnings.length === 0) {
      return NextResponse.json({
        totalEarnings: 0,
        monthlyEarnings: 0,
        projectCount: 0,
        averageProjectValue: 0,
        platformBreakdown: [],
        monthlyTrends: generateMonthlyTrends([], range),
        recentEarnings: [],
        topProjects: [],
      });
    }

    // Calculate statistics
    const totalEarnings = earnings.reduce(
      (sum: number, earning: any) => sum + (earning.amount || 0),
      0
    );

    const currentDate = new Date();
    const monthlyEarnings = earnings
      .filter((earning: any) => {
        const earningDate = new Date(earning.date);
        return (
          earningDate.getMonth() === currentDate.getMonth() &&
          earningDate.getFullYear() === currentDate.getFullYear()
        );
      })
      .reduce((sum: number, earning: any) => sum + (earning.amount || 0), 0);

    // FIXED: Count unique project titles instead of project IDs
    const uniqueProjects = [
      ...new Set(earnings.map((earning: any) => earning.title).filter(Boolean)),
    ];

    const averageProjectValue =
      uniqueProjects.length > 0 ? totalEarnings / uniqueProjects.length : 0;

    // Group earnings by platform
    const platformBreakdown = Object.entries(
      earnings.reduce((acc: any, earning: any) => {
        const platform = earning.platform || "other";
        acc[platform] = (acc[platform] || 0) + (earning.amount || 0);
        return acc;
      }, {})
    ).map(([platform, value]) => ({
      platform: platform.charAt(0).toUpperCase() + platform.slice(1),
      value: value as number,
    }));

    // Generate monthly trends
    const monthlyTrends = generateMonthlyTrends(earnings, range);

    // Get recent earnings (last 10)
    const recentEarnings = earnings
      .sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, 10);

    // FIXED: Get top projects by title instead of project reference
    const projectEarnings = earnings.reduce((acc: any, earning: any) => {
      if (earning.title) {
        const projectTitle = earning.title;
        if (!acc[projectTitle]) {
          acc[projectTitle] = {
            project: projectTitle,
            earnings: 0,
          };
        }
        acc[projectTitle].earnings += earning.amount || 0;
      }
      return acc;
    }, {});

    const topProjects = Object.values(projectEarnings)
      .sort((a: any, b: any) => b.earnings - a.earnings)
      .slice(0, 5);

    return NextResponse.json({
      totalEarnings,
      monthlyEarnings,
      projectCount: uniqueProjects.length,
      averageProjectValue,
      platformBreakdown,
      monthlyTrends,
      recentEarnings,
      topProjects,
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch dashboard data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

function getDateRange(range: string, month?: string) {
  const now = new Date();
  let startDate: Date;
  let endDate: Date = now;

  switch (range) {
    case "month":
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      break;
    case "quarter":
      const currentQuarter = Math.floor(now.getMonth() / 3);
      startDate = new Date(now.getFullYear(), currentQuarter * 3, 1);
      break;
    case "year":
      startDate = new Date(now.getFullYear(), 0, 1);
      break;
    case "all":
    default:
      startDate = new Date(2020, 0, 1); // Adjust as needed
      break;
  }

  // If a specific month is provided, override the date range
  if (month) {
    const [year, monthNum] = month.split("-").map(Number);
    startDate = new Date(year, monthNum - 1, 1);
    endDate = new Date(year, monthNum, 0); // Last day of the month
  }

  return {
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
  };
}

function generateMonthlyTrends(earnings: any[], range: string) {
  const trends: { month: string; earnings: number }[] = [];
  const now = new Date();

  // Determine how many months to show based on range
  const monthsCount = range === "year" ? 12 : range === "quarter" ? 3 : 6;

  for (let i = monthsCount - 1; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthStr = date.toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    });

    const monthEarnings = earnings
      .filter((earning) => {
        const earningDate = new Date(earning.date);
        return (
          earningDate.getMonth() === date.getMonth() &&
          earningDate.getFullYear() === date.getFullYear()
        );
      })
      .reduce((sum, earning) => sum + (earning.amount || 0), 0);

    trends.push({ month: monthStr, earnings: monthEarnings });
  }

  return trends;
}
