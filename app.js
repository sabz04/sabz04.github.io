
var mas = [];
var mas2 = [];
var str_spaces;
var key_mas=[];
var replaced_massive=[];
var array =[];
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
function display_massive(form) {
	create_massive(form.m.value,form.n.value);
	display_massive2(mas2);
	max_element(mas2);
	display_massive3(mas2);
}
function display_massive2(x) {
	document.getElementById("disp").innerHTML="";
	for(let i=0; i<x.length;i++)
	{		
		for (let j = 0; j < x[i].length; j++) {
			document.getElementById("disp").innerHTML+=x[i][j]+" ";

		}
		document.getElementById("disp").innerHTML+="<br>";
	}
}
function display_massive3(x) {
	document.getElementById("rezult").innerHTML="";
	for(let i=0; i<x.length;i++)
	{		
		for (let j = 0; j < x[i].length; j++) {
			document.getElementById("rezult").innerHTML+=x[i][j]+" ";

		}
		document.getElementById("rezult").innerHTML+="<br>";
	}
}
function max_element(x)
{
	let max = x[0][0];

  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x[i].length; j++) {
      if (x[i][j] > max) {
        max = x[i][j];
      }
    }
  }
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x[i].length; j++) {
      x[i][j]=Math.round(x[i][j]/max*100)/100;
    }
  }
  console.log(max);
}

function create_massive(m, n)
{
	mas2.length=0;
	for(let i=0; i<n;i++)
	{
		mas2.push(randomInteger(20, 50));
		mas2[i]=[];
		for (let j = 0; j < m; j++) {
			mas2[i].push(randomInteger(10, 200));
		}
	}
	//console.log(mas2);
}
function del_spaces(str)
{
	str =str.replace(/\s+/g, '_');
	return str;
}
function check_elem(x,st)
{
	do {
    // Generating random number
  	let randomNumber = randomInteger(Math.abs((st-st)), Math.abs(st-1));
    // Pushing into the array only 
    // if the array does not contain it
    if (!x.includes(randomNumber)) 
    {
        x.push(randomNumber);
    }
    } while (x.length < st);
  	return x;
}
function stringtoarr(sty)
{
	let vr = [];
 	for (let i =0; i< sty.length;i++)
 	{
 		vr[i]= sty[i];
 	}
 	return vr;
}  
function array_move(arr, old_index, new_index) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
}
function arrtostr(replaced_massive)
{
	var str_mas = [];
 	for(let j=0;j< replaced_massive.length;j++)
 	{
 	 str_mas+= replaced_massive[j];
 	}
 	return str_mas;
}
function gamilton_func(form)
{
	document.getElementById("rezult_1step").innerHTML="";
	document.getElementById("rezult_2step").innerHTML="";
	let str_new = del_spaces(form.inputTB.value);

	console.log(str_new);//disp
	console.log(str_new.length);
	//disp
	key_mas.length=0;
	check_elem(key_mas,str_new.length);

	console.log(key_mas);//disp
 	
	var array = stringtoarr(str_new);

 	console.log(array);//disp

 	//
 	replaced_massive = array;

 	for(let i=0;i< array.length;i++)
 	{
 	 	replaced_massive = array_move(replaced_massive, i, key_mas[i]);
 	 	console.log(replaced_massive, i,key_mas[i] );
 	}

 	console.log(replaced_massive);//disp

 	var str_mas = arrtostr(replaced_massive);
 	
 	document.getElementById("rezult_1step").innerHTML=str_mas;//disp
}
function gamilton_func2(form)
{
	document.getElementById("rezult_2step").innerHTML="";
	var dish=[];
	console.log(dish);
	dish = replaced_massive;
	for(let i=replaced_massive.length-1;i>= 0;i--)
 	{
 	 	dish = array_move(dish, key_mas[i], i);
 	 	console.log(dish,i , key_mas[i]);
 	}
 	for(let j =0;j<dish.length;j++)
 	{
 		document.getElementById("rezult_2step").innerHTML+=dish[j];
 	}
}