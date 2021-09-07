import React from 'react'

const Featuresection = () => {
    return (
        <div className='featuresectionbg' >
            <div className='title' >
            <h2>Features</h2>
                <h1>Using Design To Imporve Product Development</h1>
            </div>
            <div className='featurecenter' >
                
                <div className='eachbox' >
                    <i class="fas fa-chess-queen" ></i>
                    <h2>Strategy</h2>
                    <p>
                    Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives
                    </p>
                    <button className='morebtn' >More</button>
                    <div className='underline' ></div>
                </div>
                <div className='eachbox c' >
                     <i class="far fa-lightbulb"></i>
                    <h2>Concept</h2>
                    <p>
                    Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives
                    </p>
                    <button className='morebtn' >More</button>
                    <div className='underline' ></div>

                    

                </div>
                <div className='eachbox d' >
                    <i class="fas fa-laptop-code"></i>
                    <h2>Development</h2>
                    <p>
                    Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives
                    </p>
                    <button className='morebtn' >More</button>
                    <div className='underline' ></div>


                </div>
            </div>
            
        </div>
    )
}

export default Featuresection
