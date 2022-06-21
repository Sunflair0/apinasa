import React from 'react'
import Background from './Background'
import Cardflip from './Cardflip'

export default function LoginPage() {
    return (
        <>
            <div className='shell'>
                <div className='logintop'></div>
                <div><Background /></div>
                <div><Cardflip /></div>
            </div>
        </>
    )
}
