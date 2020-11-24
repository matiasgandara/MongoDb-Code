package almacen.dto;

import lombok.Data;

@Data
public class CompraClienteDTO {

	private String cliente;
	private double monto_total_compras;
	
	public CompraClienteDTO(String cliente, double monto_total_compras) {
		super();
		this.cliente = cliente;
		this.monto_total_compras = monto_total_compras;
	}
	
}
