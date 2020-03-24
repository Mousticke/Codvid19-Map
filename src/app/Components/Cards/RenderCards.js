import React from 'react'
import PropTypes from 'prop-types';
import CardData from './CardData';
import NoData from '../Utils/NoData';
import Loading from '../Utils/Loading';
import { faUserMd, faHandHoldingMedical, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { Row } from 'react-bootstrap';

export default function RenderCards({loading, data, error}) {

    const renderData = () => {
        if(error){
            return (<NoData error={error} data={data} />)
        }
        if (loading) {
            return (<Loading isLoading={loading} />)
        } else {
            
            return (
                <>
                    <CardData bodyTitle="Confirmed" data={data.confirmed.value} colorStyle="primary" fontIcon={faUserMd} bgIconCustom="bg-custom-primary"/>
                    <CardData bodyTitle="Recovered" data={data.recovered.value} colorStyle="success" fontIcon={faHandHoldingMedical} bgIconCustom="bg-custom-success"/>
                    <CardData bodyTitle="Death" data={data.deaths.value} colorStyle="danger" fontIcon={faSkullCrossbones} bgIconCustom="bg-custom-danger"/>
                </>
            )
        }
    }

    return (
        <Row className='justify-content-center'>
            {renderData()}
        </Row>
    )
}

RenderCards.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.bool,
}