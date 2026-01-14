import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm Eric Luo
        </h1>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          AWS Software Engineer with 5+ years experience building systems scaling from early-stage startups to cloud infrastructure powering millions of machines.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 text-gray-500 font-bold">
          {['Java', 'Powershell', 'Bash', 'Python', 'YAML', 'JSON', 'React', 'Javascript', 'Typescript', 'C', 'HTML', 'CSS']
          .map((skills) => (
            <span key={skills} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              {skills}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-4">
          Tools
        </h2>
        <div className="flex flex-wrap gap-2 text-gray-500 font-bold">
        {['AWS EC2', 'AWS Pipeline CICD', 'QuickSight', 'Windows HLK', 'Windows Debugging Toolkit', 'Tray.ai', 'Postman', 'Git', 'FastAI', 'Jupyter Notebook', 'Hugging Face', 'Dev Containers', 'Docker', 'Vercel', 'Nextjs', 'Node'].map((tools) =>(
          <span key={tools} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
            {tools}
          </span>
        ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="One"
            description="description"
          />
          <ProjectCard
            title="Two"
            description="description"
          />          
        </div>
      </section>
        
    </div>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}