package almacen.dto;

import lombok.Data;

@Data
public class ProductoVendidoDTO {

	private String producto;
	private long cantidad_vendida;
	
	public ProductoVendidoDTO(String producto, long cantidad_vendida) {
		super();
		this.producto = producto;
		this.cantidad_vendida = cantidad_vendida;
	};
	
}
