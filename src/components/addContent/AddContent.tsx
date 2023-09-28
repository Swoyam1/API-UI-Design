import { useState } from "react";
import Creatable from "react-select/creatable";
import { Input } from "antd";
import Video from "../../utils/video/Video";
import MultipleChoice from "../../utils/mcq/MultipleChoice";
import YesNo from "../../utils/yesno/YesNo";

const AddContent = ({ addContent }: any) => {
  const [selectValue, setSelectValue] = useState(null);

  const handleSelectChange = (e: any) => {
    setSelectValue(e.value);
  };

  const handleSelected = (selectValue: any) => {
    if (selectValue === "mcq") {
      return <MultipleChoice />;
    } else if (selectValue === "video") {
      return <Video />;
    } else if (selectValue === "yesno") {
      return <YesNo />;
    } else {
      return "";
    }
  };

  const options = [
    { value: "paragraph", label: "Paragraph" },
    { value: "video", label: "Video" },
    { value: "yesno", label: "Yes/No" },
    { value: "mcq", label: "Multiple Choice" },
  ];

  return (
    <>
      {addContent ? (
        <div className="additionalContent">
          <label htmlFor="create">Type</label>
          <Creatable
            id="create"
            options={options}
            onChange={handleSelectChange}
          />
          <label htmlFor="input">Question</label>
          <Input id="input" placeholder="Type here" />
          {handleSelected(selectValue)}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddContent;
