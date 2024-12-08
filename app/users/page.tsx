import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
    searchParams: Promise<{ sortOrder?: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {

    const resolvedSearchParams = await searchParams;
    const sortOrder = resolvedSearchParams.sortOrder;

    return (
        <>
            <h1>Users</h1>
            <div className='pb-5'>
                <UserTable sortOrder={sortOrder!}></UserTable>
            </div>
            <Link href='/users/new' className='btn btn-primary'>Add User</Link>
        </>
    )
}

export default UsersPage