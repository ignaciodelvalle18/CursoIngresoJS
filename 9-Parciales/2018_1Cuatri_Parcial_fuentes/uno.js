
function mostrar()
{
	var ancho;
	var largo;
	var contador;
	var perimetro;

	contador = 0;
	acumulador = 0;

	while(contador<2)
	{
		contador = contador + 1;
		ancho = prompt("Indique un ancho");
		largo = prompt("Indique un largo");
		ancho = parseInt(ancho);
		largo = parseInt(largo);
		perimetro = ancho * largo;
		break;
	}

	alert("El perímetro de su rectangulo es " + perimetro);
	



}
