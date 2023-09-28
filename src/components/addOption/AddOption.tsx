import { PlusCircleTwoTone } from "@ant-design/icons";

const AddOption = ({ handleAdd }: any) => {
  return (
    <>
      <div className="addQuestion">
        <button type="button" onClick={handleAdd}>
          <PlusCircleTwoTone />
          <b>Add a question</b>
        </button>
      </div>
    </>
  );
};

export default AddOption;
