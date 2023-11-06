import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color : "white"
    },
    
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.7)', // Change the color of Y-axis grid lines
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)', // Change the color of Y-axis labels
      },
    },
    x: {
      grid: {
        color:  'rgba(255, 255, 255, 0.7)', // Change the color of X-axis grid lines
      },
      ticks: {
        color:  'rgba(255, 255, 255, 0.7)', // Change the color of X-axis labels
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random() * 100),
      backgroundColor: '#164863',
      borderColor: 'white', // Change the bar border color
      borderWidth: 2, // Change the bar border width
    }
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
