
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { SalesOverview } from "@/components/sales-overview";
import { StatsCard } from "@/components/stats-card";
import { PropertyCard } from "@/components/property-card";
import ListOverview from "@/components/svgs/listOverview";
import ListOverviewUser from "@/components/svgs/listOverviewUser";
import{listingsStats, usersStats} from "@/hooks/startCardHooks";
import { properties } from "@/hooks/propertyCardHooks";

export default function Dashboard() {
  
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      <Navigation />

      <div className="p-4 md:p-6 mt-[128px]">
        <h1 className="text-2xl font-semibold text-[#191919] mb-8">
          Welcome, Ahmed
        </h1>

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex-1 xl:flex-[2]">
            <SalesOverview />
          </div>

        
          <div className="  xl:w-80 xl:flex-shrink-0 space-y-6">
            <StatsCard
              title="Listings Overview"
              icon={ListOverview}
              stats={listingsStats}
            />
            <StatsCard
              title="Users Overview"
              icon={ListOverviewUser}
              stats={usersStats}
            />
          </div>
        </div>

      
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                label={property.label}
                image={property.image}
                alt={property.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
