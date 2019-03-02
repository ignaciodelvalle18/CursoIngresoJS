function mostrar()
{
	var precio;
	var marca;
	var auxprecio;
	var auxmarca;
	var contador;
	var mensaje;
	var respuesta;

	contador = 0

	while(respuesta == si)
	{
		marca = prompt("Indique marca del celular");
		precio = prompt("Indique precio");

		if(contador==0)
		{
			auxmarca = marca
			auxprecio = precio
			contador += 1
		}
		else
		{
			auxmarca = marca
			auxprecio = precio
		}

		mensaje = prompt("Desea ingresar otro celular?")

	}




}
