import React, { useEffect, useState } from "react";
import SideImage from "../assest/img/formImage.png";
import Input from "./Input";
import Button from "./Button";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editUserData } from "../redux/action";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const [editData, setEditData] = useState({
    name: "",
    email: "",
    number: "",
    photo: [],
  });

  const param = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.userOperation;
  });

  useEffect(() => {
    let userObj = data.filter((items) => items.id === param.id);
    setEditData(userObj.length !== 0 ? userObj[0] : {});
  }, []);

  const handleEditUserData = (e) => {
    const { name, value, files } = e.target;
    setEditData({
      ...editData,
      [name]: name !== "photo" ? value : URL.createObjectURL(files[0]),
    });
  };

  const handleEditUserDataFun = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      editData.name === "" ||
      editData.email === "" ||
      editData.number === "" ||
      editData.photo === ""
    ) {
      alert("Please Enter Data");
    } else {
      if (!editData.email.match(validRegex)) {
        alert("Please Enter Valid Email Address");
      } else {
        if (editData.number.length !== 10) {
          alert("Please Enter Correct Mobile Number");
        } else {
          dispatch(editUserData(editData));
          alert("User Data Edit Successfully :)");
          setEditData({
            name: "",
            email: "",
            number: "",
            photo: [],
          });
          navigate("/SKIDS_Health_Assig/");
        }
      }
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="form">
          <div className="leftFormPart">
            <h1>Edit User</h1>
            <form action="">
              <div className="formInput">
                <PersonIcon />
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={editData.name}
                  onChange={handleEditUserData}
                />
              </div>
              <div className="formInput">
                <EmailIcon />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={editData.email}
                  onChange={handleEditUserData}
                />
              </div>
              <div className="formInput">
                <PhoneAndroidIcon />
                <Input
                  name="number"
                  type="number"
                  placeholder="Password"
                  value={editData.number}
                  onChange={handleEditUserData}
                />
              </div>
              <div className="formInput photoInput">
                <Input name="photo" type="file" onChange={handleEditUserData} />
              </div>
            </form>
            <div className="btn">
              <Button text="Edit" onClick={() => handleEditUserDataFun()} />
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

export default EditUser;
