
# Introducción
Las compostas son un sistema de descomposición de productos orgánicos cuyo principal objetivo es la producción de abono o fertilizante para la tierra. La materia orgánica se descompone de manera aeróbica (con oxígeno). Esta puede ser formada por diferentes tipos de residuos orgánicos, como restos de frutas, vegetales, heces de animales, hojas, cascaras de huevo y bolsas de té.

Actualmente en la ciudad de Querétaro, las asociaciones “ComposPet” y “TransformandoMX” se encuentran realizando compostas a base de heces de perro; sin embargo, este tipo de compostas representan un gran riesgo hacia la salud por la cantidad de bacterias con las cuales se tiene contacto. Es por ello que para el personal u operador, disminuir el contacto con este tipo de compostas es de gran importancia para evitar el mayor contacto posible.

Aunado a esto, como todo tipo de compostas, es de vital importancia mantener ciertas condiciones atmosféricas para asegurar una buena calidad del fertilizante a producir, es por ello que tener un monitoreo y control de la humedad y temperatura es fundamental. Trabajando de la mano con las asociaciones anteriormente mencionadas, se planteó el prototipo de IOP. El cual consiste en un sistema integrado de censado, monitoreo, almacenamiento de datos y despliegue de los resultados de humedad y temperatura mediante una interfaz web con el uso de conexión a internet, los cuales le permitan visualizar al operador un histórico de las mediciones de las variables, un promedio de estas y la medición en tiempo real.

A continuación, se plantea, todo el proceso que se llevó a cabo para el desarrollo de este proyecto, desde el desarrollo del hardware y sistema digital, hasta el almacenamiento de datos y la proyección de estos.

# Misión
Reducir el riesgo de contraer enfermedades en la calle por la presencia de heces caninas y además, reciclar producto que de otra manera sería desperdicio.
# Visión
Ofrecer un sistema integrado de censado, monitoreo, almacenamiento de datos y despliegue de los resultados de humedad y temperatura mediante una interfaz web con el uso de conexión a internet.
# Factores de Consideración
- La temperatura de la composta debe oscilar entre los 55°C y 77°C. Por ende, en la implementación debe de integrarse un LED indicador de cuando las condiciones se encuentren fuera de las variables establecidas.
- La humedad de la composta debe mantenerse en un 50%, indicar mediante el led cuando los valores de humedad se encuentren fuera del valor establecido anteriormente.
- Prototipo final en una caja protegida por una malla que evite filtrar la tierra y materia fecal de la composta al sensor y evitar en gran medida el contacto humano. Al mismo tiempo, detectar y medir las variables mencionadas previamente.
- Evitar el uso de cualquier componente o sistema de iluminación que produzca calor que pueda interferir con las mediciones de temperatura del sensor.
- Asignar un código de colores para el Led que establezca diferentes estados como “En proceso de conexión”, “Conectado”, “En Funcionamiento” y “Fuera de límites”.
# Logotipo
![Logo de IOP](https://raw.githubusercontent.com/lCDSLl-Richard/IOP/main/assets/Logo%20IOP.png)
# Recursos Materiales
- Placa de Desarrollo NODE MCU
- Sensor de Humedad y Temperatura DHT11
- Placa de pruebas para circuito
- LED RGB
- Resistencias varias
# Funcionamiento de la Node MCU
Como primer paso para el desarrollo del Proyecto, una vez contando con los materiales anteriormente expuestos, se procedió a realizar la conexión de la Node MCU para asegurar su funcionamiento. Para ello se realizó la siguiente conexión en físico: 
![enter image description here](https://raw.githubusercontent.com/lCDSLl-Richard/IOP/main/assets/1.png)
Para probar el funcionamiento de la Node MCU, se realizó una conexión con la computadora, y usando el lenguaje de desarrollo Arduino, se probó el código para realizar un parpadeo en el LED usando el siguiente código:
![enter image description here](https://raw.githubusercontent.com/lCDSLl-Richard/IOP/main/assets/2.png)
Conexión a Internet de la Node MCU Como el módulo WiFi ya viene integrado a la tarjeta solo se realizó la conexión del LED con una resistencia, tal y como se muestra en el siguiente diagrama:
![enter image description here](https://raw.githubusercontent.com/lCDSLl-Richard/IOP/main/assets/3.png)
# Creación de la Base de Datos 
La base de datos fue creada usando el servicio de Google Firebase, el cuál es gratuito y nos genera un base de datos no relacional, accesible desde el internet.
# Almacenamiento de los Datos
Los datos son almacenados en Firebase a través de su API. En el archivo firebase.js, está el uso que le dimos a la API de Firebase tanto para almacenar y consultar los datos en la base de datos
 
# Comunicación de los Datos con el Servidor
En el archivo sendTempHumi.ino, está el código del arduino necesario para generar un servidor HTTP en la red local, al cual nos conectamos más tarde desde el script firebase.js, para obtener los datos del NodeMCU, procesarlos y mandarlos a Firebase.
# Desarrollo de la Interfaz Usuario 
La interfaz es una sencilla interfaz hecha con HTML y CSS. Están las dos vistas en los archivos index.html y historic.html
# Comunicación y Visualización de los Datos
Finalmente, en el archivo historic.js, hacemos uso de la API de Firebase para obtener los datos de la base de datos en la nube, procesarlos, y mostrar la información pertinente.
# Herramientas de Desarrollo
- Visual Studio Code
- Arduino IDE 2.0+
- Firebase API
