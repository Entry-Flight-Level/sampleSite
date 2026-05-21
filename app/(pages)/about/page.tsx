export default function aboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        About Me
      </h1>

      <div className="space-y-12">
        <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>
          <div className="space-y-6 text-xl text-gray-300 font-light leading-relaxed relative z-10">
            <p>
              I'm a software engineer with over 5 years of experience building reliable, scalable systems from customer facing applications at startups to infrastructure powering tens of millions of machines.
            </p>
            <p>
              I enjoy tackling complex technical problems across the stack, whether that's optimizing performance at scale, building robust automation pipelines, or designing systems that need to work reliably under demanding conditions. I value ownership, and understanding the full context of what I'm building.
            </p>
          </div>
        </div>

        <div className="space-y-8 pl-6 md:pl-10 border-l-2 border-white/10 relative before:absolute before:inset-y-0 before:left-[-2px] before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-indigo-500">

          <section className="relative glass p-8 rounded-3xl glass-hover group">
            <div className="absolute -left-[33px] md:-left-[49px] top-10 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#050505] group-hover:scale-150 transition-transform duration-300"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
              AWS EC2
              <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">2022-2025</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 font-light">
              I spent 3 years on the EC2 Windows team working on critical infrastructure running across 40+ million instances.
            </p>
            <div className="space-y-4">
              <p className="font-semibold text-cyan-300 tracking-wide text-sm uppercase">Key Projects</p>
              <ul className="space-y-4 text-gray-300 font-light">
                <li className="flex gap-3">
                  <span className="text-cyan-500">▹</span>
                  <div><strong className="text-white font-medium">WHQL Driver Certification</strong> - Led certification of multiple virtual drivers through Microsoft's testing framework. Became subject matter expert on Windows qualification process, created comprehensive documentation and runbooks</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500">▹</span>
                  <div><strong className="text-white font-medium">Windows 11 Support</strong> - Spearheaded first authentication of NVMe drivers for Windows 11, created dashboards and updated pipelines for new OS version support</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500">▹</span>
                  <div><strong className="text-white font-medium">Infrastructure Migration (Stormbreaker)</strong> - Led project migrating testing infrastructure services while maintaining compatibility. Doubled test coverage and completed migration ahead of schedule with improved automation and metrics</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500">▹</span>
                  <div><strong className="text-white font-medium">Test Infrastructure</strong> - Developed automation pipelines, built custom tooling for crash ticket analysis, and maintained secure services following new security standards</div>
                </li>
              </ul>
            </div>
          </section>

          <section className="relative glass p-8 rounded-3xl glass-hover group mt-8">
            <div className="absolute -left-[33px] md:-left-[49px] top-10 w-4 h-4 rounded-full bg-purple-400 border-4 border-[#050505] group-hover:scale-150 transition-transform duration-300"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
              Lynton
              <span className="text-sm font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full w-fit">2020-2022</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 font-light">
              I started my career at an iPaaS (Integration Platform as a Service) company, building custom CRM solutions and API integrations for clients.
            </p>
            <div className="space-y-4">
              <p className="font-semibold text-purple-300 tracking-wide text-sm uppercase">Key Projects</p>
              <ul className="space-y-4 text-gray-300 font-light">
                <li className="flex gap-3">
                  <span className="text-purple-500">▹</span>
                  <div><strong className="text-white font-medium">API Integration Development</strong> - Led complex integration projects between third-party platforms, completing deliverables ahead of schedule with full functionality</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">▹</span>
                  <div><strong className="text-white font-medium">Infrastructure Optimization</strong> - Optimized data monitoring systems, reducing archived logs by 1.5 billion per month and saving $30,000 annually through improved filtering and automation</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">▹</span>
                  <div><strong className="text-white font-medium">Platform Development</strong> - Built customer-facing features including data syncing, billing integration, and custom field functionality across multiple platforms</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">▹</span>
                  <div><strong className="text-white font-medium">Customer Solutions</strong> - Designed and implemented automation workflows and AI-powered solutions for diverse client needs</div>
                </li>
              </ul>
            </div>
          </section>

          <section className="relative glass p-8 rounded-3xl glass-hover group mt-8">
            <div className="absolute -left-[33px] md:-left-[49px] top-10 w-4 h-4 rounded-full bg-indigo-400 border-4 border-[#050505] group-hover:scale-150 transition-transform duration-300"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
              University of Texas at Austin
              <span className="text-sm font-medium text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full w-fit">2020</span>
            </h2>
            <p className="text-lg text-cyan-100 mb-6 font-light">
              B.S. in Electrical and Computer Engineering
            </p>
            <p className="text-gray-300 font-light leading-relaxed">
              I wanted to understand how code works from the ground up, so I learned everything from gate logic and digital circuits to assembly language, C, and modern high-level languages. This foundation has been invaluable for debugging complex systems and understanding performance at every level of the stack.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}