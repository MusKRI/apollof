import Generalmap from "@/components/Generalmap/Generalmap";
import { HomeSchema } from "@/components/PageSchema/HomePage";

const Homepage = () => {
  return (
    <>
      <Generalmap value={HomeSchema} />
    </>
  );
};

export default Homepage;
