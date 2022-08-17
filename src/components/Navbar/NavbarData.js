import * as RiIcons from 'react-icons/ri'

export const NavbarData = [
    {
        title: 'HOME',
        path: '/',
        icon: '🏠',
        style: 'menu1items ',
    },
    {
        title: 'ABOUT',
        path: 'about/',
        icon: '🧾',
        style: 'menu1items',
    },
    {
        title: 'NASA',
        path: '/nasa',
        icon: '🔭',
        style: 'menu1items',
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: 'arrow_rotate',
        subNav: [
            {
                title: 'APOD',
                path: 'nasa/apod/',
                style: 'subMenu1items'
            },
            {
                title: 'EARTH',
                path: 'nasa/earth/',
                style: 'subMenu1items'
            },
            {
                title: 'MER',
                path: 'nasa/mer/',
                style: 'subMenu1items'
            },
            {
                title: 'ISS',
                path: 'nasa/iss/',
                style: 'subMenu1items'
            }
        ]
    },
    {
        title: 'MY PAGE',
        path: 'mypage',
        icon: '❤',
        style: 'menu1items',
    },
    {
        title: 'TOURS',
        path: 'venturetours',
        icon: '🚀 ',
        style: 'menu1items',
    },
    {
        title: 'SALUTES',
        path: 'testimonials',
        icon: '💬',
        style: 'menu1items',
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: 'arrow_rotate',
        subNav: [
            {
                title: 'READ',
                path: 'testimonials/read/',
                style: 'subMenu1items'
            },
            {
                title: 'WRITE',
                path: 'testimonials/write/',
                style: 'subMenu1items',               
            }
        ]
    },
    {
        title: 'CONTACT US',
        path: 'contactus',
        icon: '✉',
        style: 'menu1items',
    },
    {
        title: 'JUNK',
        path: 'junk',
        icon: ':)',
        style: 'menu1items',
    },
]