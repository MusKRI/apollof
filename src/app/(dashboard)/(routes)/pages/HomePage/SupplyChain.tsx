import Generalmap from "@/components/Generalmap/Generalmap";
 
import { SupplySchema } from "@/components/PageSchema/Supply";

const SupplyChain = () => {
  return (
    <>
      <Generalmap value={SupplySchema} />
    </>
  );
};

export default SupplyChain;
