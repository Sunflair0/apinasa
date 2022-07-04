import React from 'react'
import Background from './Background'
import Cardflip from './Cardflip'

export default function LoginPage() {
    return (
        <>
        <div className="flex_backing">
            <div className="logo"></div>
            <div><Background /></div>
            <div style={{position: 'absolute'}}><Cardflip /></div>
            </div>
        </>
    )
}