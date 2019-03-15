
function mostrar()
{
	var rectangulo;
	var ancho;
	var largo;
	var suma;
	var perimetro;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	ancho = prompt("Ingrese el ancho del rectangulo");
	largo = prompt("Ahora ingrese el largo");

	suma = ancho + largo;

	perimetro = suma  *2;

	alert("Su perimetro es "+perimetro);



}
