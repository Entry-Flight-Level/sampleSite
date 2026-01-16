"use client";

type Project = {
  id: string;
  title: string;
  createdAt: string;
  description?: string;
  liveUrl?: string;
  icon: string;
};

export default function ProjectsPage() {
  const projectCards: Project[] = [
    {
      id: "gif-video-generator",
      title: "Browser-Based GIF & Video Generator",
      createdAt: "2026-01-01",
      description:
        "Web app allowing users to upload images, customize output, and generate GIFs or MP4s. Preview is generated client-side, with final processing handled server-side.",
      liveUrl: "https://kapwinginterview-ruby.vercel.app/",
      icon: "🎞️",
    },
    {
      id: "fastai-model-exploration",
      title: "AI Model Exploration with FastAI",
      createdAt: "2026-01-10",
      description:
        "Explored deep learning workflows by training image classification models using FastAI, covering preprocessing, augmentation, training, and evaluation.",
      icon: "🤖",
    },
    {
      id: "opensource-typescript",
      title: "Open Source TypeScript Exploration",
      createdAt: "2026-01-15",
      description:
        "Explored open source TypeScript codebases to understand real-world architecture, tooling, and contributor workflows, experimenting locally to deepen familiarity with large-scale TS projects.",
      icon: "🧩",
    },
      {
      id: "custom-client-plugins",
      title: "Custom Client Plugin Development",
      createdAt: "2026-01-20",
      description:
        "Designed and implemented custom client-side plugins using extension APIs and event-driven architecture. Built UI overlays and real-time state tracking with an emphasis on performance and maintainable plugin design.",
      icon: "🧠",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header>
          <h1 className="text-2xl font-semibold">Projects</h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectCards.map((project) => {
            const CardContent = (
              <>
                <div className="aspect-video bg-neutral-800 rounded mb-3 flex items-center justify-center text-4xl">
                  {project.icon}
                </div>

                <h2 className="font-medium">{project.title}</h2>

                {project.description && (
                  <p className="text-xs text-neutral-400 mt-1">
                    {project.description}
                  </p>
                )}

                {project.liveUrl && (
                  <p className="text-xs text-neutral-500 mt-2 underline">
                    View live
                  </p>
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
                className="rounded-lg border border-neutral-800 bg-neutral-900 p-4"
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
