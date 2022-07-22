import React from 'react'
import Background from '../components/Background'
import Cardflip from '../components/Cardflip'

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