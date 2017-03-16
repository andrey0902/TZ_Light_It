app.directive('showPopUp', [function () {
    return {
        restrict: 'EAC',
        scope: true,
        link(scope, element){

            let male = 0;

            scope.$watch('main.data', (newVal)=>{

                if(newVal){

                    scope.main.data.forEach((item)=>{

                        if(item.gender == 'male') male++;
                    });

                    google.charts.load("current", {packages:["corechart"]});
                    google.charts.setOnLoadCallback(drawChart);

                    function drawChart() {

                        let data = google.visualization.arrayToDataTable([
                            ['Task', 'Gender Users'],
                            ['Female', 10-male],
                            ['Male',male]
                        ]);

                        let options = {
                            title: 'Gender Users',
                            is3D: true,
                            legend:{
                                textStyle:{ color:'#7d7d7d',
                                    fontName: 'arial',
                                    fontSize: 20,
                                    bold: true,
                                    italic: true }
                            },
                            chartArea: {
                                width: 550,
                                height: 500,
                                left: 200
                            },
                            width: 550,
                            height: 500,
                            fontSize: '18px'
                        };

                        let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
                        chart.draw(data, options);
                    }
                }
            });

            element.on('click', () =>{
                let popUp = $('#myPopUp');
                popUp.modal({
                    keyboard: true,
                    show: true
                });
            });
        }
    }
}]);
