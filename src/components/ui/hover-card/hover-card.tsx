import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type HoverCardProps = {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  href: string;
};

const HoverCard = ({ title, subtitle, Icon, href }: HoverCardProps) => {
  return (
    <Link
      to={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon
        className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-green-300 group-hover:rotate-12 transition-transform duration-300"
        size={128}
      />
      <Icon className="mb-2 text-2xl text-primary group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </Link>
  );
};

export default HoverCard;
