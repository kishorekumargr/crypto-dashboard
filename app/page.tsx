import BalanceCard from "@/components/dashboard/BalanceCard";
import PriceChart from "@/components/dashboard/PriceChart";
import StatsCard from "@/components/dashboard/StatsCard";
import TradePanel from "@/components/dashboard/TradePanel";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-6">
        <BalanceCard />
        <StatsCard title="Traded Volume" value="$40,276.28" />
        <TradePanel />
      </div>
      <div className="lg:col-span-2 space-y-6">
        <PriceChart />
      </div>
    </div>
  );
}
