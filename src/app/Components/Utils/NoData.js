import React from 'react'
import PropTypes from 'prop-types';

export default function NoData({error=false, data={}}) {

    const renderError = () => {
        if (error) {
            return (<p>{data.message}</p>)
        }
    }

    return (
        <div>
            {renderError()}
        </div>
    )
}

NoData.propTypes = {
    error: PropTypes.bool,
    data:  PropTypes.object
}