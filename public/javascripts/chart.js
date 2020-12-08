const myChart = (totalObject) => {

    const parseData = JSON.parse(totalObject);

    var ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['อัตราการติดเชื้อสะสม', 'อัตราการหายจากโรคสะสม', 'อัตราการเสียชีวิตสะสม'],
            datasets: [{
                label: '',
                data: [parseData.totalConfirmed, parseData.totalRecovered, parseData.totalDeath],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 300,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}

const myChartTH = (countrys) => {

    const parseData = JSON.parse(countrys);

    var ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['อัตราการติดเชื้อสะสม', 'อัตราการหายจากโรคสะสม', 'อัตราการเสียชีวิตสะสม'],
            datasets: [{
                label: '',
                data: [parseData[0].confirmed, parseData[0].recovered, parseData[0].death],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 300,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}