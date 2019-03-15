function mostrar()
{
	var numero1;
	var numero2;
	var dividir;
	var mensaje;
	var suma;

	numero1=prompt("Indique el primero numero");
	numero1=parseInt(numero1);

	numero2=prompt("Indique el segundo numero");
	numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		mensaje=numero1+numero2;
	}
	else if (numero1<numero2)
	{
		dividir=numero1/numero2;
		mensaje="Su numero dividido es "+dividir;
	}
	else
	{
		suma=numero1+numero2;
		mensaje="La suma es "+suma;
	}

	alert(mensaje);




}
