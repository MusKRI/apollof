import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import COTable from "./components/COTable/COTable";

const CurrentOpeningsPage = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="h-16 flex items-center justify-between border-b px-3 bg-slate-50">
        <h2 className="text-2xl lg:text-3xl font-bold">Current Openings</h2>

        <Button asChild size="sm">
          <Link
            className="flex items-center gap-1"
            to="/current-openings/new"
            state={{
              currenOpening: null,
            }}
          >
            <Plus className="w-4 h-4" />
            <span>Add New</span>
          </Link>
        </Button>
      </div>

      <div className="p-4 space-y-4">
        <div className="max-w-lg">
          <p className="text-slate-600 text-sm">
            Here you can manage all the current openings...
          </p>
        </div>

        <div className="">
          <COTable />
        </div>
      </div>
    </div>
  );
};

export default CurrentOpeningsPage;
