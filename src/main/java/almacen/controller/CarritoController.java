package almacen.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import almacen.model.Carrito;
import almacen.repository.CarritoRepository;
import almacen.repository.ProductoRepository;

@RestController
@RequestMapping("ventas")
public class CarritoController {

	@Autowired
	private final CarritoRepository repository;
	@Autowired
	private final ProductoRepository productoRepository;

	public CarritoController(CarritoRepository repository,ProductoRepository productoRepository) {
		super();
		this.repository = repository;
		this.productoRepository = productoRepository;
	}

	@GetMapping("/")
	public Iterable<Carrito> getCarritos() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Carrito> getCarrito(@PathVariable String id) {
		return repository.findById(id);
	}


	@DeleteMapping("/{id}")
	public void deleteCarrito(@PathVariable String id) {
		repository.deleteById(id);
	}
}
