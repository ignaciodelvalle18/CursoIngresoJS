function mostrar()
{

	//a) La cantidad de números pares. 
//b) La cantidad de números impares. 
//c) La cantidad de ceros. 
//d) El promedio de todos los números positivos ingresados. 
//e) La suma de todos los números negativos. 
//f) El número y la letra del máximo y el mínimo.


	var letra;
	var numero;
	var respuesta;
	var cantidadPares;
	var cantidadImpares;
	var cantidadCeros;
	var contadorPositivos;
	var acumuladorPositivos;
	var promedioPositivos;


	respuesta="si";
	contadorPositivos=0;
	cantidadPares=0;
	cantidadCeros=0;	
	acumuladorPositivos=0;

	while(respuesta=="si");
	{
		letra = prompt("Ingrese una letra");
		numero = prompt("Ingrese un numero entre -100 y 100");
		numero = parseInt(numero);
		
		while(numero<-100&&numero>100)
		{
			numero = prompt("ERROR ingrese numero entre -100 y 100");
			numero = parseInt(numero);
		}

		if(numero%2==0)
		{
			cantidadPares=cantidadPares+1;

		}
		else
		{
			cantidadImpares=cantidadImpares+1;
		}
		if(numero==0)
		{
			cantidadCeros = cantidadCeros + 1;
		}
		if(numer<0)
		{
			contadorPositivos=contadorPositivos+1;
			acumuladorPositivos=acumuladorPositivos+numero;
			
		}


		promedioPositivos=contadorPositivos/acumuladorPositivos;


		respuesta = prompt("Desea seguir ingresando datos? (si o no)");

	}

	alert(promedioPositivos);



}