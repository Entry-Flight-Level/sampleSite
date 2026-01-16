export default function aboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">
        About Me
      </h1>

      <div className="space-y-6 text-gray-300">
        <p className="text-lg">
          I'm a software engineer with over 5 years of experience building reliable, scalable systems from customer facing applications at startups to infrastructure powering tens of millions of machines.
        </p>
        <p className="text-lg">
          I enjoy tackling complex technical problems across the stack, whether that's optimizing performance at scale, building robust automation pipelines, or designing systems that need to work reliably under demanding conditions. I value ownership, and understanding the full context of what I'm building. 
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-500 mb-4 mt-8">
            AWS EC2 (2022-2024)
          </h2>
          <p className="mb-4">
            I spent 2.5 years on the EC2 Windows team working on critical infrastructure running across 40+ million instances.
          </p>
          <p className="font-semibold mb-2">
            Key Projects:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>WHQL Driver Certification</strong> - Led certification of multiple virtual 
              drivers through Microsoft's testing framework. Became subject matter expert on Windows 
              qualification process, created comprehensive documentation and runbooks
            </li>
            <li>
              <strong>Windows 11 Support</strong> - Spearheaded first authentication of NVMe drivers 
              for Windows 11, created dashboards and updated pipelines for new OS version support
            </li>
            <li>
              <strong>Infrastructure Migration (Stormbreaker)</strong> - Led project migrating testing 
              infrastructure services while maintaining compatibility. Doubled test coverage and 
              completed migration ahead of schedule with improved automation and metrics
            </li>
            <li>
              <strong>Test Infrastructure</strong> - Developed automation pipelines, built custom 
              tooling for crash ticket analysis, and maintained secure services following new security 
              standards
            </li>
          </ul>
        </section>

<section>
          <h2 className="text-2xl font-bold text-gray-500 mb-4 mt-8">Lynton (2020-2022)</h2>
          <p className="mb-4">
            I started my career at an iPaaS (Integration Platform as a Service) company, building custom CRM solutions and API integrations for clients.
          </p>
          <p className="font-semibold mb-2">
            Key Projects:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>API Integration Development</strong> - Led complex integration projects between 
              third-party platforms, completing deliverables ahead of schedule with full functionality
            </li>
            <li>
              <strong>Infrastructure Optimization</strong> - Optimized data monitoring systems, 
              reducing archived logs by 1.5 billion per month and saving $30,000 annually through 
              improved filtering and automation
            </li>
            <li>
              <strong>Platform Development</strong> - Built customer-facing features including data 
              syncing, billing integration, and custom field functionality across multiple platforms
            </li>
            <li>
              <strong>Customer Solutions</strong> - Designed and implemented automation workflows and 
              AI-powered solutions for diverse client needs
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-500 mb-4 mt-8">Background</h2>
          <p className="mb-4">
            <strong>University of Texas at Austin</strong> - B.S. in Electrical and Computer Engineering, 2020
          </p>
          <p>
            I wanted to understand how code works from the ground up, so I learned everything from 
            gate logic and digital circuits to assembly language, C, and modern high-level languages. 
            This foundation has been invaluable for debugging complex systems and understanding 
            performance at every level of the stack.
          </p>
        </section>
      </div>
    </div>
  );
}