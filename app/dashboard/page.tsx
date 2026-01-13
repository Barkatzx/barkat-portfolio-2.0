"use client";

import Glass from "@/components/ui/Glass";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaCalendar,
  FaChartBar,
  FaChartLine,
  FaDollarSign,
  FaFilter,
  FaMoneyBillWave,
  FaProjectDiagram,
  FaTable,
  FaTrophy,
} from "react-icons/fa";
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// FIXED: Updated interface to match new schema
interface ProjectEarning {
  _id: string;
  title: string;
  amount: number;
  date: string;
  type: string;
  platform: string;
  status: string;
  notes?: string;
}

interface DashboardStats {
  totalEarnings: number;
  monthlyEarnings: number;
  projectCount: number;
  averageProjectValue: number;
  platformBreakdown: { platform: string; value: number }[];
  monthlyTrends: { month: string; earnings: number }[];
  recentEarnings: ProjectEarning[];
  topProjects: { project: string; earnings: number }[];
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<
    "month" | "quarter" | "year" | "all"
  >("month");
  const [selectedMonth, setSelectedMonth] = useState<string>(
    new Date().toISOString().slice(0, 7)
  );
  const [isExporting, setIsExporting] = useState(false);

  const COLORS = ["#00a8ff", "#4dc3ff", "#80d4ff", "#b3e0ff", "#0088cc"];

  useEffect(() => {
    fetchDashboardData();
  }, [timeRange, selectedMonth]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `/api/dashboard?range=${timeRange}&month=${selectedMonth}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.details || errorData.error || "Failed to fetch data"
        );
      }

      const data = await response.json();
      console.log("Dashboard data:", data);
      setStats(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setError(error instanceof Error ? error.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Export to CSV function
  const exportToCSV = () => {
    if (!stats) return;

    setIsExporting(true);

    try {
      // Create CSV content
      let csvContent = "data:text/csv;charset=utf-8,";

      // Add header
      csvContent += "Earnings Report\n";
      csvContent += `Generated: ${new Date().toLocaleDateString()}\n`;
      csvContent += `Time Range: ${timeRange}\n\n`;

      // Add summary statistics
      csvContent += "Summary Statistics\n";
      csvContent += `Total Earnings,${stats.totalEarnings}\n`;
      csvContent += `Monthly Earnings,${stats.monthlyEarnings}\n`;
      csvContent += `Project Count,${stats.projectCount}\n`;
      csvContent += `Average Project Value,${stats.averageProjectValue}\n\n`;

      // Add recent earnings table
      csvContent += "Recent Earnings\n";
      csvContent += "Date,Project,Amount,Platform,Type,Status\n";
      stats.recentEarnings.forEach((earning) => {
        csvContent += `${earning.date},${earning.title},${earning.amount},${earning.platform},${earning.type},${earning.status}\n`;
      });

      csvContent += "\n";

      // Add top projects
      csvContent += "Top Projects\n";
      csvContent += "Project,Earnings\n";
      stats.topProjects.forEach((project) => {
        csvContent += `${project.project},${project.earnings}\n`;
      });

      csvContent += "\n";

      // Add platform breakdown
      csvContent += "Platform Breakdown\n";
      csvContent += "Platform,Earnings\n";
      stats.platformBreakdown.forEach((platform) => {
        csvContent += `${platform.platform},${platform.value}\n`;
      });

      // Create and trigger download
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute(
        "download",
        `earnings-report-${new Date().toISOString().split("T")[0]}.csv`
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to export report. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  // Export to JSON function
  const exportToJSON = () => {
    if (!stats) return;

    setIsExporting(true);

    try {
      const reportData = {
        generatedAt: new Date().toISOString(),
        timeRange,
        summary: {
          totalEarnings: stats.totalEarnings,
          monthlyEarnings: stats.monthlyEarnings,
          projectCount: stats.projectCount,
          averageProjectValue: stats.averageProjectValue,
        },
        platformBreakdown: stats.platformBreakdown,
        monthlyTrends: stats.monthlyTrends,
        recentEarnings: stats.recentEarnings,
        topProjects: stats.topProjects,
      };

      const dataStr = JSON.stringify(reportData, null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `earnings-report-${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to export report. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  // Print report function
  const printReport = () => {
    window.print();
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: PieLabelRenderProps) => {
    const safeCx = cx ?? 0;
    const safeCy = cy ?? 0;
    const safeMidAngle = midAngle ?? 0;
    const safeInnerRadius = innerRadius ?? 0;
    const safeOuterRadius = outerRadius ?? 0;
    const safePercent = percent ?? 0;

    if (safePercent * 100 < 5) return null;

    const RADIAN = Math.PI / 180;
    const radius = safeInnerRadius + (safeOuterRadius - safeInnerRadius) * 0.5;
    const x = safeCx + radius * Math.cos(-safeMidAngle * RADIAN);
    const y = safeCy + radius * Math.sin(-safeMidAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${(safePercent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-6">📊</div>
            <p className="text-gray-400 text-xl">Loading dashboard...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <p className="text-red-400 text-xl mb-4">Error loading dashboard</p>
            <p className="text-gray-400">{error}</p>
            <button
              onClick={fetchDashboardData}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="font-[Recoleta] text-3xl md:text-4xl mb-2">
                Earnings Dashboard
              </h1>
              <p className="text-gray-400">
                Track your project earnings and performance
              </p>
            </div>

            {/* Time Range Filter */}
            <Glass
              variant="white"
              className="flex items-center gap-2 p-2 rounded-xl"
            >
              {(["month", "quarter", "year", "all"] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    timeRange === range
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </Glass>
          </div>
        </div>

        {/* Stats Overview */}
        {stats && (
          <>
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div whileHover={{ y: -5 }} className="rounded-2xl">
                <Glass variant="blue" className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500/20">
                      <FaDollarSign className="text-2xl text-blue-400" />
                    </div>
                    <FaChartLine className="text-blue-400/50 text-xl" />
                  </div>
                  <div className="font-[Recoleta] text-2xl font-bold text-white mb-1">
                    {formatCurrency(stats.totalEarnings)}
                  </div>
                  <div className="text-gray-400 text-sm">Total Earnings</div>
                </Glass>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="rounded-2xl">
                <Glass variant="white" className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-500/20">
                      <FaCalendar className="text-2xl text-purple-400" />
                    </div>
                    <FaArrowUp className="text-green-400 text-xl" />
                  </div>
                  <div className="font-[Recoleta] text-2xl font-bold text-white mb-1">
                    {formatCurrency(stats.monthlyEarnings)}
                  </div>
                  <div className="text-gray-400 text-sm">This Month</div>
                </Glass>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="rounded-2xl">
                <Glass variant="white" className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-emerald-500/20">
                      <FaProjectDiagram className="text-2xl text-emerald-400" />
                    </div>
                    <FaTrophy className="text-yellow-400 text-xl" />
                  </div>
                  <div className="font-[Recoleta] text-2xl font-bold text-white mb-1">
                    {stats.projectCount}
                  </div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </Glass>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="rounded-2xl">
                <Glass variant="white" className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-amber-500/20">
                      <FaMoneyBillWave className="text-2xl text-amber-400" />
                    </div>
                    <FaChartBar className="text-blue-400 text-xl" />
                  </div>
                  <div className="font-[Recoleta] text-2xl font-bold text-white mb-1">
                    {formatCurrency(stats.averageProjectValue)}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Avg. Project Value
                  </div>
                </Glass>
              </motion.div>
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Monthly Trends Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl"
              >
                <Glass variant="white" className="p-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/20">
                      <FaChartLine className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-[Recoleta] text-xl">
                        Earnings Trend
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Monthly earnings over time
                      </p>
                    </div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={stats.monthlyTrends}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
                        <YAxis
                          stroke="#9CA3AF"
                          fontSize={12}
                          tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                          }}
                          formatter={(value) => [
                            formatCurrency(Number(value)),
                            "Earnings",
                          ]}
                        />
                        <Line
                          type="monotone"
                          dataKey="earnings"
                          stroke="#00a8ff"
                          strokeWidth={2}
                          dot={{ fill: "#00a8ff", r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Glass>
              </motion.div>

              {/* Platform Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl"
              >
                <Glass variant="white" className="p-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/20">
                      <FaFilter className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-[Recoleta] text-xl">
                        Platform Breakdown
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Earnings by platform
                      </p>
                    </div>
                  </div>
                  <div className="h-64 flex items-center justify-center">
                    {stats.platformBreakdown.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={stats.platformBreakdown}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {stats.platformBreakdown.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "rgba(0, 0, 0, 0.8)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              borderRadius: "8px",
                            }}
                            formatter={(value, name, props) => [
                              formatCurrency(Number(value)),
                              props.payload?.platform || name,
                            ]}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <p className="text-gray-400">
                        No platform data available
                      </p>
                    )}
                  </div>
                </Glass>
              </motion.div>
            </div>

            {/* Recent Earnings & Top Projects */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Earnings Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl"
              >
                <Glass variant="blue" className="p-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-500/20">
                      <FaTable className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-[Recoleta] text-xl">
                        Recent Earnings
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Latest transactions
                      </p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    {stats.recentEarnings.length > 0 ? (
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 text-gray-400 font-medium text-sm">
                              Date
                            </th>
                            <th className="text-left py-3 text-gray-400 font-medium text-sm">
                              Project
                            </th>
                            <th className="text-left py-3 text-gray-400 font-medium text-sm">
                              Amount
                            </th>
                            <th className="text-left py-3 text-gray-400 font-medium text-sm">
                              Platform
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {stats.recentEarnings.map((earning) => (
                            <tr
                              key={earning._id}
                              className="border-b border-white/5 hover:bg-white/5"
                            >
                              <td className="py-4 text-sm">
                                {new Date(earning.date).toLocaleDateString()}
                              </td>
                              <td className="py-3 text-sm">
                                {earning.title || "N/A"}
                              </td>
                              <td className="py-3 text-sm font-medium text-green-400">
                                {formatCurrency(earning.amount)}
                              </td>
                              <td className="py-3">
                                <span
                                  className={`px-2 py-1 rounded text-xs font-medium ${
                                    earning.platform === "upwork"
                                      ? "bg-green-500/20 text-green-400"
                                      : earning.platform === "direct"
                                        ? "bg-blue-500/20 text-blue-400"
                                        : "bg-gray-500/20 text-gray-400"
                                  }`}
                                >
                                  {earning.platform}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-gray-400 text-center py-8">
                        No recent earnings found
                      </p>
                    )}
                  </div>
                </Glass>
              </motion.div>

              {/* Top Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl"
              >
                <Glass variant="blue" className="p-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-500/20">
                      <FaTrophy className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[Recoleta]">Top Projects</h3>
                      <p className="text-gray-400 text-sm">
                        Highest earning projects
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {stats.topProjects.length > 0 ? (
                      stats.topProjects.map((project, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/20">
                              <span className="text-sm font-bold text-blue-400">
                                {index + 1}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-white">
                                {project.project}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {formatCurrency(project.earnings)}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">
                              Earnings
                            </div>
                            <div className="font-semibold text-green-400">
                              {formatCurrency(project.earnings)}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-center py-8">
                        No project data available
                      </p>
                    )}
                  </div>
                </Glass>
              </motion.div>
            </div>
          </>
        )}

        {/* Export & Download */}
        <div className="mt-8 flex justify-end gap-4">
          {/* CSV Export */}
          <button
            onClick={exportToCSV}
            disabled={isExporting || !stats}
            className="rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Glass
              variant="white"
              className="px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              {isExporting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Exporting...
                </>
              ) : (
                <>
                  Export CSV
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </>
              )}
            </Glass>
          </button>

          {/* JSON Export */}
          <button
            onClick={exportToJSON}
            disabled={isExporting || !stats}
            className="rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Glass
              variant="white"
              className="px-6 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Export JSON
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </Glass>
          </button>

          {/* Print Report */}
          <button
            onClick={printReport}
            disabled={!stats}
            className="rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Glass
              variant="blue"
              className="px-6 py-3 flex items-center gap-2 hover:bg-blue-600/20 transition-colors"
            >
              Print Report
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </Glass>
          </button>
        </div>
      </div>
    </main>
  );
}
