import React from 'react'
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

export default function Loading({isLoading}) {

    const renderLoading = () => {
        if (isLoading){
            return (<Spinner animation="grow" variant="primary" />)
        }
    }

    return (
        <div>
            {renderLoading()}
        </div>
    )
}

Loading.propTypes = {
    isLoading: PropTypes.bool
}