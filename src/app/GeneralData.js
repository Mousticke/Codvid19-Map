import React from 'react';
import useData from '../hooks';
import { baseAPI } from '../api/request';
import RenderCards from './Cards/RenderCards';

export default function GeneralData() {
    const coronaData = baseAPI();
  
    const { loading, data, error } = useData(coronaData);

    return (
        <div>
            <h2>Global Information</h2>
            <RenderCards loading={loading} data={data} error={error}/>
        </div>
    )
}
