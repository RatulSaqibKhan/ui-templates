export default function Header({ title }: { title: string }) {
  return (
    <header className="bg-primary shadow px-6 py-4 border-b">
      <h1 className="text-lg text-secondary font-semibold">{title}</h1>
    </header>
  );
}