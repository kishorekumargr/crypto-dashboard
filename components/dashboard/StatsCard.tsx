interface Props {
  title: string;
  value: string;
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="text-sm text-muted-foreground">{title}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
    </div>
  );
}
