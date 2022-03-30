import ItemCounter from './ItemCounter';
import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { toast } from "react-toastify"
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from "./CartContext";
import { useState, useContext } from 'react';


const ItemDetail = (props) => {
    const [buttonHide, setButtonHide] = useState(true);

    const useCartContext = useContext(cartContext);
    const { addToCart } = useCartContext;

    const navigate = useNavigate();

    const onAdd = (activeCounter) => {
        if (activeCounter != undefined) {
            setButtonHide(false);
            addToCart(props.object, activeCounter);
        }
    }

    return (
        <>
            <Button variant="contained" color="inherit"><ArrowBackOutlinedIcon fontSize="large" onClick={() => navigate(-1)} /></Button>
            <div id="itemDetail" className="dropShadow">
                <div className="itemDetailImg dropShadow">
                    <img src={props.object.img} />
                </div>
                <div className="itemDetailSpecs dropShadow" >
                    <h3>{props.object.name}</h3>
                    <p>Price: ${props.object.price}</p>
                    <p>Available Stock: {props.object.stock}</p>
                    <ItemCounter initial={1} stock={props.object.stock} onAdd={onAdd} />
                    {buttonHide || <Link className="styleRemove" to="/cart/"><Button id="purchaseButton" variant="contained" color="inherit">Proceed to checkout</Button></Link>}
                </div>
            </div>
            <div id="itemDetail" className="itemDescription dropShadow">
                <h2>Item Description:</h2>
                {props.object.description}
            </div>
        </>
    )
}

export default ItemDetail