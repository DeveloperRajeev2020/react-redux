import React from 'react';
import ImgClass from '../iphone.png';

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                 {/* <span className="cart-count">{props.data.length}</span> */}
                <img alt="add to cart" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Component</h1>
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
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home