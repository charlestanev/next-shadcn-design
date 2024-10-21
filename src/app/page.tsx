import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";
import Lines from "./Lines";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">
        <Lines className="h-[300px]">loorem ipsum</Lines>
        <Card className="h-[300px]">loorem ipsum</Card>
        <Card className="h-[300px]">loorem ipsum</Card>
      </div>
    </div>
  );
}

