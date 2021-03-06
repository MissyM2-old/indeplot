import React from 'react'
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';

export function PieChart(props) {

  function generateGraph() {
    const colorVal = `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`;
    return {
      labels: props.labels,
      datasets: [
        {
          label: props.title,
          fill: false,
          lineTension: 0.5,
          backgroundColor: colorVal,
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: props.data
        }
      ]
    }
  }

  return (
    <Pie data={generateGraph} />)
}


PieChart.propTypes = {
  labels: PropTypes.array,
  title: PropTypes.string,
  data: PropTypes.array,
  options: PropTypes.any
};
