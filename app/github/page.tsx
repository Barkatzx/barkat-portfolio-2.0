"use client";

import ContributedRepositories from "@/components/Organization";
import { motion } from "framer-motion";
import { FC } from "react";
import GitHubCalendar from "react-github-calendar";
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
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};

const PullRequests: FC = () => {
  const { data, error, isLoading } = useSWR<PullRequest[]>("/api", fetcher);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <p>Failed to load pull requests: {error.message}</p>;
  if (!data) return <p>No pull requests found.</p>;

  const openPRs = data.filter((pr) => pr.state === "OPEN");
  const mergedPRs = data.filter((pr) => pr.state === "MERGED");
  const closedPRs = data.filter((pr) => pr.state === "CLOSED");

  const renderPRs = (prs: PullRequest[], color: string) => {
    if (prs.length === 0) return null;

    return (
      <motion.div
        className={`rounded-xl border shadow-md ${color}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="space-y-4">
          {prs.map((pr) => (
            <div
              key={pr.number}
              className="rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{pr.title}</h3>
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
                  <span className="text-red-600 font-bold">
                    -{pr.deletions}
                  </span>
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
      </motion.div>
    );
  };

  return (
    <motion.div
      className="px-5 md:px-20 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="font-[Recoleta] text-4xl font-bold mb-6">
        Coding Activity Overview
      </h1>
      <div className="mb-5">
        <GitHubCalendar username="barkatzx" />
      </div>
      <div className="mb-5">
        <h1 className="font-[Recoleta] text-4xl font-bold mb-5">
          Contributed Company
        </h1>
        <ContributedRepositories />
      </div>
      <h1 className="font-[Recoleta] text-4xl font-bold mb-6">Pull Requests</h1>
      {renderPRs(openPRs, "bg-green-50 border-green-400")}
      {renderPRs(mergedPRs, "bg-violet-50 border-violet-400")}
      {renderPRs(closedPRs, "bg-red-50 border-red-400")}
    </motion.div>
  );
};

export default PullRequests;
