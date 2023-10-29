import {
  Home,
  LucideIcon,
  // Landmark,
  Layers,
  // Briefcase,
  // Users2,
  // UserCheck2,
  // Calendar,
  // Inbox,
  // BarChartBig,
  // Settings,
  // Lock,
  // Building,
} from "lucide-react";

export const sidebarItems: (
  | {
      id: null;
    }
  | {
      id: string;
      label: string;
      slug: string;
      icon: LucideIcon;
    }
)[] = [
  {
    id: "dashboard",
    label: "Home",
    slug: "/dashboard",
    icon: Home,
  },

  {
    id: "pages",
    label: "Pages",
    slug: "/pages",
    icon: Layers,
  },

  {
    id: "current-openings",
    label: "Current Openings",
    slug: "/current-openings",
    icon: Layers,
  },

  // {
  //   id: "organisations",
  //   label: "Organisations",
  //   slug: "/organisations",
  //   icon: Building,
  // },

  // {
  //   id: "jobs",
  //   label: "Jobs",
  //   slug: "/jobs",
  //   icon: Briefcase,
  // },

  // {
  //   id: "candidates",
  //   label: "Candidates",
  //   slug: "/candidates",
  //   icon: Users2,
  // },

  // {
  //   id: null,
  // },

  // {
  //   id: "placements",
  //   label: "Placements",
  //   slug: "/placements",
  //   icon: UserCheck2,
  // },

  // {
  //   id: "activities",
  //   label: "Activities",
  //   slug: "/activities",
  //   icon: Calendar,
  // },

  // {
  //   id: "inbox",
  //   label: "Inbox",
  //   slug: "/inbox",
  //   icon: Inbox,
  // },

  // {
  //   id: null,
  // },

  // {
  //   id: "reports",
  //   label: "Reports",
  //   slug: "/reports",
  //   icon: BarChartBig,
  // },

  // {
  //   id: "settings",
  //   label: "Settings",
  //   slug: "/settings",
  //   icon: Settings,
  // },

  // {
  //   id: "administration",
  //   label: "Administration",
  //   slug: "/administration",
  //   icon: Lock,
  // },
];
