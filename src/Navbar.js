import React from 'react'

function Navbar() {
    return (
        <>
              
                        <nav class="main-nav">
                             <img src="https://i.ibb.co/wwLhz98/logo.png" alt="Microsoft" class="logo"/>

                             <ul class="main-menu">
                                <li><a href="#">Office</a></li>
                                <li><a href="#">Windows</a></li>
                                <li><a href="#">Surface</a></li>
                                <li><a href="#">Xbox</a></li>
                                <li><a href="#">Deals</a></li>
                                <li><a href="#">Support</a></li>
                             </ul>

                             <ul className='right-menu'>
                                  <li>
                                        <a href="#">
                                            <i class="fas fa-search"></i>
                                        </a>
                                  </li>
                                    <li>
                                            <a href="#">
                                                <i class="fas fa-shopping-cart"></i>
                                            </a>
                                    </li>
                             </ul>
                             
                        </nav>
             
        </>
    )
}

export default Navbar
