import React from 'react'
import * as AiIcons from 'react-icons/ai';

export const NavbarData =[
    {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />, 
    style: 'menu1items ',
    },
    {
    title: 'ABOUT',
    path: 'about',
    icon:<AiIcons.AiFillRead />, 
    style: 'menu1items',

    },
    {   
    title: 'NASA',
    path: 'nasa',
    icon: <AiIcons.AiFillHome />, 
    style: 'menu1items',
    iSpace: 'li::before', 
    },
    {
    title: 'MY PAGE',
    path: 'mypage',
    icon: <AiIcons.AiFillSmile/>, 
    style: 'menu1items',
    iSpace: 'li::before', 
    },
    {
    title: 'TOURS',
    path: 'venturetours',
    icon: <AiIcons.AiTwotoneRocket />, 
    style: 'menu1items',
    iSpace: 'li::before',     
    },
    {
    title: 'SALUTES',
    path: 'testimonials',
    icon: <AiIcons.AiFillEdit />, 
    style: 'menu1items',
    iSpace: 'li::before', 
    },
    {
    title: 'CONTACT US',
    path: 'contactus',
    icon: <AiIcons.AiFillHome />, 
    style: 'menu1items',
    iSpace: 'li::before', 
    },    
]
 