import React, { useState } from 'react';
import { Form, Spinner, Container, Row, Col } from 'react-bootstrap';
import { useData } from '../../hooks';
import { getCountries } from '../../api/request';
import WorldData from '../Components/Data/WorldData';
import CountryData from '../Components/Data/CountryData';
import ChartData from '../Components/Data/ChartData';

export default function Dashboard() {
    const countries = getCountries();
    const { error, loading, data } = useData(countries);
    const [country, setCountry] = useState("France");

    if (error) {
        return (<p>Something went wrong</p>)
    } else if (!data || loading) {
        return (<Spinner animation="grow" variant="primary" />)
    } else {
        return (
            <Container className="main">
                <Row className="dashboard-part">
                    <Col sm={6}>
                        <Form className="filter-data">
                            <Form.Group as={Row} controlId="form.selectCountry">
                                <Form.Label column sm={4}>Select a Country</Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="select" defaultValue={country} onChange={e => { setCountry(e.target.value) }}>
                                        <option key="_">World</option>
                                        {
                                            data.countries.map((keyName, i) => (
                                                <option key={i}>{keyName.name}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <WorldData />
                {country !== 'World' ? (<CountryData country={country} />) : ("")}
                <ChartData country={country} />
            </Container>
        )
    }
}
