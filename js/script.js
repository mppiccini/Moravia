$(document).ready(function () {
    alert("Welcome");		

	
$("#boton").live("click", (function(e) {
	e.preventDefault();
	
	var array = [];

	for(var i = 0; i <= 100; i++) 
	{
		if (((i % 3)==0 ) && ((i % 5)==0 )) 
		{	
		array.push("FizzBuzz");	
		}
		else
			{
			if (((i % 3)==0 ) && ((i % 5)!=0 ))
			{
			array.push("Fizz");	
			}
			else 
				{
				if (((i % 3)!=0 ) && ((i % 5)==0 ))
				{
				array.push("Buzz");	
				}
				else
					{
					array.push(i);	
					}
				}				
			}
	}
	table="<table border='1' cellpadding='5px' width='400px' '><td>Number</td><td>Result</td>";
	$("#respuesta").append(table);
	for (i=1;i<=100;i++){ 
		data= "<tr><td>" + i + "</td><td>" + array[i] ," +</td></tr></table>";
		$("#respuesta").append(data);
		$("#respuesta").css({"color": "white"});	
			
	}
	
	
}));	

});


	
