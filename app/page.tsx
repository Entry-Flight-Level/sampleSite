import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Hi, I'm Eric Luo
        </h1>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          AWS Software Engineer with 5+ years experience building systems scaling from early-stage startups to cloud infrastructure powering millions of machines.
        </p>
        <Link 
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-800 hover:text-white hover:scale-110 transition-all duration-200"
        >
          Learn more about Eric
          <span>→</span>
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {['Java', 'Powershell', 'Bash', 'Python', 'YAML', 'JSON', 'React', 'Javascript', 'Typescript', 'C', 'C++', 'HTML', 'CSS']
          .map((skill) => (
            <span 
              key={skill} 
              className="px-4 py-2 bg-gray-100 text-gray-900 font-semibold rounded-full text-sm hover:bg-cyan-100 hover:scale-105 transition-colors duration-150"
            >
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8 text-white">
          Tools
        </h2>
        <div className="flex flex-wrap gap-2">
          {['AWS EC2', 'AWS Pipeline CICD', 'QuickSight', 'Windows HLK', 'Windows Debugging Toolkit', 'Tray.ai', 'Postman', 'Git', 'FastAI', 'Jupyter Notebook', 'Hugging Face', 'Dev Containers', 'Docker', 'Vercel', 'Nextjs', 'Node'].map((tool) => (
            <span 
              key={tool} 
              className="px-4 py-2 bg-gray-100 text-gray-900 font-semibold rounded-full text-sm hover:bg-cyan-100 hover:scale-105 transition-colors duration-150"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <ProjectCard
            title="Browser-Based GIF & Video Generator"
            description="Created a web app that allows users to upload images, customize output, and generate GIFs or MP4s. Preview and processing are handled client-side, with final rendering done server-side, demonstrating full-stack browser-to-server media workflows."
          />
          <ProjectCard
            title="AI Model Exploration with FastAI"
            description="Explored deep learning workflows by training custom image classification models using FastAI. Built end-to-end pipelines, including data preprocessing, augmentation, training, and evaluation, with experiments on datasets such as cat vs. dog classification. Focused on understanding model performance, optimization, and modern ML techniques."
          />          
        </div>
        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-800 hover:text-white hover:scale-110 transition-all duration-200"
          >
            See more
            <span>→</span>
          </Link>
        </div>
      </section>

      <section className="text-center py-12 border-t border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-white">Want to get in contact?</h2>
        <p className="text-gray-300 mb-6">
          I'm always open to discussing new opportunities, interesting projects, or just chatting about tech.
        </p>
        <Link
          href="/links"
          className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all hover:scale-110 duration-200"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border border-gray-700 bg-gray-900 rounded-lg p-6 hover:shadow-lg hover:border-gray-600 hover:scale-110 transition-all duration-200">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}