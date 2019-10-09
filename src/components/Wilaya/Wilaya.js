import React from "react";
import { Link } from "react-router-dom";
import "./wilaya.css";

const Wilaya = ({ wilaya }) => {
  console.log(wilaya);
  return (
    <>
      <div className="container_Wilaya">
        {wilaya.map(w => (
          <div className="capsule_Wilaya">
            <Link
              to={{
                pathname: "/advert",
                state: { code: w.code }
              }}
            >
              <span>{w.wilaya}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wilaya;
