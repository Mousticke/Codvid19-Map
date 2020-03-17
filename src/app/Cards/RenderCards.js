import React from 'react'
import PropTypes from 'prop-types';
import CardData from './CardData';
import NoData from '../Components/NoData';
import Loading from '../Components/Loading';

export default function RenderCards({loading, data, error}) {

    const renderData = () => {
        if(error){
            return (<NoData error={error} data={data} />)
        }
        if (loading) {
            return (<Loading isLoading={loading} />)
        } else {
            return (
                <div>
                    <CardData headerTitle="Confirmed" bodyTitle="Confirmed positive" data={data.confirmed.value} borderStyle="success"/>
                    <CardData headerTitle="Recovered" bodyTitle="Recovered patients" data={data.recovered.value} borderStyle="primary"/>
                    <CardData headerTitle="Death" bodyTitle="Dead from CODVID19" data={data.deaths.value} borderStyle="danger"/>
                </div>
            )
        }
    }

    return (
        <div>
            {renderData()}
        </div>
    )
}

RenderCards.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.bool,
}