
export default function links() {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eric-luo-310315141/',
      description: 'Connect with me professionally',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Entry-Flight-Level',
      description: 'Check out my code',
      icon: '💻'
    },
    {
      name: 'Email',
      url: 'mailto:luo.eric1@gmail.com',
      description: 'luo.eric1@gmail.com',
      icon: '📧'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
        <p className="text-gray-400 text-lg">
          Feel free to reach out through any of these platforms
        </p>
      </div>
      
      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('mailto') ? undefined : '_blank'}
            rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="block p-6 border rounded-lg hover:shadow-lg hover:bg-gray-300 transition-shadow bg-white transition-all hover: hover:scale-105 duration-200 "
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{link.icon}</span>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{link.name}</h2>
                <p className="text-gray-600">{link.description}</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
