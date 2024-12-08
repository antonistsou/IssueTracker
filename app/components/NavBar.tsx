'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {

    const { status, data: session } = useSession();

    return (
        <div className='flex bg-slate-950 p-5 justify-center'>
            <Link href='/' className='mr-5'>Home</Link>
            <Link href='/users' className='mr-5'>Users</Link>
            <Link href='/products' className='mr-5'>products</Link>
            {status === 'authenticated' && <div>{session.user!.name}
                <Link href="api/auth/signout" className='ml-3'> Sign out</Link>
            </div>}
            {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
        </div>
    )
}

export default NavBar