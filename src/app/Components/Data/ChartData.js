import React, { memo } from 'react'
import { Line } from 'react-chartjs-2';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { useDataDaily } from '../../../hooks';
import { getDailyInfo } from '../../../api/request';
import PropTypes from 'prop-types';
import NoData from '../Utils/NoData';
import Loading from '../Utils/Loading';

let dataChart = {
    labels: [],
    datasets: [
        {
            label: 'World Recovered',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(38, 194, 129, 0.4)',
            borderColor: 'rgba(38, 194, 129, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(38, 194, 129, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(38, 194, 129, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        },
        {
            label: 'World death',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(217, 30, 24, 0.4)',
            borderColor: 'rgba(217, 30, 24, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(217, 30, 24, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(217, 30, 24, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        },
        {
            label: 'World Confirmed',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(31, 58, 147, 0.4)',
            borderColor: 'rgba(31, 58, 147, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(31, 58, 147, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(31, 58, 147, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        },
    ]
};


function ChartData({ country }) {

    const coronaData = getDailyInfo();

    const { loading, data, error } = useDataDaily(coronaData);

    return (
        <Row className="dashboard-part">
            <Col xs={12}><h5>Graphic</h5></Col>
            <Col xs={12}>
                <RenderChart loading={loading} data={data} error={error} country={country} />
            </Col>
        </Row>

    )
}

export default memo(ChartData);

export function RenderChart({ loading, data, error, country }) {

    const renderChart = () => {
        dataChart.datasets[0].data = [];
        dataChart.datasets[1].data = [];
        dataChart.datasets[2].data = [];
        dataChart.labels = [];
        if (error) {
            return (<NoData error={error} data={data} />)
        }
        if (loading) {
            return (<Loading isLoading={loading} />)
        } else {
            let yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 2);
            let index = 0;
            for (let d = new Date(2020, 0, 22); d < yesterday; d.setDate(d.getDate() + 1)) {
                let confirmed = 0;
                let deaths = 0;
                let recovered = 0;
                const dateFormat = moment(d).format('YYYY-MM-DD');

                dataChart.labels.push(`${dateFormat}`);
                data[index].forEach(dataCountry => {
                    const conf = dataCountry.confirmed === "" ? 0 : parseInt(dataCountry.confirmed)
                    const rec = dataCountry.recovered === "" ? 0 : parseInt(dataCountry.recovered)
                    const dead = dataCountry.deaths === "" ? 0 : parseInt(dataCountry.deaths)
                    confirmed += conf;
                    deaths += dead;
                    recovered += rec;
                });
                dataChart.datasets[2].data.push(confirmed)
                dataChart.datasets[1].data.push(deaths)
                dataChart.datasets[0].data.push(recovered)
                index++;
            }

            return (
                <>
                    <Line data={dataChart} />
                </>
            )
        }
    }

    return (
        renderChart()
    )

}

RenderChart.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.array,
    error: PropTypes.bool,
    country: PropTypes.string
}


ChartData.propTypes = {
    country: PropTypes.string
}