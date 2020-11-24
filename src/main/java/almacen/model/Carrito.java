package almacen.model;

import java.sql.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@AllArgsConstructor
@ToString
@Getter @Setter
@Document(collection = "carrito")
public class Carrito {
	
	@Id
	private String id;
	private List<String> productos;
	private Date fecha;
	private String direccion;
	private float precio;
	
}
