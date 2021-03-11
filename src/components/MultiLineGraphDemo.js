import React from 'react';
import { Line } from 'react-chartjs-2';

class MultiLineGraphDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // data: {
            //     time: [1,2,3,4,5],
            //     sp1: [1,0,1,0,5],
            //     sp2: [0,2,0,4,0]
            // },

            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Speaker 1',
                        barThickness: 6,
                        borderColor: '#0000FF',
                        fill: false,
                        borderWidth: 1,
                        hoverBackgroundColor: '#FFFFFF',
                        hoverBorderColor: '#707070',
                        data: []
                    },
                    {
                        label: 'Speaker 2',
                        barThickness: 6,
                        borderColor: '#00FF00',
                        fill: false,
                        borderWidth: 1,
                        hoverBackgroundColor: '#FFFFFF',
                        hoverBorderColor: '#707070',
                        data: []
                    }
                ],
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                gridLines: {
                                    display: false,
                                    zeroLineColor: "transparent"
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    drawBorder: false,
                                    borderDash: [5, 5],
                                    zeroLineColor: "#707070"
                                },
                                categoryPercentage: 0.9,
                                barPercentage: 0.9,
                                ticks: {
                                    min: 0,
                                    max: 7,
                                    stepSize: 1,
                                    suggestedMin: 0.5,
                                    suggestedMax: 5.5,
                                    callback: function (label, index, labels) {
                                        switch (label) {
                                            case 0:
                                                return '';
                                            case 1:
                                                return 'Happy';
                                            case 2:
                                                return 'Sad';
                                            case 3:
                                                return 'Disgust';
                                            case 4:
                                                return 'Anger';
                                            case 5:
                                                return 'Fear';
                                            case 6:
                                                return 'Surprise';
                                            default: return ''
                                        }
                                    }
                                }

                            }
                        ]
                    }
                }
            }
        }
    }

    componentDidMount() {
        let data = this.props.data
        let chartData = this.state.chartData
        chartData.labels = data.time
        chartData.datasets[0].data = data.sp1
        chartData.datasets[1].data = data.sp2
        this.setState(chartData)
    }

    render() {
        return (
            <Line
                data={this.state.chartData}
                width={this.props.width}
                height={this.props.height}
                options={this.state.chartData.options}
            />
        )
    }
}

MultiLineGraphDemo.defaultProps = {
    width: 100,
    height: 500
}

export default MultiLineGraphDemo;