import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../components/Input";

const Home = () => {
  const data = useSelector((state) => {
    return state.userOperation;
  });

  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState(data);

  const handleSearchData = (e) => {
    const { value } = e.target;
    setSearch(value);

    let mapData = data.filter((items) =>
      Object.values(items).some((valueCheck) =>
        valueCheck.toLowerCase().includes(value.toLowerCase())
      )
    );
    setUserData(mapData);
  };

  useEffect(() => {
    setUserData(data);
  }, [data]);

  return (
    <>
      <div className="homeContainer">
        <div className="addUser">
          <Link to="/adduser">
            <div className="btn">
              <PersonAddAltIcon />
              <Button text="Add User" />
            </div>
          </Link>
        </div>

        <div className="allCards">
          <div className="heading_card">
            <div className="blank"></div>
            <h1>All Users</h1>
            <div className="search">
              <Input
                type="text"
                placeholder="Search User ..."
                value={search}
                onChange={handleSearchData}
              />
              <SearchIcon />
            </div>
          </div>
          <div className="cards">
            {userData.length !== 0 ? (
              userData.map((items) => (
                <Card
                  key={items.id}
                  id={items.id}
                  name={items.name}
                  email={items.email}
                  number={items.number}
                  photo={items.photo}
                />
              ))
            ) : (
              <div className="messageShow">
                <div className="center">
                  <h1>Data Not Found</h1>
                </div>
              </div>
            )}
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
