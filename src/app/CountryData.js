import React from 'react';
import PropTypes from 'prop-types';
import useData from '../hooks';
import { getSummaryCountryDay } from '../api/request';
import RenderCards from './Cards/RenderCards';

export default function CountryData({ country }) {
    const coronaData = getSummaryCountryDay(country);

    const { loading, data, error } = useData(coronaData);

    return (
        <div>
            <h2>Information from {country}</h2>
            <RenderCards loading={loading} data={data} error={error}/>
        </div>
    )
}

CountryData.propTypes = {
    country: PropTypes.string
}