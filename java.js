function data(){
	var val = document.getElementById("data").value;
	var val1 = document.getElementById("data1").value;
	var sy = document.getElementById("car").value;
	
	var sum = val+"/"+sy+"/"+val1

	document.getElementById("display").innerHTML =  sum;
	
}