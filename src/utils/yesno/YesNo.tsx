import { Checkbox } from "antd";
import "./yesno.scss";

const YesNo = () => {
  return (
    <div className="choice">
      <Checkbox>Disqualify candidate if the answer is no</Checkbox>
    </div>
  );
};

export default YesNo;
