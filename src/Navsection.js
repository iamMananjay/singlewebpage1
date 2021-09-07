import React from 'react'
const Navsection = () => {
    return (
        <nav >
            <div className='navsection' >
                <div className='navsectionformobile' >
                <h1>ComplexNepal</h1>
                <button className='btnmenu' >
                    <i class="fas fa-bars"></i>
                </button>
                </div>
                <div className='navsectionfordesktop' >
                    <ul className='ullist'>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                        <li>
                            <a>Page1</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navsection
