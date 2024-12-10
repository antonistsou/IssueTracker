'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { GiAlienBug } from "react-icons/gi";
import classnames from 'classnames'

const NavBar = () => {

    const pathname = usePathname();

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href={'/'}><GiAlienBug className='size-6' /></Link>
            <ul className='flex space-x-6'>
                {links.map(link => <Link href={link.href} key={link.href} className={classnames({
                    'text-zinc-50': link.href === pathname,
                    'text-zinc-600': link.href !== pathname,
                    'hover:text-zinc-300': true
                })}>{link.label}</Link>)}
            </ul>
        </nav>
    )
}

export default NavBar