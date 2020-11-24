package almacen.dto;

import java.util.Date;

import lombok.Data;

@Data
public class VentasDTO {
	
	private Date fecha;
	private long cantidad_productos_vendidos;
	private double monto_total_ventas;
	
	public VentasDTO(Date fecha, long cantidad_productos_vendidos, double monto_total_ventas) {
		super();
		this.fecha = fecha;
		this.cantidad_productos_vendidos = cantidad_productos_vendidos;
		this.monto_total_ventas = monto_total_ventas;
	}

}
