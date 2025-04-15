import { NextResponse } from "next/server";

export async function GET() {
  const query = `{
    viewer {
      pullRequests(first: 10, states: [OPEN, CLOSED, MERGED]) {
        nodes {
          title
          number
          createdAt
          state
          additions
          deletions
          changedFiles
          url
          repository {
            nameWithOwner
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("GitHub API error:", error);
      return NextResponse.json({ error }, { status: res.status });
    }

    const json = await res.json();
    console.log("GitHub API response:", json);

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
    };

    return NextResponse.json(json.data.viewer.pullRequests.nodes, { headers });
  } catch (error: unknown) {
    console.error("Server error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
