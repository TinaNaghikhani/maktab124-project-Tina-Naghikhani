'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement, // برای نمودارهای دایره‌ای (Pie)
    Tooltip,   // برای tooltip
    Legend,    // برای legend
} from 'chart.js';

// ثبت المان‌های مورد نیاز
ChartJS.register(ArcElement, Tooltip, Legend);

import { dashboardLocalization } from '@/localization/localization';

function BestSellerChart() {
    const { charts } = dashboardLocalization;
    const labels = [
        charts.bestSellerChartLabels.fantasy,
        charts.bestSellerChartLabels.literary,
        charts.bestSellerChartLabels.novel,
        charts.bestSellerChartLabels.poet,
        charts.bestSellerChartLabels.others,
    ];
    const dataValues = [40, 30, 11, 7, 12];

    const options = {
        tooltip: {
            font: {
                family: 'vazir',
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
        plugins: {
            legend: {
                rtl: true,
                position: 'right' as const,
                labels: {
                    font: {
                        family: 'vazir',
                    },
                },
            },
            title: {
                display: true,
                text: charts.bestSellerChartTitle,
                font: {
                    family: 'vazir',
                    size: 15,
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

    const data = {
        labels,
        datasets: [
            {
                label: 'درصد فروش',
                data: dataValues,
                backgroundColor: [
                    'rgba(255,111,142,0.8)',
                    'rgba(72,235,54,0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                ],
                borderColor: [
                    'rgb(60,6,17)',
                    'rgb(14,99,7)',
                    'rgb(135,99,13)',
                    'rgb(21,128,128)',
                    'rgb(40,8,104)',
                ],
                borderWidth: 1.5,
            },
        ],
    };

    return <Pie data={data} options={options} />;
}

export default BestSellerChart;