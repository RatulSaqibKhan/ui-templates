import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-primary text-secondary p-6">
      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:underline">Dashboard</Link>
        <Link href="/login" className="block hover:underline">Logout</Link>
      </nav>
    </aside>
  );
}
