import { Box, Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import "easymde/dist/easymde.min.css";

const NewIssuPage = () => {
    return (
        <div className='max-w-6xl m-auto space-y-3'   >
            <TextField.Root placeholder="Issue" color='gray' size="1">
                <TextField.Slot  >
                </TextField.Slot>
            </TextField.Root>
            <TextArea placeholder='description'></TextArea>
            <Button> Submit New Issue</Button>
        </div>

    )
}

export default NewIssuPage