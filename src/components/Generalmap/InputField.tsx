type InputProp = {
  type: any[]; // Replace 'any[]' with the specific type you intend to use for 'value'
};

const InputFields = ({ type }: InputProp) => {
  console.log("kuchbhi", type);
  return (
    <>
      <input
        style={{ width: "100%", height: "40px" }}
        className="form-control"
        type="text"
        name=""
        id=""
        placeholder={type[1]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
      />
    </>
  );
};

export default InputFields;
