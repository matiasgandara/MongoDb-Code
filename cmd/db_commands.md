# MongoCLI commands
```js
	mongod
	mongo
	use db_ecommerce
	db.createCollection("productos")
	db.createCollection("ventas")
	db.productos.insert([
		{
			nombre: "Aceite de girasol",
			descripcion: "Aceite de girasol Marolio 1000ml",
			costo: 50,
			stock: 100
		},
		{
			nombre: "Aceite de oliva",
			descripcion: "Aceite de oliva Lopez 500ml",
			costo: 300,
			stock: 20
		},
		{
			nombre: "Yerba mate",
			descripcion: "Yerba mate Andresito 500g",
			costo: 150,
			stock: 200
		},
		{
			nombre: "Cafe",
			descripcion: "Cafe Tostado Molido Cabrales 500g",
			costo: 300,
			stock: 50
		}
	])
```