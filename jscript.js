var gridSize=16;

$(document).ready(function(){

	createGrid(gridSize);
	$("#gridSize").append("<p>GridSize: "+gridSize)



	$("#btn1").click(function(){
		$("td").css({"background-color":"white"});
		console.log("test");
	});
	$("#btn2").click(function(){

		do{
			gridSize=prompt("Size of new Grid (1-80)");
		}while(gridSize>80||gridSize<1);		
		$("table").remove();
		$(".container").append("<table></table>");
		$("#gridSize p").remove();
		$("#gridSize").append("<p>GridSize: "+gridSize)

		createGrid(gridSize);
	});
	$(document).on("mouseenter","td",function(){
		$(this).css({"background-color":getRandomColor()});
	});
	

});

function createGrid(number){
	for(var i=0;i<number;i++){
		$("table").append("<tr class='row"+i+"'>");
		for(var j=0;j<number;j++){
			$(".row"+i).append("<td></td>");
		};

	};
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}