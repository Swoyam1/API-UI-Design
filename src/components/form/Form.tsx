import "./form.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import type { CheckboxChangeEvent } from "antd/es/checkbox";

import PersonalInfo from "../personalInfo/PersonalInfo";
import Profile from "../profile/Profile";
import ImageUpload from "../imageUpload/ImageUpload";

const Form = () => {
  const [personalInformation, setPersonalInformation] = useState([]);
  const [profile, setProfile] = useState([]);

  const onChangeCheckBox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChangeToggle = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "http://127.0.0.1:4010/api/133.29475762714387/programs/sunt/application-form"
        );
        const data = await response.data.data.attributes;
        setPersonalInformation(data.personalInformation);
        console.log(personalInformation);
        setProfile(profile);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="formContainer">
      <div className="imageUpload">
        <ImageUpload />
      </div>
      <div className="personalInfo">
        <PersonalInfo
          onChangeCheckBox={onChangeCheckBox}
          onChangeToggle={onChangeToggle}
        />
      </div>
      <div className="profile">
        <Profile
          onChangeCheckBox={onChangeCheckBox}
          onChangeToggle={onChangeToggle}
        />
      </div>
    </div>
  );
};

export default Form;
