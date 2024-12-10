'use client';

import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { createIssueSchema } from '@/app/createIssueSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {

    const returnToHomeScreen = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });

    const [error, setError] = useState('');
    const [isSub, setSub] = useState(false);

    const onSubmit: SubmitHandler<IssueForm> = async (data) => {
        try {
            setSub(true);
            await axios.post('/api/issues', data);
            returnToHomeScreen.push('/issues');
        } catch (error) {
            setSub(false);
            setError('Error occured!');
        }
    };

    return (
        <div>
            {error && <Callout.Root color='red' className='my-5'>
                <Callout.Icon>
                </Callout.Icon>
                <Callout.Text >
                    {error}
                </Callout.Text>
            </Callout.Root>}
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-6xl m-auto space-y-3'   >
                <ErrorMessage> {errors.title?.message}</ErrorMessage>
                <TextField.Root placeholder="Issue" color='gray' size="1" {...register('title')}>
                    <TextField.Slot  >
                    </TextField.Slot>
                </TextField.Root>
                <ErrorMessage> {errors.description?.message}</ErrorMessage>
                <TextArea placeholder='description' {...register('description')}></TextArea>
                <Button disabled={isSub}> Submit New Issue {isSub && <Spinner />}</Button>
            </form>
        </div>

    )
}

export default NewIssuePage