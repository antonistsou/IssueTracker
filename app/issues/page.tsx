import prisma from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import Link from 'next/link'
import IssueStatusBadge from '../components/IssueStatusBadge'
import IssuesActions from './IssuesActions'

const IssuesPage = async () => {

    const issues = await prisma.issue.findMany();

    return (
        <>
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Number</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Time created</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {issues.map((issue) =>
                    (<Table.Row key={issue.id} className='hover:underline'>
                        <Table.Cell >{issue.id}</Table.Cell>
                        <Table.Cell>
                            <Link href={`/issues/${issue.id}`}> {issue.title}</Link>
                            <div className='block md:hidden' > <IssueStatusBadge status={issue.status}></IssueStatusBadge></div>
                        </Table.Cell>
                        <Table.Cell className='hidden md:table-cell'> <IssueStatusBadge status={issue.status}></IssueStatusBadge></Table.Cell>
                        <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
                        <Table.Cell>{issue.description}</Table.Cell>
                    </Table.Row>)
                    )}
                </Table.Body>
            </Table.Root>
            <IssuesActions></IssuesActions>
        </>
    )
}

export default IssuesPage