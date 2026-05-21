import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">
      <section className="relative z-10 pt-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 animate-gradient-xy">
          Hi, I'm Eric Luo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl font-light">
          AWS Software Engineer with 5+ years experience building systems scaling from early-stage startups to cloud infrastructure powering millions of machines.
        </p>
        <Link 
          href="/about"
          className="group inline-flex items-center gap-3 px-8 py-4 glass text-white font-semibold rounded-full glass-hover shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
        >
          Learn more about Eric
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </section>

      <section className="relative">
        <div className="absolute -inset-x-6 -inset-y-6 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-3xl z-[-1] rounded-[3rem]"></div>
        <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-4">
          <span className="w-10 h-[2px] bg-cyan-500"></span>
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {['Java', 'Powershell', 'Bash', 'Python', 'YAML', 'JSON', 'React', 'Javascript', 'Typescript', 'C', 'C++', 'HTML', 'CSS']
          .map((skill) => (
            <span 
              key={skill} 
              className="px-5 py-2.5 glass rounded-full text-sm font-medium text-cyan-50 glass-hover hover:border-cyan-500/50 hover:text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.02)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-10 mt-20 text-white flex items-center gap-4">
          <span className="w-10 h-[2px] bg-purple-500"></span>
          Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {['AWS EC2', 'AWS Pipeline CICD', 'QuickSight', 'Windows HLK', 'Windows Debugging Toolkit', 'Tray.ai', 'Postman', 'Git', 'FastAI', 'Jupyter Notebook', 'Hugging Face', 'Dev Containers', 'Docker', 'Vercel', 'Nextjs', 'Node'].map((tool) => (
            <span 
              key={tool} 
              className="px-5 py-2.5 glass rounded-full text-sm font-medium text-purple-50 glass-hover hover:border-purple-500/50 hover:text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.02)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-4">
          <span className="w-10 h-[2px] bg-indigo-500"></span>
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <ProjectCard
            title="Browser-Based GIF & Video Generator"
            description="Built a media processing web app as a hands-on deep dive into React and modern front-end development. Implemented file uploading and learned how to generate GIF and MP4 previews entirely client-side before sending data for final server-side rendering."
          />
          <ProjectCard
            title="Exploration of All Things AI"
            description="An ongoing exploration of artificial intelligence, starting from low-level NLP and core ML fundamentals, and expanding into experimenting with modern agentic processes using tools like Antigravity, LM Studio, and Claude."
          />          
        </div>
        <div className="text-center">
          <Link 
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 glass text-white font-semibold rounded-full glass-hover shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)]"
          >
            See more projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      <section className="text-center py-24 px-6 relative overflow-hidden rounded-[3rem] glass border-t-0 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent opacity-60"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Want to get in contact?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            I'm always open to discussing new opportunities, interesting projects, or just chatting about tech.
          </p>
          <Link
            href="/links"
            className="inline-block px-12 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(34,211,238,0.4)]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass rounded-3xl p-8 glass-hover relative overflow-hidden group min-h-[250px] flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300 relative z-10">{title}</h3>
      <p className="text-gray-400 leading-relaxed relative z-10 font-light group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
  );
}