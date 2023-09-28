import "./sidebar.scss";
import {
  CalendarOutlined,
  HomeOutlined,
  ShareAltOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <HomeOutlined />
      <UsergroupAddOutlined />
      <CalendarOutlined />
      <ShareAltOutlined />
    </div>
  );
};

export default Sidebar;
