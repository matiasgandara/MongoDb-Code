package almacen.utils;

import java.io.FileReader;
import java.io.IOException;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import almacen.model.Carrito;
import almacen.model.Cliente;
import almacen.model.Producto;
import almacen.repository.CarritoRepository;
import almacen.repository.ClienteRepository;
import almacen.repository.ProductoRepository;

@Configuration
public class DemoDB {

	@Bean
	CommandLineRunner initDatabase(
			@Qualifier("productoRepository") ProductoRepository productoRepository,
			@Qualifier("carritoRepository") CarritoRepository carritoRepository) {
		return args -> {
			cargarProductos(productoRepository);
			cargarCarritos(carritoRepository, productoRepository);
		};
	}

	private void cargarProductos(ProductoRepository productoRepository) {
		String path = "csv/productos - export.csv";

		CSVParser parser;
		try {
			parser = CSVFormat.DEFAULT.withHeader().parse(new FileReader(path));

			for (CSVRecord row : parser) {
				String nombre = row.get(0);
				float costo = Float.valueOf(row.get(1));
				Integer stock = Integer.valueOf(row.get(2));

				Producto p = new Producto(nombre, costo, stock);
				productoRepository.save(p);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	

	private void cargarCarritos(CarritoRepository carritoRepository, 
			ProductoRepository productoRepository) {
		
		String path = "csv/carritos - export.csv";

		CSVParser parser;
		try {
			parser = CSVFormat.DEFAULT.withHeader().parse(new FileReader(path));

			for (CSVRecord row : parser) {
				Long id_producto = Long.valueOf(row.get(0));
				Long id_cliente = Long.valueOf(row.get(1));
				String fecha = row.get(2);
				Integer cantidad = Integer.valueOf(row.get(3));
				float precio = Float.valueOf(row.get(4));
				Producto producto = productoRepository.getOne(id_producto);

				Carrito c = new Carrito(producto, fecha, cantidad, precio);
				carritoRepository.save(c);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
