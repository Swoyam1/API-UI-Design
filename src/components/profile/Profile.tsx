import { useState } from "react";
import { Box } from "@mui/material";
import { Checkbox, Switch } from "antd";
import AddOption from "../addOption/AddOption";
import AddContent from "../addContent/AddContent";

const Profile = (props: any) => {
  const [addContent, setAddContent] = useState(false);
  const handleAdd = (e: any) => {
    e.preventDefault();
    setAddContent(!addContent);
  };
  return (
    <>
      <div className="title">
        <h2>Profile</h2>
      </div>
      <Box
        className=""
        component="form"
        sx={{
          width: "40%",
          padding: "30px",
          "& > :not(style)": { m: 1, width: "50ch" },
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
        noValidate
        autoComplete="off"
      >
        <div className="formInput">
          <div className="education">
            <div className="items">
              <div className="label">
                <label>Education</label>{" "}
              </div>
              <div className="option">
                <Checkbox onChange={props.onChangeCheckBox}>Internal</Checkbox>
                <Switch
                  size="small"
                  defaultChecked
                  onChange={props.onChangeToggle}
                />
                <label>Hide</label>
              </div>
            </div>
          </div>

          <hr />

          <div className="experience">
            <div className="items">
              <div className="label">
                <label>Experience</label>{" "}
              </div>
              <div className="option">
                <Checkbox onChange={props.onChangeCheckBox}>Internal</Checkbox>
                <Switch
                  size="small"
                  defaultChecked
                  onChange={props.onChangeToggle}
                />
                <label>Hide</label>
              </div>
            </div>
          </div>

          <hr />

          <div className="resume">
            <div className="items">
              <div className="label">
                <label>Resume</label>{" "}
              </div>
              <div className="option">
                <Checkbox onChange={props.onChangeCheckBox}>Internal</Checkbox>
                <Switch
                  size="small"
                  defaultChecked
                  onChange={props.onChangeToggle}
                />
                <label>Hide</label>
              </div>
            </div>
          </div>

          <hr />

          <AddContent addContent={addContent} />
        </div>

        <AddOption handleAdd={handleAdd} />
      </Box>
    </>
  );
};

export default Profile;
