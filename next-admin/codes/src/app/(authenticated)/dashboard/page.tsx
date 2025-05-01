import Header from "@/componenets/Header";
import Sidebar from "@/componenets/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title="Dashboard" />
        <main className="p-6">Welcome to the dashboard!</main>
      </div>
    </div>
  );
}
