import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    // already in global store
    if (products.length) {
      const product = products.find((product) => product._id === id);

      const item = {
        image: product.image,
        name: product.name,
        _id: product._id,
        price: product.price,
        quantity: product.quantity,
        description: product.description,
      };

      setCurrentProduct(item);
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>

      {currentProduct && cart ? (
        <Container>

          <Link to="/" className='text-decoration-none'>
            <h4 className="text-secondary mt-4">← Back to Products</h4>
          </Link>

          <Row className='mt-4'>
            <Col>
              <img
                src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}
              />
            </Col>
            <Col>
              <h2 className='line'>{currentProduct.name}</h2>
              <br />
              <p>{currentProduct.description}</p>

              <h4><strong>Price: </strong>${currentProduct.price}{' '}</h4>

              <Row>
                <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="success" className='mainBtn my-3 mb-4'>
                    Sizes
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleSelectSize('8')}>8</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('8.5')}>8.5</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('9')}>9</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('9.5')}>9.5</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('10')}>10</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('10.5')}>10.5</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('11')}>11</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('11.5')}>11.5</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('12')}>12</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectSize('12.5')}>12.5</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </Col>

                <Col className='mt-3'>
                {selectedSize && <h4>Selected Size:  
                  <strong className='text-main px-2'>
                  {selectedSize}
                  </strong>
                  </h4>}
                </Col>
              </Row>

              <Button onClick={addToCart} className='mainBtn'>Add to Cart</Button>
              <Button
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart} className='mainBtn mx-2'>Remove from Cart</Button>

            </Col>
          </Row>

        </Container>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
