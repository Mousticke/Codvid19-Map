import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function CardData({ headerTitle, bodyTitle, data, borderStyle }) {
    return (
        <Card border={borderStyle} style={{ width: '18rem' }}>
            <Card.Header>{headerTitle}</Card.Header>
            <Card.Body>
                <Card.Title>{bodyTitle}</Card.Title>
                <Card.Text>
                    <span>{data}</span><br/>
                    <span>More information below : link</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


CardData.propTypes = {
    headerTitle: PropTypes.string,
    bodyTitle: PropTypes.string,
    data: PropTypes.string,
    borderStyle: PropTypes.string
}