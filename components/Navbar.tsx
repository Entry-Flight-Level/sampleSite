import Link from "next/link";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        relative
        text-sm font-medium
        text-white/70
        transition-all duration-300
        hover:text-cyan-400
        after:absolute
        after:left-0
        after:-bottom-1.5
        after:h-[2px]
        after:w-full
        after:scale-x-0
        after:origin-left
        after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500
        after:transition-transform
        after:duration-300
        hover:after:scale-x-100
      "
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="
            text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400
            transition-all duration-300 hover:to-cyan-200 hover:scale-105
          "
        >
          Eric Luo
        </Link>
        <div className="flex gap-8">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/links">Links</NavLink>
        </div>
      </div>
    </nav>
  );
}
