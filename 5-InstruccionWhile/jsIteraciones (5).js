function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;

	contador = 0;
	acumulador = 0;
	respuesta ='si';

	while(respuesta=="si")
	{
		contador = contador +1;
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		respuesta = prompt("Quiere ingresar otro numero?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN