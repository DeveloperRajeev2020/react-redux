import React from 'react';
import ImgClass from '../iphone.png';

function Home(props) {
  console.warn("Home props",props);
    return (
        <div>
            <h1>React with Redux using different components</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                  <img src={ImgClass} alt="iphone" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price: 1000,name: 'I phone 11'})}>Add To Cart</button>
                    <button className="remove-cart-button" onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>

                </div>
            </div>
        </div>
    )
}

export default Home