import React from 'react'

const PhotoPage = async ({ params }: { params: Promise<{ id: number; photoId: number }> }) => {

    const p = await params;
    const id = p.id;
    const photoId = p.photoId;
    return (
        <div>PhotoPage
            {id}
            {photoId}
        </div>
    )
}

export default PhotoPage