import React from 'react'
import '../Assets/Main.css'
import Logo from '../Assets/Images/logo.jpg'

function Header(props) {
    return (
        <div className='Header'>
            <img src={Logo} alt='Bung'/>
            {
                props.price > 0 && <button style={{color: 'white', backgroundColor: 'green'}} onClick={props.Checkout}>Checkout</button>
            }
            {
                props.price > 0 && <button>Total Price : <span style={{color: 'red', fontSize: '1rem'}}>{props.price} $</span></button>
            }
            
        </div>
    )
}

export default Header
