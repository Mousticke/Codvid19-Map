import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardData({ bodyTitle, data, colorStyle, fontIcon = "" }) {
    return (
        <Card style={{ width: '18rem' }} text={colorStyle}>
            <Card.Body>
                <FontAwesomeIcon icon={fontIcon} className="float-right" size="2x" />
                <Card.Title>{bodyTitle}</Card.Title>
                <Card.Text className="text-dark">
                    <span>{data}</span><br />
                    <span>More information below : link</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


CardData.propTypes = {
    bodyTitle: PropTypes.string,
    data: PropTypes.number,
    colorStyle: PropTypes.string,
    fontIcon: PropTypes.object
}