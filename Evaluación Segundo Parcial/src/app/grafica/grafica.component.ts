import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut: any;

  data1 = [];

  ngOnInit() {

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Tipos de Personas'
        },
      },
      data: {
        labels: ['Reportero', 'Agente de la SSP', 'Transeunte', 'Comerciante', 'Otro'],
        datasets: [
          {
            type: 'bar',
            label: 'Reportero, Agente, Transeunte, Comerciante, Otro',
            data: [243, 156, 365, 30, 156, 265],
            backgroundColor: ["rgba(46,89,33,0.8)","rgba(145,145,145,0.8)","rgba(46,89,33,0.8)","rgba(145,145,145,0.8)","rgba(46,89,33,0.8)"],
            borderColor: 'rgba(46,89,33,0.8)',
            fill: false,
          },
          // {
          //   type: 'line',
          //   label: 'Dataset 2',
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   data: [
          //     443, 256, 165, 100, 56, 65, 35, 543
          //   ],
          //   fill: true,
          // },
      
        ]
      }
    });

    let options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth: function (context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context) {
            return "red";
          },
          hoverBorderWidth: function (context) {
            var value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
    };
    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Reportes Resueltos'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45,10],
					backgroundColor: ["rgba(46,89,33,0.8)","rgba(145,145,145,0.8)"],
					label: 'reportesResueltos'
				}],
				labels: ['Resuelto','No resuelto']
			}
    })
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

updateChartData(chart, data, dataSetIndex){
  chart.data.datasets[dataSetIndex].data = data;
  chart.update();
}
}
