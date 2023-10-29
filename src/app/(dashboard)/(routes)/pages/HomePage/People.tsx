import Generalmap from "@/components/Generalmap/Generalmap";

import { PeopleSchema } from "@/components/PageSchema/People";

const People = () => {
  return (
    <>
      <Generalmap value={PeopleSchema} />
    </>
  );
};

export default People;
