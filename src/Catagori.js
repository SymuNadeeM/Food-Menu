import React from 'react'

const Catagori = ({filteritem}) => {
    return (
        <div className="btn-container">
            <button className="filter-btn" onClick={()=> filteritem('all')}>
                All
            </button>
            <button className="filter-btn" onClick={()=> filteritem('breakfast')}>
                Breakfast
            </button>

            <button className="filter-btn" onClick={()=> filteritem('lunch')}>
               lunch
            </button>

            <button className="filter-btn" onClick={()=> filteritem('shakes')}>
            shakes
            </button>
            
        </div>
    )
}

export default Catagori
