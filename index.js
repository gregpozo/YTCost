new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [2007,2010,2017],
      datasets: [{ 
          data: [12,700,6350],
          label: "YouTube",
          borderColor: "rgba(255, 15, 5)",
          borderWidth: 3,
          backgroundColor: "rgba(255, 15, 5, 0.6)",
          fill: true
        }
      ]
    },
    options: {
        maintainAspectRatio: false,
        title:{
          display:true,
          text:'Costo de mantener YouTube funcionando (en millones)',
          fontSize:20
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        //layout:{
          //padding:{
            //left:50,
            //right:0,
            //bottom:0,
            //top:0
          //}
        //},
        tooltips:{
          enabled:true
        }
    }
  });
  