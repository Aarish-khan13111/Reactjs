import React, { useState, useEffect } from "react";
import Axios from "axios";
import CartItem from "./cartItem";

import { random, randAmount } from "@ngneat/falso";

import { Container, Col, Row } from "reactstrap";

// const apiKey = "Insert_your_key_here";
// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localurl = "https://mocki.io/v1/a75dcd86-a79b-4ce9-a9e5-32119fba2e3e";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  // const fetchPhotos = async () =>{
  //     const {data} = await Axios.get(url,{
  //         headers: {
  //             Authorization: apiKey
  //         }
  //     })
  // }

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl, {});

    const { photos } = data;

    const allProduct = photos.map((photos) => ({
      smallImage: photos.src?.medium,
      tinyImage: photos.src?.tiny,
      productName: random.word(),
      productPrice: randAmount.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">BuyPage</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
