
function mostrar()
{
	var ancho;
	var largo;
	var contador;
	var perimetro;
	var suma;
	
	ancho = prompt("Indique un ancho");
	largo = prompt("Indique un largo");
	ancho = parseInt(ancho);
	largo = parseInt(largo);
	suma = ancho + largo;
	perimetro = suma *2;
	alert("El perímetro de su rectangulo es " + perimetro);
	



}
