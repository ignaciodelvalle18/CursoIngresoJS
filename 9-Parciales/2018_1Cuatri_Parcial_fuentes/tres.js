function mostrar()
{

	var precio;
	var descuento;
	var suma;
	var preciofinal;
	var respuestas;

	precio=prompt("Indique un precio");
	descuento=prompt("Indique el descuento");
	precio=parseInt(precio)
	descuento=parseInt(descuento);
		

	preciofinal=precio*descuento/100;

	elPrecioFinal.value = preciofinal;


}
