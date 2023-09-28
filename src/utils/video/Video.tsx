import { Input } from "antd";
import "./video.scss";
const { TextArea } = Input;

const Video = () => {
  return (
    <div className="video">
      <TextArea rows={4} />
      <div className="duration">
        <Input className="input" placeholder="Max duration of video" />
        <Input className="input" placeholder="in (sec/min)" />
      </div>
    </div>
  );
};

export default Video;
