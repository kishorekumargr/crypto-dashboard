import {
  LayoutDashboard,
  Star,
  LineChart,
  Inbox,
  Settings,
  LogOut,
  LucideIcon,
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  icon: LucideIcon;
  label: string;
  badge?: number;
  active?: boolean;
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <Link href="/" className="text-xl font-bold mb-6">
        Crypto
      </Link>
      <nav className="space-y-1 flex-1">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
        <SidebarItem icon={Star} label="Watchlist" />
        <SidebarItem icon={LineChart} label="Markets" />
        <SidebarItem icon={Inbox} label="Inbox" badge={13} />
      </nav>
      <div className="space-y-1">
        <SidebarItem icon={Settings} label="Settings" />
        <SidebarItem icon={LogOut} label="Logout" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon: Icon, label, badge, active }: Props) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer",
        active ? "bg-blue-100 text-blue-600" : "hover:bg-muted"
      )}
    >
      <div className="flex items-center gap-2">
        <Icon size={18} />
        <span>{label}</span>
      </div>
      {badge && (
        <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">{badge}</span>
      )}
    </div>
  );
}
