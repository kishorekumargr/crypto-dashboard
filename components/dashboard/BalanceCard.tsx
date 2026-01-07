export default function BalanceCard() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="text-sm text-muted-foreground">Total Balance</p>
      <h3 className="text-2xl font-bold">$198,994.41</h3>
      <span className="text-green-600 text-sm">+$560.00 vs last month</span>
    </div>
  );
}
