app.directive('accordionShow', [function () {
    return {
        scope: true,
        restrict: 'EAC',
        link(scope, element, attr){

            scope.$watch('main.temp.length',(nevVal)=>{

                if(nevVal){

                    element.accordion(
                        { icons: {
                            "header":
                                "glyphicon glyphicon-plus",
                                "activeHeader": "glyphicon glyphicon-minus" },
                            active: true,
                            collapsible: true,
                            heightStyle: "content"
                        });

                    element.accordion( "refresh" );
                    element.accordion( "option", { active: true } );

                    $('.load').css('display', 'none');

                }
            });
        }
    }
}]);
