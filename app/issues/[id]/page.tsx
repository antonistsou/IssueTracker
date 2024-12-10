import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import prisma from '@/prisma/client';
import { Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';

interface Props {
    params: { id: string }
}

const IssueDetails = async ({ params }: Props) => {

    const p = await params;
    const id = p.id;
    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(id) }
    });

    if (!issue) notFound();

    return (
        <>
            <Flex>
                <Heading>{issue.title} </Heading>
                <IssueStatusBadge status={issue.status}></IssueStatusBadge>
            </Flex>
            <div>
                <Text className='p-10'>{issue.createdAt.toDateString()} </Text>
                <Text className='w-max h-max border p-2 rounded-md '>{issue.description} </Text>
            </div>
        </>
    )
}

export default IssueDetails