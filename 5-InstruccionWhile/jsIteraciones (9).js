function mostrar()
{

	var respuesta;
	var contador;
	var numero;
	var maximo;
	var minimo;
	
	respuesta ='si';
	contador =0;

	while(respuesta!='no')
	{
		contador = contador +1;
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		respuesta = prompt("Desea ingresar otro numero?");

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;

		}
		else
		{
			if(numero>maximo)
			{
			maximo=numero;
			}
			if(numero<minimo)
			{
			minimo=numero;
			}
		}
		

		//acumulador=acumulador+numero;

	
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN