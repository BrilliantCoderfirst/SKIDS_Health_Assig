import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../redux/action";

const Card = ({ id, name, email, number, photo }) => {
  const dispatch = useDispatch();

  const handleDeleteUserDataFun = (id) => {
    dispatch(deleteUserData(id));
  };

  return (
    <>
      <div className="card" key={id}>
        <div
          className="card-header"
          style={{
            backgroundImage: `url(${photo})`,
            objectFit: "cover",
          }}
        >
          <div className="card-header-bar">
            <a href="#" className="btn-message">
              <span className="sr-only">Message</span>
            </a>
            <a href="#" className="btn-menu">
              <span className="sr-only">Menu</span>
            </a>
          </div>

          <div className="card-header-slanted-edge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
              <path className="polygon" d="M-20,200,1000,0V200Z" />
            </svg>
            <a href="#" className="btn-follow">
              <span className="sr-only">Edit</span>
            </a>
          </div>
        </div>

        <div className="card-body">
          <h2 className="name">{name}</h2>
          <h4 className="job-title">{email}</h4>
          <h4 className="job-title">{number}</h4>
          <div className="bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, aperiam.
          </div>
          <div className="social-accounts">
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg"
                alt=""
              />
              <span className="sr-only">Dribbble</span>
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg"
                alt=""
              />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg"
                alt=""
              />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div className="btn">
          <div className="centerBtn">
            <Link to={`/edituser/${id}`}>
              <Button text="Edit" />
            </Link>
            <Button text="Delete" onClick={() => handleDeleteUserDataFun(id)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
