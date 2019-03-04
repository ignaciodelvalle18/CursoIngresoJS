function mostrar()
{
	//si la suma es mayor a 10 indicarlo x alert

	var numero1;
	var numero2;
	var concatenados;
	var resta;
	var suma;

	numero1 = prompt("Ingrese un numero");
	numero2= prompt("Ingrese el segundo numero");
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	if(numero1==numero2)
	{
		concatenados = numero1 + numero2;
		alert("Su numero concatenado es " + concatenados);

	}

	else if(numero1>numero2)
	{
		resta = numero1 - numero2;
		alert("La resta es " + resta);
	}
	else 
	{
		suma = numero1 + numero2;
		
	if(suma>=10)
			{
				alert("La suma es " + suma + " y supero el 10");
				break;
			}
			alert("La suma es "+ suma);

	}

}
