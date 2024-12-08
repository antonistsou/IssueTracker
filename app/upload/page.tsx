'use client'
import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}

const UpdloadPage = () => {
    const [publicId, setPId] = useState('');

    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt={publicId}></CldImage>}
            <CldUploadWidget
                uploadPreset="ohjklub6"
                options={{
                    sources: [
                        "local",
                        "url",
                        "google_drive"
                    ],
                    styles: {
                        palette: {
                            window: "#000000",
                            sourceBg: "#000000",
                            windowBorder: "#1380F1",
                            tabIcon: "#FFFFFF",
                            inactiveTabIcon: "#8E9FBF",
                            menuIcons: "#2AD9FF",
                            link: "#08C0FF",
                            action: "#336BFF",
                            inProgress: "#00BFFF",
                            complete: "#33ff00",
                            error: "#EA2727",
                            textDark: "#000000",
                            textLight: "#FFFFFF"
                        },
                        fonts: {
                            default: null,
                            "'IBM Plex Sans', sans-serif": {
                                url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
                                active: true
                            }
                        }
                    }
                }}
                onSuccess={(result) => {
                    if (result.event !== 'success') return;
                    const resultInfo = result.info as CloudinaryResult;
                    setPId(resultInfo.public_id);
                }}
            >
                {({ open }) => <button className='btn btn-primary'
                    onClick={() =>
                        setTimeout(() => {
                            open();
                        }, 100)
                    }>Upload</button>}
            </CldUploadWidget>
        </>
    )
}

export default UpdloadPage