import { Bell, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">Crypto Currency</h2>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon">
          <Bell size={18} />
        </Button>

        <Button>
          <Download size={16} className="mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
}
