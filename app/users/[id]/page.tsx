import React from 'react';

const UserDetailPage = async ({ params }: { params: Promise<{ id: number }> }) => {
    // Await the entire params object if it's a Promise
    const resolvedParams = await params;
    const id = resolvedParams.id;

    return (
        <div>
            UserDetailPage
            {id}
        </div>
    );
};

export default UserDetailPage;
