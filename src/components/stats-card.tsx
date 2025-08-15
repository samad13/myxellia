
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


interface StatsCardProps {
  title: string;
  icon: any;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export function StatsCard({ title, icon: ListOverview , stats }: StatsCardProps) {
  return (
    <Card className="relative rounded-2xl ">
      <CardHeader className="rounded-t-2xl absolute top-0 left-0 w-full flex flex-row items-center justify-between pb-4 pt-6 bg-[#E4E4E4]">
        <div className="flex items-center gap-2">
        
          <ListOverview />
          <CardTitle className="text-sm font-semibold text-[#292929]">{title}</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-[#4545FE] hover:text-[#4545FE]"
        >
          View all <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.87852 4.99956L0.166016 1.28706L1.22652 0.226562L5.99952 4.99956L1.22652 9.77256L0.166016 8.71206L3.87852 4.99956Z" fill="#4545FE"/>
</svg>

        </Button>
      </CardHeader>
      <CardContent className="pt-16">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-sm font-medium text-[#525252] mb-4">{stat.label}</div>
              <div className="text-2xl font-bold text-[#141414]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
