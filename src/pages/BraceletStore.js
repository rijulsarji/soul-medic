import React, { useEffect, useState } from 'react'
import ProductPreview from '../components/ProductPreview';
import StorePageBanner from '../components/StorePageBanner'
import { client } from '../lib/client';
import "../styles/pages/StoreStyles.css";

const BraceletStore = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const fetchData = async() => {
    const query = `*[_type == "bracelets"]`;

    const products = await client.fetch(query);
    setData(products);
    setLoad(false)
    console.log(products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <StorePageBanner bgImage="https://i.ebayimg.com/images/g/Vv0AAOSww8xg3tvQ/s-l500.jpg" />

      {load ? <h1>Load...</h1> :
        (<div className='storeLayout'>
        {data.map((product, i) => 
          <ProductPreview
            product={product}
            index={i}
          />
        )}
        </div>)
      }
    </div>
  );
}

export default BraceletStore