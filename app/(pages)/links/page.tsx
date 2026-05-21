export default function links() {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eric-luo-310315141/',
      description: 'Connect with me professionally',
      icon: '💼',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Entry-Flight-Level',
      description: 'Check out my code',
      icon: '💻',
      color: 'from-gray-300 to-gray-500'
    },
    {
      name: 'Email',
      url: 'mailto:luo.eric1@gmail.com',
      description: 'luo.eric1@gmail.com',
      icon: '📧',
      color: 'from-cyan-400 to-purple-500'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full z-[-1]"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500">
          Let's Connect
        </h1>
        <p className="text-gray-400 text-xl font-light">
          Feel free to reach out through any of these platforms.
        </p>
      </div>
      
      <div className="space-y-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('mailto') ? undefined : '_blank'}
            rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="block glass rounded-3xl p-8 glass-hover group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.03] to-white/0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
            <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${link.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className="flex items-center gap-6 relative z-10">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{link.icon}</span>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-1">{link.name}</h2>
                <p className="text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300">{link.description}</p>
              </div>
              <span className="text-gray-500 text-3xl font-light group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
