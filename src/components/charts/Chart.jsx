import * as echarts from 'echarts';
import { useEffect, useRef } from "react";
import { useChartContext } from "../../context/ChartDataContext";

function Chart() {
    const { chartData } = useChartContext();
    const chartRef = useRef(null);
    const myChart = useRef(null);

    useEffect(() => {
        myChart.current = echarts.init(chartRef.current);

        // Draw the initial chart
        myChart.current.setOption({
            series: [
                {
                    type: 'pie',
                    data: [
                        { value: 100, name: 'A' },
                        { value: 200, name: 'B' },
                        { value: 300, name: 'C' },
                        { value: 400, name: 'D' },
                        { value: 500, name: 'E' }
                    ],
                    roseType: 'area'
                }
            ]
        });

        return () => {
            myChart.current.dispose();
        };
    }, []);

    useEffect(() => {
        if (chartData) {
            // Update the chart data
            myChart.current.setOption({
                series: [
                    {
                        type: 'pie',
                        data: [
                            { value: chartData.input1, name: 'A' },
                            { value: chartData.input2, name: 'B' },
                            { value: chartData.input3, name: 'C' },
                            { value: chartData.input4, name: 'D' },
                            { value: chartData.input5, name: 'E' }
                        ],
                        roseType: 'area'
                    }
                ],
                roseType: 'area'
            });
        }
    }, [chartData]);

    return (
        <div id="main" ref={chartRef} style={{ width: "600px", height: "600px" }}></div>
    );
}

export default Chart;
