import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './ChartComponent.css';


const weeklyData = {
  labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
  datasets: [
    {
      label: 'Weekly Data',
      backgroundColor: '#CF9FFF',
      borderColor: '#CF9FFF',
      borderWidth: 1,
      data: [12, 19, 3, 5, 2, 3, 7, 10, 6, 14, 8],
      borderRadius: 10, // Set border radius for bars
    },
  ],
};

const monthlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Monthly Data',
      backgroundColor: '#CF9FFF',
      borderColor: '#CF9FFF',
      borderWidth: 1,
      data: [0, 5000, 10000, 15000, 20000, 25000, 30000],
      borderRadius: 50, 
    },
  ],
};

const quarterlyData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Quarterly Data',
      backgroundColor: '#CF9FFF',
      borderColor: '#CF9FFF',
      borderWidth: 1,
      data: [30, 45, 60, 75],
      borderRadius: 50, 
    },
  ],
};

const yearlyData = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Yearly Data',
      backgroundColor: '#6CB4EE',
      borderColor: '	#CF9FFF',
      borderWidth: 1,
      data: [100, 200, 300, 400, 500],
      borderRadius: 50, 
    },
  ],
};

const options = {
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: 'white',
      },
      grid: {
        display: false, 
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5,
        callback: function (value) {
          return value + 'k';
        },
        color: 'white',
      },
      grid: {
        drawBorder: false, 
        drawOnChartArea: true, 
        drawTicks: false, 
        color: 'white', 
      },
    },
  },
  plugins: {
  
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const yScale = chart.scales.y;
      const chartArea = chart.chartArea;

    
      const numberOfLines = 4;
      const stepSize = yScale.max / numberOfLines;

      ctx.save();
      ctx.strokeStyle = 'white'; 
      ctx.lineWidth = 1;

   
      for (let i = 0; i <= numberOfLines; i++) {
        const yPosition = yScale.getPixelForValue(i * stepSize);

        ctx.beginPath();
        ctx.moveTo(chartArea.left, yPosition);
        ctx.lineTo(chartArea.right, yPosition);
        ctx.stroke();
      }

      ctx.restore();
    },
  },
  maintainAspectRatio: false,
};

const ChartComponent = () => {
  const [chartData, setChartData] = useState(weeklyData);

  const handleDropdownChange = (event) => {
    switch (event.target.value) {
      case 'weekly':
        setChartData(weeklyData);
        break;
      case 'monthly':
        setChartData(monthlyData);
        break;
      case 'quarterly':
        setChartData(quarterlyData);
        break;
      case 'yearly':
        setChartData(yearlyData);
        break;
      default:
        setChartData(weeklyData);
        break;
    }
  };

  return (
    <div className="chart-section">
      <div className="header-container">
        <h1>Activity</h1>
        <select onChange={handleDropdownChange} style={{borderRadius:"15px",backgroundColor:"#666362"}}>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="chart-container">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
