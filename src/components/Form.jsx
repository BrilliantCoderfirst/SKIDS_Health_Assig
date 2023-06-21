import React, { useState } from "react";
import SideImage from "../assest/img/formImage.png";
import Input from "./Input";
import Button from "./Button";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/action";
import { v4 as uuid } from "uuid";

const Form = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    id: uuid(),
    name: "",
    email: "",
    number: "",
    photo: [],
  });

  const handleUserData = (e) => {
    const { name, value, files } = e.target;
    setUserData({
      ...userData,
      [name]: name !== "photo" ? value : URL.createObjectURL(files[0]),
    });
  };

  const handleSubmitUserData = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.number === "" ||
      userData.photo.length === 0
    ) {
      alert("Please Enter Data");
    } else {
      if (!userData.email.match(validRegex)) {
        alert("Please Enter Valid Email Address");
      } else {
        if (userData.number.length !== 10) {
          alert("Please Enter Correct Mobile Number");
        } else {
          dispatch(addUserData(userData));
          alert("User Add Successfully :)");
          setUserData({
            id: uuid(),
            name: "",
            email: "",
            number: "",
            photo: [],
          });
        }
      }
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="form">
          <div className="leftFormPart">
            <h1>Add User</h1>
            <form action="">
              <div className="formInput">
                <PersonIcon />
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={userData.name}
                  onChange={handleUserData}
                />
              </div>
              <div className="formInput">
                <EmailIcon />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleUserData}
                />
              </div>
              <div className="formInput">
                <PhoneAndroidIcon />
                <Input
                  name="number"
                  type="number"
                  placeholder="Password"
                  value={userData.number}
                  onChange={handleUserData}
                />
              </div>
              <div className="formInput photoInput">
                <Input name="photo" type="file" onChange={handleUserData} />
              </div>
            </form>
            <div className="btn">
              <Button text="Add" onClick={handleSubmitUserData} />
            </div>
          </div>

          <div className="rightFormPart">
            <img src={SideImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
