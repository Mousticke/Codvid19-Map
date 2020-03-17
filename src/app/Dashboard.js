import React, {useState} from 'react';
import { Form, Spinner } from 'react-bootstrap';
import useData from '../hooks';
import { getCountries } from '../api/request';
import GeneralData from './GeneralData';
import CountryData from './CountryData';

export default function Dashboard() {
    const countries = getCountries();
    const {error, loading, data } = useData(countries);
    const [country, setCountry] = useState("France");

    if(error){
        return (<p>Something went wrong</p>)
    }else if (!data || loading) {
        return (<Spinner animation="grow" variant="primary" />)
    } else {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select a Country</Form.Label>
                        <Form.Control as="select" defaultValue={country} onChange={e => {setCountry(e.target.value)}}>
                            <option key="_">World</option>
                            {
                                Object.keys(data.countries).map((keyName, i) => (
                                    <option key={i}>{keyName}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                </Form>

                <GeneralData />
                {country !== 'World' ? (<CountryData country={country} />): ("")}           
            </div>
        )
    }
}
