import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const PieChart = () => {
    const [chartData] = useState({
        labels: ['developer', 'compute', 'capital', 'maintain'],
        datasets: [
            {
                data: [30, 30, 30, 10],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726",
                    "#2288D4"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D",
                    "#3498DF"
                ]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: false,
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                formatter: (value, context) => {
                    return `${context.chart.data.labels[context.dataIndex]}: ${value}%`;
                }
            },
        }
    });

    return (
        <div className="card justify-content-center piechart-card">
            <Chart type="pie" data={chartData} options={lightOptions} />
        </div>
    )
}

export default PieChart;