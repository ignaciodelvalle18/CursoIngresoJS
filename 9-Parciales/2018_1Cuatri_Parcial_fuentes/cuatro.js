function mostrar()
{
	var numero1;
	var numero2;
	var concatenados;
	var resta;
	var suma;

	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese el segundo numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		concatenados=numero1+numero2;
		mensaje="Su numero concatenado es "+numero1+numero2;
	}
	else if(numero1>numero2)
	{
		resta=numero1-numero2;
		mensaje="La resta es "+resta;
	}
	else 
	{
		suma=numero1+numero2;
		mensaje="La suma es "+suma;
	if(suma>=10)
			{
				mensaje="La suma es "+suma+" y supero el 10";
			}
	}
	alert(mensaje);
}
