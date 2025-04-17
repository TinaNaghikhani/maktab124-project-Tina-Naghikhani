// 'use client'
// import { Line } from "react-chartjs-2";
// import { pageLevelLocalization } from "../../Localization/Localization.ts";
// import { dashboardLocalization } from '@/localization/localization'


// function SaleChart() {
//     const { dashboard } = pageLevelLocalization;
//     const { charts } = dashboardLocalization

//     const options = {
//         maintainAspectRatio: false,
//         scale: {
//             x: {
//                 ticks: {
//                     font: {
//                         family: "vazir",
//                         size: '9px'
//                     }
//                 }
//             },
//             y: {
//                 ticks: {
//                     font: {
//                         family: "bYekan",
//                         size: '12px'
//                     }
//                 }
//             }
//         },
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "top" as const,
//                 labels: {
//                     font: {
//                         family: "bYekan"
//                     }
//                 }
//             },
//             title: {
//                 display: true,
//                 text: charts.SaleChartTitle,
//                 font: {
//                     family: "vazir",
//                     size: 14
//                 }
//             },
//             tooltip: {
//                 titleFont: {
//                     size: 20,
//                     family: "vazir"
//                 },
//                 bodyFont: {
//                     family: "bYekan"
//                 }
//             }
//         },
//     }


//     const labels = [charts.SaleChartLabels.farvardin, charts.SaleChartLabels.ordibehesht,
//     charts.SaleChartLabels.khordad, charts.SaleChartLabels.tir, charts.SaleChartLabels.mordad,
//     charts.SaleChartLabels.shahrivar, charts.SaleChartLabels.mehr, charts.SaleChartLabels.aban,
//     charts.SaleChartLabels.azar, charts.SaleChartLabels.Dy, charts.SaleChartLabels.Bahman,
//     charts.SaleChartLabels.Esfand
//     ]

//     const saleOfLastYear = [120, 135, 125, 145, 160, 150, 170, 190, 146, 134, 114, 105]

//     const saleOfThisYear = [80, 75, 95, 100, 110, 105, 120, 115, 94, 92, 90, 74, 80, 78]


//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: "1403",
//                 data: saleOfLastYear,
//                 borderColor: "#670115",
//                 backgroundColor: "rgb(253,2,44)",
//             },
//             {
//                 label: "1404",
//                 data: saleOfThisYear,
//                 borderColor: "rgb(53, 162, 235)",
//                 backgroundColor: "rgb(17,56,78)",
//             },
//         ],
//     }
//     return (
//         <Line options={options} data={data} style={{ width: "100%"! }} />
//     );
// }

// export default SaleChart;
'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale, // برای محور دسته‌بندی (X-axis)
    LinearScale,   // برای محور عددی (Y-axis)
    PointElement,  // برای نقاط روی چارت
    LineElement,   // برای خطوط چارت
    Title,         // برای عنوان چارت
    Tooltip,       // برای tooltip
    Legend,        // برای legend
} from 'chart.js';

// ثبت المان‌های مورد نیاز
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import { dashboardLocalization } from '@/localization/localization';

function SaleChart() {
    const { charts } = dashboardLocalization;

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    font: {
                        family: 'vazir',
                        size: 9,
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        family: 'bYekan',
                        size: 12,
                    },
                },
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    font: {
                        family: 'bYekan',
                    },
                },
            },
            title: {
                display: true,
                text: charts.SaleChartTitle,
                font: {
                    family: 'vazir',
                    size: 14,
                },
            },
            tooltip: {
                titleFont: {
                    size: 20,
                    family: 'vazir',
                },
                bodyFont: {
                    family: 'bYekan',
                },
            },
        },
    };

    const labels = [
        charts.SaleChartLabels.farvardin,
        charts.SaleChartLabels.ordibehesht,
        charts.SaleChartLabels.khordad,
        charts.SaleChartLabels.tir,
        charts.SaleChartLabels.mordad,
        charts.SaleChartLabels.shahrivar,
        charts.SaleChartLabels.mehr,
        charts.SaleChartLabels.aban,
        charts.SaleChartLabels.azar,
        charts.SaleChartLabels.Dy,
        charts.SaleChartLabels.Bahman,
        charts.SaleChartLabels.Esfand,
    ];

    const saleOfLastYear = [120, 135, 125, 145, 160, 150, 170, 190, 146, 134, 114, 105];
    const saleOfThisYear = [80, 75, 95, 100, 110, 105, 120, 115, 94, 92, 90, 74, 80, 78];

    const data = {
        labels,
        datasets: [
            {
                label: '1403',
                data: saleOfLastYear,
                borderColor: '#670115',
                backgroundColor: 'rgb(253,2,44)',
            },
            {
                label: '1404',
                data: saleOfThisYear,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(17,56,78)',
            },
        ],
    };

    return <Line options={options} data={data} style={{ width: '100%' }} />;
}

export default SaleChart;