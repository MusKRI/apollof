// ***** Library Imports *****
import { useMemo } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

// ***** Local Imports *****

const COTable = () => {
  const currentOpeningsData = useMemo(() => {
    const result = [
      {
        id: 75,
        title: "Content Writer",
        slug: "content-writer",
        desc: "We are looking for a mid-level Content Writer to join our team.",
        country_img: "ulr.com",
        country_name: "India",
        salary: "80k-100k",
        job_type: "Full Time",
      },
    ];

    return result;
  }, []);

  return <DataTable data={currentOpeningsData} columns={columns} />;
};

export default COTable;
