var gridSize=16;

$(document).ready(function(){

	createGrid(gridSize);




	$("#btn1").click(function(){
		$("td").css({"background-color":"white"});
		console.log("test");
	});
	$("#btn2").click(function(){
		gridSize=prompt("Size of new Grid");
		
		$("table").remove();
		$(".container").append("<table></table>");
		createGrid(gridSize);
	});
	$(document).on("mouseenter","td",function(){
		$(this).css({"background-color":"black"});
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