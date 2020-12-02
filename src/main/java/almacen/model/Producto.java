package almacen.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@ToString
@Getter @Setter
@Document(collection = "productos")
public class Producto {

	@Id
	private String id;
	private String nombre;
	private String descripcion;
	private Float costo;
	private Integer stock;
	

}
