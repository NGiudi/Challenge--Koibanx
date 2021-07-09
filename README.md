#Ejercicio de Flitrado de elementos de una tabla
##Requisitos
a. Se necesita una barra de búsqueda que hable con la api para poder filtrar la información de manera útil para el usuario y se la pase a la tabla.
b. La tabla debe permitir ordenar por las columnas Comercios y Cuit.
c. Se necesita poder filtrar la información por ID y/o CUIT y/o Nombre de comercio. Ya sea porque es exacto como parecido a Ejemplo: "34" puede buscar al ID 34 o 340, al cuit 30-3454… o al comercio "pancho 34". (Tip: lo importante es cómo se forman los query params, la búsqueda la realiza la api, no el front).
d. Se necesita poder filtrar por activos o no activos.
e. Se necesita poder combinar todos los filtros anteriores.

## Cómo correr el programa?
1. Crear un archivo .env en la carpeta raíz con las variables REACT_APP_URL_BASE y REACT_APP_API_ENDPOINT. Por ejemplo para la url https://api.koibanx.com/stores, quedaría:
   REACT_APP_URL_BASE = https://api.koibanx.com
   REACT_APP_API_ENDPOINT = stores
2. npm i
3. npm start
