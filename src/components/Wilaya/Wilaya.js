import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./wilaya.css";
import Advert from "../Advert/Advert";

const Wilaya = ({ wilaya }) => {
  console.log(wilaya);
  return (
    <>
      <div className="container_Wilaya">
        {wilaya.map(w => (
          <Link
            to={{
              pathname: "/advert",
              state: { code: w.code }
            }}
          >
            <div className="capsule_Wilaya">
              <span>{w.wilaya}</span>
              <span>{w.code}</span>
            </div>
          </Link>
        ))}
      </div>
      <Switch>
        <Route path="/advert" component={Advert}></Route>
      </Switch>
    </>
  );
};

export default Wilaya;
