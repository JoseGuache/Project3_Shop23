import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <>
      <Card style={{ width: '18rem' }} className="m-1">
        <Link to={`/products/${_id}`} className='text-decoration-none'>
          <Card.Img className="img-fluid" variant="top" src={`/images/${image}`} />
          <Card.Title className="text-main mt-4 ">{name}</Card.Title>
        </Link>
        <Card.Body>

          <Card.Text>
            <span>${price}</span>
          </Card.Text>
          <Button variant="primary" className="mainBtn" onClick={addToCart}>Add to cart</Button>

        </Card.Body>
      </Card>
    </>
  );
}

export default ProductItem;