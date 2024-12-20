import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes/dist/esm/components/badge.js'
import { Flex } from '@radix-ui/themes/dist/esm/components/flex.js'
import React from 'react'

const statusMap: Record<Status, { label: string, color: 'red' | 'orange' | 'green' }> = {
    OPEN: { label: 'Open', color: 'red' },
    IN_PROGRESS: { label: 'In Progress', color: 'orange' },
    CLOSED: { label: 'Closed', color: 'green' }
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
    return (
        <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge >
    )
}

export default IssueStatusBadge