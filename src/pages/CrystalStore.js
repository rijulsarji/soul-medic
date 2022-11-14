import React, { useEffect, useState } from "react";
import ProductPreview from "../components/ProductPreview";
import StorePageBanner from "../components/StorePageBanner";
import { client } from "../lib/client";
import "../styles/pages/StoreStyles.css";
import loader from "../assets/loader.png";

const CrystalStore = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const fetchData = async () => {
    const query = `*[_type == "bracelets"]`;

    const products = await client.fetch(query);
    setData(products);
    setLoad(false);
    console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <StorePageBanner bgImage="https://trulyexperiences.com/blog/wp-content/uploads/2020/12/AdobeStock_154014422-scaled-e1607077599935.jpeg" />

      <h1 className="storeHeading">Crystals</h1>

      {load ? (
        <img src={loader} className="storeLoad" alt="load" />
      ) : (
        <div className="storeLayout">
          {data.map((product, i) => (
            <ProductPreview product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CrystalStore;
