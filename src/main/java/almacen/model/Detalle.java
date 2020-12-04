package almacen.model;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@ToString
@Getter @Setter
public class Detalle {
	
	private String producto;
	private int cantidad;

}
