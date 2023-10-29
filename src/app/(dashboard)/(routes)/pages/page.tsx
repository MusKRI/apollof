import {
  Home,
  Building2,
  AppWindow,
  Signpost,
  Leaf,
  Link,
  Building,
} from "lucide-react";

// **** Local Imports ****
import HoverCard from "@/components/ui/hover-card/hover-card";

const pageNodes = [
  {
    title: "Home",
    subtitle: "Manage Homepage",
    href: "/pages/home",
    Icon: Home,
  },
  {
    title: "About Us",
    subtitle: "Manage Aboutus Page",
    href: "/pages/aboutus",
    Icon: Building2,
  },
  {
    title: "Contact Us",
    subtitle: "Manage Contactus Page",
    href: "/pages/contactus",
    Icon: AppWindow,
  },
  {
    title: "Career",
    subtitle: "Manage Career Page",
    href: "/pages/career",
    Icon: Signpost,
  },
  {
    title: "People & Planet",
    subtitle: "Manage People&Planet Page",
    href: "/pages/people-planet",
    Icon: Leaf,
  },
  {
    title: "Our Business",
    subtitle: "Manage OurBusiness Page",
    href: "/pages/our-business",
    Icon: Building,
  },
  {
    title: "Supply Chain",
    subtitle: "Manage Supply Chain Page",
    href: "/pages/supply-chain",
    Icon: Link,
  },
];

const PagesPage = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="h-16 flex items-center justify-between border-b px-3 bg-slate-50">
        <h2 className="text-2xl lg:text-3xl font-bold">Pages</h2>
      </div>

      <div className="p-4 space-y-4">
        <div className="max-w-lg">
          <p className="text-slate-600 text-sm">
            Here you can manage all the pages...
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pageNodes.map((page) => {
            return (
              <HoverCard
                key={page.href}
                title={page.title}
                subtitle={page.subtitle}
                href={page.href}
                Icon={page.Icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PagesPage;
