import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { Box } from "@mui/material";
import "./imageUpload.scss";

const ImageUpload = () => {
  const uploadButton = (
    <div className="img">
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
      <div className="title">
        <h2>Upload Cover Image</h2>
      </div>
      <Box
        className="box"
        component="form"
        sx={{
          width: "40%",
          "& > :not(style)": { m: 1, width: "50ch" },
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
        noValidate
        autoComplete="off"
      >
        <div className="upload">
          <Upload listType="picture-circle">{uploadButton}</Upload>
        </div>
      </Box>
    </>
  );
};

export default ImageUpload;
