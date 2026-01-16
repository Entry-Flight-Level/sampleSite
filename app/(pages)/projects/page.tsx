"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  createdAt: string;
  description?: string;
  liveUrl?: string;
};

type SortKey = "title" | "createdAt";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("createdAt");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  const filteredAndSortedProjects = useMemo(() => {
    let result = projects;

    if (searchQuery) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result = [...result].sort((a, b) => {
      if (sortKey === "title") {
        return a.title.localeCompare(b.title);
      }
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    });

    return result;
  }, [projects, searchQuery, sortKey]);

  const projectCards: Project[] = [
    {
      id: "gif-video-generator",
      title: "Browser-Based GIF & Video Generator",
      createdAt: "2026-01-01",
      description:
        "Web app allowing users to upload images, customize output, and generate GIFs or MP4s. Preview is client-side, final processing server-side. Built without Tailwind, but fully responsive and interactive.",
      liveUrl: "https://kapwinginterview-ruby.vercel.app/",
    },
    {
      id: "fastai-model-exploration",
      title: "AI Model Exploration with FastAI",
      createdAt: "2026-01-10",
      description:
        "Explored deep learning workflows by training custom image classification models using FastAI. Built end-to-end pipelines with preprocessing, augmentation, training, and evaluation on datasets like cat vs. dog, focusing on model performance and optimization.",
      liveUrl: undefined, // Optional: no live demo
    },
    ...filteredAndSortedProjects,
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-semibold">Your Projects</h1>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search projects"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm focus:outline-none"
            />

            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm"
            >
              <option value="createdAt">Date Created</option>
              <option value="title">Title</option>
            </select>
          </div>
        </header>

{/* Project Grid */}
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {projectCards.map((project) => {
    const CardContent = (
      <>
        <div className="aspect-video bg-neutral-800 rounded mb-3 flex items-center justify-center text-white text-4xl">
          {project.id === "gif-video-generator" ? "🎞️" : "🤖"}
        </div>

        <h2 className="font-medium group-hover:underline">{project.title}</h2>
        {project.description && (
          <p className="text-xs text-neutral-400 mt-1">{project.description}</p>
        )}
        {project.liveUrl && (
          <p className="text-xs text-neutral-500 mt-1 underline">View live</p>
        )}
      </>
    );

    return project.liveUrl ? (
      <a
        key={project.id}
        href={project.liveUrl}
        className="group rounded-lg border border-neutral-800 bg-neutral-900 p-4 hover:border-neutral-600 transition"
      >
        {CardContent}
      </a>
    ) : (
      <div
        key={project.id}
        className="group rounded-lg border border-neutral-800 bg-neutral-900 p-4"
      >
        {CardContent}
      </div>
    );
  })}
</section>
      </div>
    </main>
  );
}
