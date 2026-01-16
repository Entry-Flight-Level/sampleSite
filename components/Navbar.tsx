import Link from "next/link";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        relative
        text-sm font-medium
        text-white/70
        transition-all duration-200
        hover:text-white
        hover:-translate-y-0.5
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-full
        after:scale-x-0
        after:origin-left
        after:bg-white
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
    <nav className="border-b border-white/10 bg-black">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
            href="/"
            className="
                relative text-white text-xl font-semibold tracking-tight
                transition-all duration-300
                hover:text-white
                hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full
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
