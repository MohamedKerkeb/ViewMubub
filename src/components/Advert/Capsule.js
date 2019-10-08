import React, { useEffect } from "react";

const Capsule = ({ advert, wilaya, categories }) => {
  const w = wilaya.map(w => w.idwilaya);
  const wi = wilaya.map(w => w.wilaya);
  const wId = advert.map(e => e.wilayaId);

  return (
    <>
      <h1>Capsule</h1>
      {advert.map(e => (
        <div key={advert.idannonces}>
          <li>{e.title}</li>
          <p>
            {wilaya.forEach(w =>
              w.idwilaya == e.wilayaId ? <strong>{w.wilaya}</strong> : ""
            )}
          </p>
        </div>
      ))}
    </>
  );
};

export default Capsule;
