import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardData({ bodyTitle, data, colorStyle, fontIcon = "", bgIconCustom= "" }) {
    return (
        <Card style={{ width: '18rem' }} text={colorStyle}>
            <Card.Body>
                <div className={"profile-img img-rounded " + bgIconCustom}><FontAwesomeIcon icon={fontIcon} size="lg" /></div>
                <Card.Title>{bodyTitle}</Card.Title>
                <Card.Text className="text-dark">
                    <span className="card-info-number">{data}</span><br />
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
    fontIcon: PropTypes.object,
    bgIconCustom: PropTypes.string
}