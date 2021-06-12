import React, {useState} from 'react'
import '../Assets/Main.css'
import TopBun from '../Assets/Images/topBun.png'
import LowBun from '../Assets/Images/lowBun.png'
import BurgerCustomize from './BurgerCustomize'
import Header from './Header'
import Checkout from './Checkout'

function Main() {
    const [burgeritems, setburgeritems] = useState([]);
    const [chickenCount, setchickenCount] = useState(0)
    const [tomatoCount, settomatoCount] = useState(0)
    const [cheeseCount, setcheeseCount] = useState(0)
    const [butterCount, setbutterCount] = useState(0)
    const [lettuceCount, setlettuceCount] = useState(0)
    const [price, setprice] = useState(0)
    const [checkoutshow, setcheckoutshow] = useState(false)

    const createBurger = (path, type) => {
        console.log('fn: createBurger');
        setburgeritems([{
            path: path,
            type: type
        }, ...burgeritems])
        switch(type) {
            case 'Chicken':
                setchickenCount(chickenCount + 1);
                setprice(price + 20);
                break;
            case 'Tomato':
                settomatoCount(tomatoCount + 1);
                setprice(price + 5);
                break;
            case 'Cheese':
                setcheeseCount(cheeseCount + 1);
                setprice(price + 7);
                break;
            case 'Butter':
                setbutterCount(butterCount + 1);
                setprice(price + 6);
                break;
            case 'Lettuce':
                setlettuceCount(lettuceCount + 1);
                setprice(price + 9);
                break;
            default:
                console.log(type)
        }
    }
    const removeBurgerItem = (type) => {
        console.log('fn: removeBurgerItem ', type)
        removeByAttr(burgeritems, 'type', type);  
        switch(type) {
            case 'Chicken':
                setchickenCount(chickenCount - 1);
                setprice(price - 20);
                break;
            case 'Tomato':
                settomatoCount(tomatoCount - 1);
                setprice(price - 5);
                break;
            case 'Cheese':
                setcheeseCount(cheeseCount - 1);
                setprice(price - 7);
                break;
            case 'Butter':
                setbutterCount(butterCount - 1);
                setprice(price - 6);
                break;
            case 'Lettuce':
                setlettuceCount(lettuceCount - 1);
                setprice(price - 9);
                break;
            default:
                console.log(type)
        }
        setburgeritems([...burgeritems])
    }
    var removeByAttr = function(burgeritems, attr, value){
        var i = burgeritems.length;
        while(i--){
           if( burgeritems[i] && burgeritems[i].hasOwnProperty(attr) && (arguments.length > 2 && burgeritems[i][attr] === value ) ){ 
                burgeritems.splice(i,1);
                return true;
           }
        }
    }

    const CheckoutEvent = () => {
        setcheckoutshow(true);
    }
    const closeChekout = () => {
        setcheckoutshow(false);
    }
    const submitCheckout = (id) => {
        let ele = document.getElementById(id);
        if(ele.value.length > 0) {
            closeChekout();
            setburgeritems([]);
            setprice(0);
            setchickenCount(0);
            settomatoCount(0);
            setcheeseCount(0);
            setbutterCount(0);
            setlettuceCount(0);
            alert('Order Success !!!')
        } else {
            alert('Please enter address')
        }
    }

    return (
        <div>
            <Header price={price} Checkout={CheckoutEvent}/>
            <div className='Title'>
                Burger
            </div>
            <div className="Burger">
                <>
                    <img src={TopBun} alt='BurgerTopBun'/>
                    {
                        burgeritems.length === 0 && <p style={{color: 'yellow', backgroundColor: 'black', padding: '5px 15px'}}>Create your own burger</p>
                    }
                    {
                        burgeritems.length > 0 && <>{
                            burgeritems.map((item) => {
                                // console.log(item)
                                return(
                                    <img src={item.path[item.type]} alt={item.type} />
                                )
                            })
                            }</>
                    }
                    <img src={LowBun} alt='BurgerLowerBun'/>
                </>
            </div>
            <BurgerCustomize Customize={createBurger} remove={removeBurgerItem} LCount={lettuceCount} BCount={butterCount} CHCount={cheeseCount} TCount={tomatoCount} CCount={chickenCount}/>
            {
                checkoutshow === true && <Checkout closeChekout={closeChekout} items={burgeritems} submit={submitCheckout}  />
            }
        </div>
    )
}

export default Main
