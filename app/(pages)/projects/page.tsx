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
        "Built a media processing web app as a hands-on deep dive into React and modern front-end development. Implemented file uploading and learned how to generate GIF and MP4 previews entirely client-side before sending data for final server-side rendering.",
      liveUrl: "https://kapwinginterview-ruby.vercel.app/",
      icon: "🎞️",
    },
    {
      id: "all-things-ai",
      title: "Exploration of All Things AI",
      createdAt: "2026-01-10",
      description:
        "An ongoing exploration of artificial intelligence, starting from low-level NLP and core ML fundamentals, and expanding into experimenting with modern agentic processes using tools like Antigravity, LM Studio, and Claude.",
      icon: "🤖",
    },
    {
      id: "elasticsearch-contribution",
      title: "Open Source Contribution: ElasticSearch",
      createdAt: "2026-01-15",
      description:
        "Contributed to the ElasticSearch open source repository by refactoring and optimizing test suites. Removed redundant methods from UnsignedLongFieldMapperTests and ScaledFloatFieldMapperTests that were already covered by parent classes, improving test suite efficiency through polymorphism.",
      icon: "🧩",
    },
      {
      id: "ai-validation-tuning",
      title: "AI Tuning Validation Utility",
      createdAt: "2026-01-20",
      description:
        "Currently in the early stages of developing a specialized tool designed to assist with validation accuracy during AI model tuning, exploring new ways to evaluate and refine model performance.",
      icon: "🧠",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pb-2">
          Projects
        </h1>
        <p className="text-xl text-gray-400 mt-6 font-light max-w-2xl">
          A collection of things I've built and explored.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectCards.map((project) => {
          const CardContent = (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="aspect-video glass rounded-2xl mb-8 flex items-center justify-center text-6xl shadow-inner bg-black/20 group-hover:scale-[1.02] transition-transform duration-500">
                  {project.icon}
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-4">
                  {project.title}
                </h2>

                {project.description && (
                  <p className="text-gray-400 font-light leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                )}

                {project.liveUrl && (
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                    View Live Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                )}
              </div>
            </>
          );

          return project.liveUrl ? (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-3xl p-6 md:p-8 glass-hover relative overflow-hidden group flex flex-col"
            >
              {CardContent}
            </a>
          ) : (
            <div
              key={project.id}
              className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden group flex flex-col"
            >
              {CardContent}
            </div>
          );
        })}
      </section>
    </div>
  );
}
