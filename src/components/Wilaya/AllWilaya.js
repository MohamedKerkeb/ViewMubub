import React, { useState, useEffect } from "react";
import Axios from "axios";
import Wilaya from "./Wilaya";

const url = "http://localhost:3001/wilaya";

const AllWilaya = () => {
  const [wilaya, setWilaya] = useState([]);
  useEffect(() => {
    const getWilaya = async () => {
      const wil = await Axios.get(url);
      setWilaya(wil.data.data);
    };
    getWilaya();
  }, []);
  return (
    <>
      <h3>Wilaya</h3>
      <Wilaya wilaya={wilaya} />
    </>
  );
};

export default AllWilaya;
