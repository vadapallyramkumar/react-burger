import React from 'react'

function Checkout(props) {
    return (
        <div className='checkout'>
            <header>
                <button className='close' onClick={props.closeChekout}><i class="fa fa-close"></i></button>
            </header>
            <div>
                <h2>Please enter your address</h2>
                <textarea id='address'></textarea>
                <button className='submit' onClick={() => props.submit('address')}>Submit</button>
            </div>
        </div>
    )
}

export default Checkout
