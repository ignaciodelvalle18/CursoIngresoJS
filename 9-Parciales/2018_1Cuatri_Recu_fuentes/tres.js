function mostrar()
{


	var precio;
	var descuento;
	var preciofinal;
	

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	precio=prompt("Indique el precio");
	descuento=prompt("Indique el descuento");

	preciofinal=precio*descuento/100;

	elPrecioFinal.value=preciofinal ;


}
