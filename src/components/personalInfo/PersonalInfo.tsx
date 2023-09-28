import { useState } from "react";
import { Box } from "@mui/material";
import { Checkbox, Switch } from "antd";
import AddOption from "../addOption/AddOption";
import AddContent from "../addContent/AddContent";

const PersonalInfo = (props: any) => {
  const [addContent, setAddContent] = useState(false);
  const handleAdd = (e: any) => {
    e.preventDefault();
    setAddContent(!addContent);
  };
  return (
    <>
      <div className="title">
        <h2>Personal Information</h2>
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
          <label>First Name</label>
          <hr />
          <label>Last Name</label>
          <hr />
          <label>Email</label>

          <hr />

          <div className="number">
            <div className="items">
              <div className="label">
                <label>
                  <b>Phone</b> (without dial code)
                </label>{" "}
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

          <div className="nationality">
            <div className="items">
              <div className="label">
                <label>Nationality</label>{" "}
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

          <div className="residence">
            <div className="items">
              <div className="label">
                <label>Current Residence</label>{" "}
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

          <div className="id">
            <div className="items">
              <div className="label">
                <label>ID Number</label>{" "}
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

          <div className="dob">
            <div className="items">
              <div className="label">
                <label>Date of Birth</label>{" "}
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

          <div className="gender">
            <div className="items">
              <div className="label">
                <label>Gender</label>{" "}
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

export default PersonalInfo;
