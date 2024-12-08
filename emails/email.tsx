import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'

const email = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview> hellonig</Preview>
            <Body>
                <Container>
                    <Text>{name}</Text>
                    <Link>some link here</Link>
                </Container>
            </Body>
        </Html>
    )
}

export default email