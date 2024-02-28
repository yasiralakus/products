import { useState } from "react"

export default function App() {

    const [photoId, setPhotoId] = useState(1);
    const [focus, setFocus] = useState(false);
    const [productCount, setProductCount] = useState(1);
    const [openCart, setOpenCart] = useState(false);
    const [cart, setCart] = useState({});
    const [menuOpen, setMenuOpen] = useState(false)

    function addCart(e) {
        e.preventDefault();

        setCart({
            title: 'Fall Limited Edition Sneakers',
            price: '$125.00',
            piece: productCount,
            total: 125 * productCount,
        })
    }

    if(focus === true && openCart === true) {
        setOpenCart(false);
    }

    return (
        <div className="container">

            <div className={menuOpen === true ? 'menu showMenu' : 'menu'}>

                <button onClick={() => {setMenuOpen(false)}}><i className="fa-solid fa-xmark"></i></button>

                <ul>
                    <li><a href="">collections</a></li>
                    <li><a href="">men</a></li>
                    <li><a href="">women</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">contact</a></li>
                </ul>

            </div>

            <div className={focus === true ? 'focus-photo show' : 'focus-photo'}>

                <div className="slider">

                    <button onClick={() => {setFocus(false)}} id="closed"><i className="fa-solid fa-xmark"></i></button>

                    <div className="sliderBigImg">
                        <img src={`./img/products/${photoId}.svg`} alt="" />

                        {photoId === 4 ? (
                            <button onClick={() => {setPhotoId(photoId + 1)}} style={{ opacity: photoId === 4 ? 0.3 : 1 }} disabled id="btnRight"><img src="./img/btn-right.png" alt="" /></button>)
                            :
                            (<button onClick={() => {setPhotoId(photoId + 1)}} id="btnRight"><img src="./img/btn-right.png" alt="" /></button>)
                        }

                        {photoId === 1 ? (
                            <button onClick={() => {setPhotoId(photoId - 1)}} style={{ opacity: photoId === 1 ? 0.3 : 1 }} disabled id="btnLeft"><img src="./img/btn-left.png" alt="" /></button>)
                            :
                            (<button onClick={() => {setPhotoId(photoId - 1)}} id="btnLeft"><img src="./img/btn-left.png" alt="" /></button>)
                        }

                    </div>

                    

                    <div className="slider-small-images">

                        <img className={photoId === 1 && 'opacity'} onClick={() => {setPhotoId(1)}} src="./img/products/1.svg" alt="" />
                        <img className={photoId === 2 && 'opacity'} onClick={() => {setPhotoId(2)}} src="./img/products/2.svg" alt="" />
                        <img className={photoId === 3 && 'opacity'} onClick={() => {setPhotoId(3)}} src="./img/products/3.svg" alt="" />
                        <img className={photoId === 4 && 'opacity'} onClick={() => {setPhotoId(4)}} src="./img/products/4.svg" alt="" />

                    </div>

                </div>

            </div>

            <header className="header">

                <button className="menuIcon" onClick={() => {menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)}}><i className="fa-solid fa-bars"></i></button>

                <a href=""><img src="./img/sneakers.png" alt="" /></a>

                <div className="nav">
                    <li><a href="">collections</a></li>
                    <li><a href="">men</a></li>
                    <li><a href="">women</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">contact</a></li>
                </div>

                <div className="user">

                    <button onClick={() => {openCart === true ? setOpenCart(false) : setOpenCart(true)}}><img src="./img/basket.png" alt="" /> {Object.keys(cart).length > 0 && <div className="cart-item-count">{cart.piece}</div>}</button>

                    <div className={openCart === true ? 'cart showCart' : 'cart'}>

                        <header>
                            <h3>Cart</h3>
                        </header>

                        <main>
                        {Object.keys(cart).length > 0 ?
                            <>
                                <div className="item">

                                    <img src="./img/products/1.svg" alt="" />

                                    <div className="item-details">

                                        <p>{cart?.title}</p>
                                        <p>{cart?.price} x {cart.piece} <span>${cart.total}.00</span></p>

                                    </div>

                                    <button onClick={() => {setCart({})}}><i className="fa-solid fa-trash-can"></i></button>

                                </div>

                                <button id="checkout">Checkout</button>
                            </>
                        :
                            <p>Your cart is empty.</p>
                        }
                        </main>

                    </div>

                    <img src="./img/user.png" alt="" />

                </div>
            </header>

            <main className="main">

                <div className="images">
                    <img onClick={() => {setFocus(true)}} id="bigImg" src={`./img/products/${photoId}.svg`} alt="" />

                    <div className="littleImg">

                        <img className={photoId === 1 && 'opacity'} onClick={() => {setPhotoId(1)}} src="./img/products/1.svg" alt="" />
                        <img className={photoId === 2 && 'opacity'} onClick={() => {setPhotoId(2)}} src="./img/products/2.svg" alt="" />
                        <img className={photoId === 3 && 'opacity'} onClick={() => {setPhotoId(3)}} src="./img/products/3.svg" alt="" />
                        <img className={photoId === 4 && 'opacity'} onClick={() => {setPhotoId(4)}} src="./img/products/4.svg" alt="" />

                    </div>
                
                </div>

                <div className="products-details">

                    <h5>Sneaker Company</h5>

                    <h1>Fall Limited Edition Sneakers</h1>

                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                    <div className="product-price">
                        <h2>$125.00 <div className="discount">50%</div></h2>
                        <h4>$250.00</h4>
                        
                    </div>

                    <div className="product-buy">

                        <div className="products-piece">

                            <button onClick={() => {if(productCount > 1) {setProductCount(productCount - 1)}}}><i className="fa-solid fa-minus"></i></button>

                            <p>{productCount}</p>

                            <button onClick={() => {setProductCount(productCount + 1)}}><i className="fa-solid fa-plus"></i></button>

                        </div>

                        <button onClick={addCart}><img src="./img/button-basket.png" alt="" />Add to cart</button>

                    </div>

                </div>

            </main>

        </div>
    )
}