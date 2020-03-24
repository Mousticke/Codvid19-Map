import React from 'react';
import { useData } from '../../../hooks';
import { baseAPI } from '../../../api/request';
import RenderCards from '../Cards/RenderCards';
import { Row, Col } from 'react-bootstrap';

export default function WorldData() {
    const coronaData = baseAPI();

    const { loading, data, error } = useData(coronaData);

    return (
        <Row className="dashboard-part">
            <Col xs={12}><h5>World Information</h5></Col>
            <Col>
                <RenderCards loading={loading} data={data} error={error} />
            </Col>
        </Row>
    )
}
