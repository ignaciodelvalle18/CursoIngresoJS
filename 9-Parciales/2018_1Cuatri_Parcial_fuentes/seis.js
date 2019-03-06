function mostrar()
{
	//entre 6 a 11 es de mañana
	// de 12 a 19 es de tarde
	//de lo contrario informar si es de noche
	//informar si hora no es valida
	//entre 20 y 24 "a dormir"

	var hora;
	var mensaje;
	var partesDelDia;



	hora = prompt("Ingrese hora");
	hora = parseInt(hora);

	switch(hora)
	{
		if(hora>=6 && hora<=11)
		{
			partesDelDia = "mañana";
		}
		else if (hora>=12 && hora<=19)
		{
			partesDelDia = "tarde";
		}
		else if ((hora>=20 && hora<=24) || (hora>=1 && hora<=5))
		{
			partesDelDia = "noche";
		}
		else 
		{
			mensaje = "ERROR: hora no válida, ingrese entre 1 y 24";
		}
		case "mañana":
			mensaje = "Es la mañana";
			break;
		case "tarde":
		mensaje = "Es la tarde";
		case "noche"
		mensaje = "Es de noche";
		if(hora>=20 && hora<=24)
		{
			alert("Anda a dormir");
		}

		
	}
	alert(mensaje);









}
