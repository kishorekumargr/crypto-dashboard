export default function CryptoTable() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <h3 className="font-semibold mb-4">Leading Cryptocurrencies</h3>

      <table className="w-full text-sm">
        <thead className="text-muted-foreground">
          <tr>
            <th className="text-left">Symbol</th>
            <th>P/E</th>
            <th>Side</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td>BTC</td>
            <td>35.79</td>
            <td className="text-red-500">Sell</td>
            <td>0.01</td>
            <td>$89,816</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
