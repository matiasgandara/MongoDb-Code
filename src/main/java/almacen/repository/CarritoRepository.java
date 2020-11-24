package almacen.repository;

import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import almacen.model.Carrito;

public interface CarritoRepository extends MongoRepository<Carrito, String>{

    
	@Query("{fecha: ?0}")
	public List<Carrito> selectVentasDiarias();
    
}
