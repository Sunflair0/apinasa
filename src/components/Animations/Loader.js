import React from 'react'
import Ship from './Ship'

const Loader = () => {

    return (
        <div className='loader'>
            <div className='loading'>
                <div className='ray'></div>
                <div className='ray'></div>
                <div className='ray'></div>
                <div className='ray'></div>
                <div className='ray'></div>
                <div className='ray'></div>
            </div>
            <div style={{
                transform: 'rotate(32deg)',
                position: 'absolute',
            }}><Ship /></div>
            <div className='loading_text'>Loading...
            </div>
        </div>
    )
}

export default Loader