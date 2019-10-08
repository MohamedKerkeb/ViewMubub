import React, { useState, useEffect } from "react";
import Axios from "axios";
import Capsule from "./Capsule";

const url = "http://localhost:3001/advert";

const Advert = () => {
  const [advert, setAdvert] = useState([]);
  const [load, setLoad] = useState(false);
  const [wilaya, setWilaya] = useState([]);
  const [categories, setCategorie] = useState([]);

  useEffect(() => {
    const getWilaya = async () => {
      const wil = await Axios.get("http://localhost:3001/wilaya");
      setWilaya(wil.data.data);
    };
    const getCategorie = async () => {
      const cat = await Axios.get("http://localhost:3001/categories");
      setCategorie(cat.data.data);
    };
    const fetchData = async () => {
      setLoad(true);
      const result = await Axios.get(url);
      setAdvert(result.data.data);
      setLoad(false);
    };
    fetchData();
    getWilaya();
    getCategorie();
  }, []);

  // console.log("data", wilaya);
  // console.log("cat", categories);
  return (
    <>
      <h3>Advert</h3>
      {load ? (
        <div>Loading...</div>
      ) : (
        <Capsule advert={advert} wilaya={wilaya} categories={categories} />
      )}
    </>
  );
};

export default Advert;
