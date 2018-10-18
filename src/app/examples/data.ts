// Dictionary of Hereos
export const timeSurfaces = {
  "Ambient Temperature": {
    Highcharts: "Highcharts",
    chartOptions: {
      series: [
        {
          data: document.getElementById("csv").innerHTML
        }
      ]
    }
  }
};

export const ts_data = {
  "Ambient Temperature": {
    Highcharts: "Highcharts",
    chartOptions: {
      series: [
        {
          data: [1.3, 1.4, 1.6, 2.0, 2.4, 2.9, 3.1, 2.8, 2.8, 2.7, 3.4]
        }
      ]
    }
  }
};
