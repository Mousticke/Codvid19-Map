import React from 'react';
import PropTypes from 'prop-types';
import { useData } from '../../../hooks';
import { getSummaryCountryDay } from '../../../api/request';
import RenderCards from '../Cards/RenderCards';
import { Row, Col } from 'react-bootstrap';

export default function CountryData({ country }) {
    const coronaData = getSummaryCountryDay(country);

    const { loading, data, error } = useData(coronaData);

    return (
        <Row className="dashboard-part">
            <Col xs={12}><h5>Information from {country}</h5></Col>
            <Col>
                <RenderCards loading={loading} data={data} error={error} />
            </Col>
        </Row>
    )
}

CountryData.propTypes = {
    country: PropTypes.string
}