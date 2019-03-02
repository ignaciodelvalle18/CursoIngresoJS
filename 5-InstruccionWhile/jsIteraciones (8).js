function mostrar()
{

	var numero;
	var contador;
	var positivo;
	var negativo;
	var respuesta;

	contador=0;
	positivo=0;
	negativo=1;
	
	respuesta='si';

	while(respuesta == "si")
	{
		contador = contador +1;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = prompt("Desea ingresar otro numero?");

		if(numero<0)
		{
			negativo = negativo * numero;
		}
		else
		{
			positivo = positivo + numero;
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN