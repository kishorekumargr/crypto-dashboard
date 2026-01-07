import BalanceCard from "@/components/dashboard/BalanceCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-6">
        <BalanceCard />
      </div>
      <div className="lg:col-span-2 space-y-6"></div>
    </div>
  );
}
