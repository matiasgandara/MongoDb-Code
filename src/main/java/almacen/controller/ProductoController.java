package almacen.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import almacen.model.Producto;
import almacen.repository.ProductoRepository;

@RestController
@RequestMapping("productos")
public class ProductoController {

	@Qualifier("productoRepository")
	@Autowired
	private final ProductoRepository repository;

	public ProductoController(@Qualifier("productoRepository") ProductoRepository repository) {
		this.repository = repository;
	}

	@GetMapping
	public Iterable<Producto> getProductos() {
		return repository.findAll();
	}
	
	@PostMapping
	public Producto newProducto(@RequestBody Producto p) {
		return repository.save(p);
	}
	
	@GetMapping("/{id}")
	Optional<Producto> one(@PathVariable String id) {
		return repository.findById(id);
	}


	@PutMapping("/{id}")
	Producto replaceProducto(@RequestBody Producto newProducto, @PathVariable String id) {

		return repository.findById(id).map(producto -> {
			producto.setNombre(newProducto.getNombre());
			producto.setCosto(newProducto.getCosto());
			producto.setStock(newProducto.getStock());
			return repository.save(producto);
		}).orElseGet(() -> {
			newProducto.setId(id);
			return repository.save(newProducto);
		});
	}

	@DeleteMapping("/{id}")
	void deleteProducto(@PathVariable String id) {
		repository.deleteById(id);
	}
	
	/*
	 * SECCION DE SERVICIOS ADICIONALES 
	 * que nos parecieron útiles para agregar
	 */
	@GetMapping("/nombre/{nombre}")
	public Iterable<Producto> getProductosByName(@PathVariable String nombre) {
		return repository.findAllByName(nombre);
	}

	@GetMapping("/costo/gt{costo}")
	public Iterable<Producto> getProductosGreaterThanCosto(@PathVariable float costo) {
		return repository.findAllGreaterThanCosto(costo);
	}
	
	@GetMapping("/costo/lte{costo}")
	public Iterable<Producto> getProductosLessThanOrEqualCosto(@PathVariable float costo) {
		return repository.findAllLessThanOrEqualCosto(costo);
	}
	
	@GetMapping("/stock/gt{stock}")
	public Iterable<Producto> getProductosGreaterThanStock(@PathVariable Integer stock) {
		return repository.findAllGreaterThanStock(stock);
	}
	
	@GetMapping("/stock/lte{stock}")
	public Iterable<Producto> getProductosLessThanOrEqualStock(@PathVariable Integer stock) {
		return repository.findAllLessThanOrEqualStock(stock);
	}
	/*
	 * FIN SECCION DE SERVICIOS ADICIONALES
	 */
	
}
