import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import React, { useState, useEffect } from 'react';

function HistogramChart( {dataKey} ) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:5000/hsr_character_stats/1212');
        const rawData = await response.json();
        // Group ATK values into increments of 10 and count frequency within each group
        const groupedData = rawData.reduce((accumulator, item) => {
          let roundedNum = Math.round(item[dataKey] / 100) * 100; // Round to nearest 100
          if (dataKey == "SPD") {
            roundedNum = Math.round(item[dataKey] / 5) * 5; // Rounded to nearest 5
          }
          else if (dataKey == "CR" || dataKey == "CD") {
            roundedNum = Math.round(item[dataKey] / 0.01); // Rounded to nearest 5
          }
          accumulator[roundedNum] = (accumulator[roundedNum] || 0) + 1; // Count frequency
          return accumulator;
        }, {});
        // Convert grouped data to array of objects for Recharts
        const chartData = Object.keys(groupedData).map(key => ({
          [dataKey]: parseInt(key), // Convert key back to number
          frequency: groupedData[key],
        }));
        setData(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-3/4 mx-auto m-5 bg-black-t-50">
      <h1>Histogram of Jingliu { dataKey } Value</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey={ dataKey } 
            type="category" // Set type to category for discrete x-axis values
            domain={['auto', 'auto']} // Set domain to auto to include all data points
            tick={{ fill: '#ffffff' }}
          />
          <YAxis 
            tick={{ fill: '#ffffff' }}
          />
          <Tooltip 
            formatter={(value) => [`${value} times`, 'Frequency']}
          />
          <Bar dataKey="frequency" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HistogramChart;