import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./mcq.scss";
import { Checkbox } from "antd";

const MultipleChoice = () => {
  return (
    <div className="mcq">
      <label>Choice</label>
      <div className="choice">
        <UnorderedListOutlined />
        <Input id="input" placeholder="Type here" />
        <PlusOutlined />
      </div>
      <Checkbox className="checkbox">Enable "other" options</Checkbox>
    </div>
  );
};

export default MultipleChoice;
