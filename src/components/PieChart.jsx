import React, { useState } from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const PieChart = () => {
    const colors = Highcharts.getOptions().colors.map((c, i) =>
        Highcharts.color(Highcharts.getOptions().colors[0])
            .brighten((i - 3) / 7)
            .get()
    );

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in February, 2022',
            align: 'left'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors,
                borderRadius: 5,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'Devision',
            data: [
                { name: 'developer', y: 30 },
                { name: 'compute', y: 30 },
                { name: 'capital', y: 30 },
                { name: 'maintain', y: 10 }
            ]
        }]
    };

    return (
        <div className="card justify-content-center piechart-card">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default PieChart;