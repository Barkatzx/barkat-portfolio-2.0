"use client";

import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";

type RepoOwner = {
  avatar_url: string;
  login: string;
};

type Repo = {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  owner: RepoOwner;
};

type PRItem = {
  repository_url: string;
};

type PRData = {
  items: PRItem[];
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ContributedRepositories: FC = () => {
  const {
    data: prsData,
    error: prError,
    isLoading: isPrLoading,
  } = useSWR<PRData>(
    "https://api.github.com/search/issues?q=author:barkatzx+type:pr",
    fetcher
  );

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  useEffect(() => {
    if (!prsData?.items) return;

    const fetchRepoDetails = async () => {
      try {
        const repoUrls = prsData.items.map((pr) => pr.repository_url);
        const uniqueUrls = Array.from(new Set(repoUrls));

        const repoData: Repo[] = await Promise.all(
          uniqueUrls.map(async (url) => {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch repo: " + url);
            return res.json();
          })
        );

        setRepos(repoData);
        setLoadingRepos(false);
      } catch (err) {
        console.error("Error fetching repositories:", err);
        setLoadingRepos(false);
      }
    };

    fetchRepoDetails();
  }, [prsData]);

  if (isPrLoading || loadingRepos) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (prError) return <p>Error loading pull requests: {prError.message}</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <div key={repo.id} className="p-4 rounded-xl shadow-lg bg-rose-50">
          <div className="flex items-center space-x-4">
            <Image
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
              width={72}
              height={72}
              className="rounded-full"
              unoptimized
            />
            <div>
              <h2 className="text-xl font-semibold text-sky-700">
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.full_name}
                </a>
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {repo.description || "No description available"}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributedRepositories;
