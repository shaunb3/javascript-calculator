var display = document.getElementById('display');

function toScreen(x){	

	display.value +=x;

	if(x==='c'){
		display.value ='';
	}

}

function ans(){

	x=display.value;

	x= eval(x);

	display.value =x;

	//console.log(x);

}


function backspace(){

	x = display.value;

	var len = x.length-1;

	display.value = x.substring(0, len);

}