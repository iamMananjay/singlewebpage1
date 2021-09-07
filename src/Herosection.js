import React from 'react'

const Herosection = () => {
    return (
        <div className='herosectionbg' >
            <h1>Mobile App <br/> Development</h1>
            <img src='image/ad-min.jpg' />
            <div className='strategybox' >
                <button className='btnicon'>
                    <i class="fas fa-chess-queen"></i>
                </button>
                <h2>Strategy</h2>
            </div>
            <div className='uxbox' >
                <button className='btnicon' >
                    <i class="fas fa-pencil-ruler"></i>
                </button>
                <h2>UX Design</h2>
            </div>
            <div className='developmentbox' >
                <button className='btnicon' >
                <i class="fas fa-laptop-code"></i>
                </button>
                <h2>Development</h2>
            </div>
            <div className='testingbox' >
                <button  className='btnicon' >
                    <i class="fas fa-bug"></i>
                </button>
                <h2>Testing</h2>
            </div>

            <h4>Image From Freepik</h4>

            
            
        </div>
    )
}

export default Herosection
