import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        Eric Luo
                    </Link>
                    
                    <div className='flex gap-6'>
                        <Link href="/projects" className="hover:text-gray-600">
                            Projects
                        </Link>
                        <Link href="/about" className="hover:text-gray-600">
                            About
                        </Link>
                        <Link href="/links" className="hover:text-gray-600">
                            Links
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}