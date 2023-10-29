// **** Library Imports ****
import { ColumnDef } from "@tanstack/react-table";
// import { format } from "date-fns";
// import { Link } from "react-router-dom";

// **** Local Imports ****
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

type CurrentOpening = {
  id: number;
  title: string;
  desc: string;
  salary: string;
  job_type: string;
};

export const columns: ColumnDef<CurrentOpening>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Index" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      console.log(row.original);
      return (
        <div className="flex space-x-2">
          <h4
            // to={`/current-openings/${row.original.id}`}
            className="max-w-[500px] truncate font-medium"
            // state={{
            //   currentOpening: row.original,
            // }}
          >
            {row.getValue("title")}
          </h4>
        </div>
      );
    },

    filterFn: "auto",

    enableColumnFilter: true,
  },

  {
    accessorKey: "desc",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p className="max-w-[500px] truncate">{row.getValue("desc")}</p>
        </div>
      );
    },

    filterFn: "auto",
    enableSorting: false,
    enableColumnFilter: true,
  },

  {
    accessorKey: "salary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salary" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p className="max-w-[500px] truncate">{row.getValue("salary")}</p>
        </div>
      );
    },

    filterFn: "auto",
    enableSorting: false,
    enableColumnFilter: false,
  },

  {
    accessorKey: "job_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Type" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p className="max-w-[500px] truncate">{row.getValue("job_type")}</p>
        </div>
      );
    },

    filterFn: "auto",
    enableSorting: false,
    enableColumnFilter: false,
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },

  // {
  //   accessorKey: "Email",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Email" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[500px] truncate font-medium">
  //           {row.getValue("Email")}
  //         </span>
  //       </div>
  //     );
  //   },

  //   filterFn: "auto",

  //   // filterFn: (row, id, value) => {
  //   //   return value.includes(row.getValue(id));
  //   // },
  // },

  // {
  //   accessorKey: "organisationName",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Organisation" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[500px] truncate font-medium">
  //           {row.getValue("organisationName")}
  //         </span>
  //       </div>
  //     );
  //   },

  //   // filterFn: (row, id, value) => {
  //   //   return value.includes(row.getValue(id));
  //   // },
  // },

  // // {
  // //   accessorKey: "isMain",
  // //   header: ({ column }) => (
  // //     <DataTableColumnHeader column={column} title="Client Level" />
  // //   ),
  // //   cell: ({ row }) => {
  // //     return (
  // //       <div className="flex space-x-2">
  // //         <span className="max-w-[500px] truncate font-medium">
  // //           {row.getValue("isMain")}
  // //         </span>
  // //       </div>
  // //     );
  // //   },

  // //   // filterFn: (row, id, value) => {
  // //   //   return value.includes(row.getValue(id));
  // //   // },
  // // },

  // {
  //   accessorKey: "createdAt",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Created Date" />
  //   ),
  //   cell: ({ row }) => {
  //     const date = new Date(row.getValue("createdAt"));

  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[500px] truncate font-medium capitalize">
  //           {`${format(date, "yyyy")}-${format(date, "MM")}-${format(
  //             date,
  //             "dd"
  //           )} • ${format(date, "HH")}:${format(date, "mm")}`}
  //         </span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     // console.log(row.getValue(id));
  //     const dateRange = value as {
  //       from: Date;
  //       to: Date;
  //     };

  //     const currentDate = new Date(row.getValue(id));

  //     if (currentDate >= dateRange.from && currentDate <= dateRange.to) {
  //       return true;
  //     }

  //     return false;
  //   },

  //   enableSorting: false,
  //   enableHiding: false,
  // },
];
