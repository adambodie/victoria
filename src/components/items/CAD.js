import React from 'react'

const CAD = ({canadianValue}) => (
    <div className='currencyColumn'>
        <h2>Canadian Dollars</h2>
        <div className='cad'>
            <div className='results'>
                <h3>{canadianValue}</h3>
            </div>
        </div>
    </div>
)

export default CAD
