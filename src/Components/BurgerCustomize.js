import React, { useState } from 'react'
import '../Assets/Main.css'
import Tomato from '../Assets/Images/Tomato.png'
import Chicken from '../Assets/Images/chicken.png'
import Cheese from '../Assets/Images/Cheese.png'
import Butter from '../Assets/Images/Butter.png'
import Lettuce from '../Assets/Images/Lettuce.png'

function BurgerCustomize(props) {
    const [showBurgerCustomize, setshowBurgerCustomize] = useState(false)
    const [Nclass, setNclass] = useState('BurgerCustomize')
    const showBurgerCustomClick = () => {
        setshowBurgerCustomize(true);
        setNclass('widthBurgerCustomize')
    }
    const HideBurgerCustomClick = () => {
        setshowBurgerCustomize(false)
        setNclass('BurgerCustomize')
    }

    return (
        <div className={Nclass}>
            {
                showBurgerCustomize === false && <div className='D-div' title="Click Me" onClick={showBurgerCustomClick}>
                    Create Customised Burger
                </div>
            }
            {
                showBurgerCustomize === true && <div className='BurgerCZ'>
                    <button onClick={HideBurgerCustomClick}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <ul>
                        <li>
                            {/* <img src={Chicken} alt='Chicken' title='Chicken' /> */}
                            <div className="h-100 content">
                                <h3>Chicken</h3>
                                <button className="btn" title='Add Chicken' onClick={() => props.Customize({Chicken}, 'Chicken')}>
                                    <i className="fa fa-plus" aria-hidden="true"></i> Add
                                </button>
                                {
                                    props.CCount > 0 && <button title='Remove Chicken' className="btn ml-2" onClick={() => props.remove('Chicken')}>
                                        <i className="fa fa-minus" aria-hidden="true"></i> Remove
                                    </button>
                                }
                            </div>
                        </li>
                        <li>
                            {/* <img src={Tomato} alt='Tomato' title='Tomato' /> */}
                            <div className="h-100 content">
                                <h3>Tomato</h3>
                                <button className="btn" title='Add Tomato' onClick={() => props.Customize({Tomato}, 'Tomato')}>
                                    <i className="fa fa-plus" aria-hidden="true"></i> Add
                                </button>
                                {
                                    props.TCount > 0 && <button title='Remove Tomato' className="btn ml-2" onClick={() => props.remove('Tomato')}>
                                        <i className="fa fa-minus" aria-hidden="true"></i> Remove
                                    </button>
                                }
                            </div>
                        </li>
                        <li>
                            {/* <img src={Cheese} alt='Cheese' title="Cheese" /> */}
                            <div className="h-100 content">
                                <h3>Cheese</h3>
                                <button className="btn" title='Add Cheese' onClick={() => props.Customize({Cheese}, 'Cheese')}>
                                    <i className="fa fa-plus" aria-hidden="true"></i> Add
                                </button>
                                {
                                    props.CHCount > 0 && <button title='Remove Cheese' className="btn ml-2" onClick={() => props.remove('Cheese')}>
                                        <i className="fa fa-minus" aria-hidden="true"></i> Remove
                                    </button>
                                }
                            </div>
                        </li>
                        <li>
                            {/* <img src={Butter} alt='Butter' title='Butter' /> */}
                            <div className="h-100 content">
                                <h3>Butter</h3>
                                <button className="btn" title="Add Cheese" onClick={() => props.Customize({Butter}, 'Butter')}>
                                    <i className="fa fa-plus" aria-hidden="true"></i> Add
                                </button>
                                {
                                    props.BCount > 0 && <button title='Remove Cheese' className="btn ml-2" onClick={() => props.remove('Butter')}>
                                        <i className="fa fa-minus" aria-hidden="true"></i> Remove
                                    </button>
                                }
                            </div>
                        </li>
                        <li>
                            {/* <img src={Lettuce} alt='Lettuce' title='Lettuce' /> */}
                            <div className="h-100 content">
                                <h3>Lettuce</h3>
                                <button className="btn" title='Add Lettuce' onClick={() => props.Customize({Lettuce}, 'Lettuce')}>
                                    <i className="fa fa-plus" aria-hidden="true"></i> Add
                                </button>
                                {
                                    props.LCount > 0 && <button title='Remove Lettuce' className="btn ml-2" onClick={() => props.remove('Lettuce')}>
                                        <i className="fa fa-minus" aria-hidden="true"></i> Remove
                                    </button>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            }
            
        </div>
    )
}

export default BurgerCustomize
