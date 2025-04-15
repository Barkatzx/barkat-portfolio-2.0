"use client";

import { FC } from "react";
import useSWR from "swr";

interface PullRequest {
  title: string;
  number: number;
  createdAt: string;
  state: "OPEN" | "CLOSED" | "MERGED";
  additions: number;
  deletions: number;
  changedFiles: number;
  url: string;
  repository: {
    nameWithOwner: string;
  };
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }
  const data = await res.json();
  console.log("Fetched data:", data);
  return data;
};

const PullRequests: FC = () => {
  const { data, error, isLoading } = useSWR<PullRequest[]>("/api", fetcher);

  console.log("Render state:", { data, error, isLoading });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load pull requests: {error.message}</p>;
  if (!data) return <p>No pull requests found.</p>;

  return (
    <div className="min-h-screen bg-sky-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-sky-900 mb-10">
        Pull Requests
      </h1>
      <div className="space-y-6">
        {data?.map((pr: PullRequest) => (
          <div
            key={pr.number}
            className={`border rounded-lg p-6 flex justify-between items-center shadow-md ${
              pr.state === "MERGED"
                ? "bg-green-100 border-green-300"
                : pr.state === "CLOSED"
                  ? "bg-red-100 border-red-300"
                  : "bg-purple-100 border-purple-300"
            }`}
          >
            <div>
              <h2 className="text-xl font-semibold">{pr.title}</h2>
              <p className="text-sm text-gray-600">
                #{pr.number} opened on {new Date(pr.createdAt).toDateString()}
              </p>
              <p className="text-sm">
                Repository:{" "}
                <span className="underline text-blue-600">
                  {pr.repository.nameWithOwner}
                </span>
              </p>
              <div className="mt-2 text-sm">
                <span className="text-green-600 font-bold">
                  +{pr.additions}
                </span>
                <span className="mx-1">|</span>
                <span className="text-red-600 font-bold">-{pr.deletions}</span>
                <span className="mx-1">|</span>
                <span className="text-gray-700">
                  {pr.changedFiles} files changed
                </span>
              </div>
            </div>
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-semibold hover:underline"
            >
              View PR ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PullRequests;
