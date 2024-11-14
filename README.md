# API REST de Parqueadero

Esta es una API REST construida con *Node.js* y *Express* que permite registrar, obtener, actualizar y eliminar vehículos en un parqueadero. El parqueadero tiene una capacidad limitada para motos y carros: 5 cupos para carros y 10 para motos.

## Tecnologías utilizadas

- *Node.js*: Entorno de ejecución JavaScript del lado del servidor.
- *Express.js*: Framework para crear APIs REST.
- *MongoDB*: Base de datos NoSQL utilizada para almacenar los vehículos.
- *Swagger*: Documentación interactiva para la API.

## Requisitos

Antes de ejecutar la API, asegúrate de tener lo siguiente:

- *Node.js* (>= 16.x)
- *MongoDB* (local o un servicio en la nube como Atlas)
  
### Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/TU_USUARIO/tu-repositorio.git
    ```
	2.	Accede al directorio del proyecto:

    ```bash
    cd tu-repositorio
    ```

	3.	Instala las dependencias utilizando npm o yarn:
    
    Con npm:
    ```bash
    npm install
    ```
    O con yarn:
    ```bash
    yarn install
    ```

	4.	Crea un archivo .env en la raíz del proyecto y configura tu URI de MongoDB:
    ```bash
    MONGO_URI=mongodb://localhost:27017/mi_parqueadero
    ```
    O si usas MongoDB Atlas:
    ```bash
    MONGO_URI=mongodb+srv://TU_USUARIO:TUCREDENCIAL@cluster0.mongodb.net/mi_parqueadero
    ```

	5.	Inicia la API:
    ```bash
    npm run dev
    ```
Esto arrancará el servidor en http://localhost:3000.

Endpoints

Registrar un vehículo

	•	Método: POST
	•	Ruta: /api/vehiculos/registrar
	•	Descripción: Registra un nuevo vehículo en el parqueadero (moto o carro).
	•	Cuerpo de la solicitud:

{
  "placa": "ABC123",
  "tipo": "carro",
  "modelo": "Toyota Corolla"
}


	•	Respuesta:
	•	201: Vehículo registrado correctamente.
	•	400: Datos inválidos.

Obtener todos los vehículos

	•	Método: GET
	•	Ruta: /api/vehiculos
	•	Descripción: Obtiene la lista de todos los vehículos registrados en el parqueadero.
	•	Respuesta:
	•	200: Lista de vehículos.

Actualizar un vehículo

	•	Método: PUT
	•	Ruta: /api/vehiculos/{placa}
	•	Descripción: Actualiza la información de un vehículo registrado, especificando la placa.
	•	Cuerpo de la solicitud:

{
  "tipo": "carro",
  "modelo": "Honda Civic"
}


	•	Respuesta:
	•	200: Vehículo actualizado correctamente.
	•	404: Vehículo no encontrado.

Eliminar un vehículo

	•	Método: DELETE
	•	Ruta: /api/vehiculos/{placa}
	•	Descripción: Elimina un vehículo del parqueadero utilizando la placa.
	•	Respuesta:
	•	200: Vehículo eliminado correctamente.
	•	404: Vehículo no encontrado.

Documentación con Swagger

La documentación interactiva de la API está disponible en:

http://localhost:3000/api-docs

Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:
	1.	Haz un fork de este repositorio.
	2.	Crea una nueva rama (git checkout -b nueva-rama).
	3.	Realiza tus cambios y haz commit de ellos (git commit -am 'Agregado algo').
	4.	Haz push a la rama (git push origin nueva-rama).
	5.	Abre un Pull Request describiendo los cambios.