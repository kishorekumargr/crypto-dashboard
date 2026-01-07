import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TradePanel() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm space-y-4">
      <div className="flex gap-2">
        <Button className="flex-1">Buy</Button>
        <Button variant="outline" className="flex-1">
          Sell
        </Button>
      </div>

      <Input placeholder="Amount (USD)" />
      <Input placeholder="Leverage" />

      <Button className="w-full">Buy ETH</Button>
    </div>
  );
}
