package almacen.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import almacen.model.Producto;

public interface ProductoRepository extends MongoRepository<Producto,String> {
	
	/**
     * Consideramos más útil esta consulta que la de buscar por costo igual a un valor
	 * @param costo
	 * @return Lista productos cuyo costo es mayor al valor pasado por parametro
	 */
	@Query("{costo: { $gt : ?0 } }")
    public List<Producto> findAllGreaterThanCosto(float costo);
	
	/**
     * Consideramos más útil esta consulta que la de buscar por costo igual a un valor
	 * @param costo
	 * @return Lista productos cuyo costo es menor o igual el valor pasado por parametro
	 */
	@Query("{costo: {$lte : ?0} }")
    public List<Producto> findAllLessThanOrEqualCosto(float costo);

    /**
     * Consideramos más útil esta consulta que la de buscar por stock igual a un valor
     * @param stock
     * @return Lista productos cuyo stock es mayor al valor pasado por parametro
     */
    @Query("{stock: {$gt : ?0} }")
    public List<Producto> findAllGreaterThanStock(Integer stock);
    
    /**
     * Consideramos más útil esta consulta que la de buscar por stock igual a un valor
     * @param stock
     * @return Lista productos cuyo stock es menor o igual que el valor pasado por parametro
     */
    @Query("{stock: {lte ?0} }")
    public List<Producto> findAllLessThanOrEqualStock(Integer stock);
    
	
}
