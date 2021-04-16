# ACERCA DEL PROYECTO
ArtisKraken es un ejemplo de marketplace, realizado desarrollado con NodeJS, utilizando el framework ExpressJS con la finalidad de brindar a la comunidad una plataforma ecommerce casi lista para usar. En la implementación se utilizaron herramientas como bootstrap 4, ejs, AWS S3, Mercado Pago API, Canvas Template, entre otras.

### FUNCIONALIDADES DESTACADAS DE LO IMPLEMENTADO
* Usuarios: registro, login, manejo de compras, posibilidad de agregar/borrar comentarios en productos, edición de datos personales, un usuario existente puede registrar un negocio.
* Negocios: manejo de ventas, CRUD/bloquedo/activación de productos propios, administración de comentarios en productos, edición de datos comerciales.
* Productos: productos separados por negocio administrador, visualización/bloquedo de productos en tienda global. 
* Métodos de pago: cada negocio puede implementar metodos de pago de tipo cash o mercado pago, configuración de mercado pado independiente para cada comercio.
* Métodos de envío: CRUD de diferentes metodos de envio por comercio.
* Cupones de descuento: 
* Ordenes/Pedidos: Adminitración básica por comercio de ciclo de pago. 
* Módulo Administrador: este módulo puede administrar en su totalidad categorias, tipos, cupones, ordenes, metodos de pago y envio, tienda, usuarios, etc.

### TODO 
* Implementacion de API marketplace de mercado pago para vincular automaticamente un comercio. 
* Ciclo de pago completo de una orden o pedido. 
* Administación de stock de productos.
* Administrador implementado con SSR usando React JS.
* Chat entre compradores y tiendas.
* Formulario de contacto.

### DEMO
http://www.artiskraken.com.ar/

## INCIANDO EL PROYECTO LOCALMENTE

1. Inicia por clonar el repositorio:
        
        git clone https://github.com/e-burgos/artiskraken-node.git

2. Ejecutar el siguente comando en la raíz del proyecto:

        npm install

### CONFIGURANDO VARIABLES DE ENTORNO 
1. Genere un archivo .env en la raíz del proyecto, encontrará un archivo de ejemplo llamado **.env.example**.  
 
2. Verifique la siguiente ruta: public/js/env-example.js, genere un archivo env.js y coloque el siguiente contenido:

        window.env = {
            DOMAIN: "http://localhost:3000",
            PRODUCT_URL: "https://localhost:3000/images/products",
            //PRODUCT_URL: "https://nombre-del-bucket.s3-sa-east-1.amazonaws.com",
            //DOMAIN: https://nombre-del-proyecto.herokuapp.com/,
        };

### CONFIGURANDO DB LOCAL 
1. La aplicación esta implementada con MySQL por lo que debera tener un servidor local MySQL intalado (como por ejemplo MAMP) que gestine su DB. Teniendo esto en cuenta, inicie la configuración completando el archivo .env como el siguiente ejemplo:

        USERNAME_DEV=root
        PASSWORD_DEV=root
        DATABASE_DEV=artis_db_dev 
        HOST_DEV=127.0.0.1
        DIALECT_DEV=mysql
        DB_PORT_DEV=3306

> **Nota:** no es necesario crear una DB con este nombre, lo haremos luego.
> **Recurso 1:** https://www.neoguias.com/instalar-mamp-windows/
> **Recurso 2:** https://www.neoguias.com/instalar-mamp-mac/

2. Una vez que tenga las variables de entorno configuradas inciaremos el volvado de información dummy con la ayuda de un excelente ORM, en este caso **Sequelize**.

3. Es muy importante ante de continuar, configurar las rutas que sequelize necesita para leer su configuración, modelos, migraciones y seeders o semillas. Para ello agregaremos a la raíz del proyecto un archivo llamado **.sequelizerc** que deberá tener el siguiente contenido

        const path = require('path')

        module.exports = {
            config: path.resolve('./database/config', 'config.js'),
            'models-path': path.resolve('./database/models'),
            'seeders-path': path.resolve('./database/seeders'),
            'migrations-path': path.resolve('./database/migrations'),
        }

4. Por último, desde la consola, situados en la raíz del proyecto ejecutamos los siguentes comandos:

        sequelize db:create (creamos la DB)
        sequelize db:migrate (creamos la estructura)
        sequelize db:seed:all (Agregamos los datos iniciales)

---

### USANDO AMAZON WEB SERVICES
Amazon Web Services es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com.

### AWS: CREANDO UN BUCKET DE PRUEBA CON S3
Todas las imagenes y documentos del proyecto se almacenan en un bucket. Por tanto, debe crear un bucket para poder almacenar datos en Amazon S3.
Le invito a leer la siguente guía: https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/creating-bucket.html

        Una vez creado el Bucket recuerda incluirlo en las variales de entorno como el siguiente ejemplo:
        AWS_BUCKET_NAME=your-bucket
        AWS_REGION=sa-east-1

> Ver video: https://www.youtube.com/watch?v=3qGVkJQgiWY&t=251s

### AWS: MANEJO DE PERMISOS
Debes configurar los access tokens para hablar con S3 desde Node.js.
Una vez creado el usuario que manejara de forma programatica el bucket recuerda incluirlo en las variales de entorno como el siguiente ejemplo:
        
        AWS_ACCESS_USER=user-name
        AWS_ACCESS_KEY_ID=...
        AWS_SECRET_ACCESS_KEY=...

> Ver video: https://www.youtube.com/watch?v=-R4vVBzWy6k

### AWS: MANEJO DE BUCKET POLICY
A continuación configuraremos las políticas de acceso al bucket desde tu cuenta de AWS.

1. Ingresar al modulo **S3**.

2. Ingrezar al bucket en cuestión desde el listado de buckets.

3. Ingresar a la pestaña **Permissions**.

4. En la caja **Block public access (bucket settings)** desmarcar todos los bloqueos y guardar cambios.

5. En la caja **Bucket policy** ingresar el siguiente json y guardar cambios, recuerda reemplazar el nombre del bucket:

        {
            "Version": "2012-10-17",
            "Id": "Policy1441664301333",
            "Statement": [
                {
                    "Sid": "Stmt1441664293105",
                    "Effect": "Allow",
                    "Principal": "*",
                    "Action": "s3:GetObject",
                    "Resource": "arn:aws:s3:::your-bucket/*"
                }
            ]
        }

### TESTEANDO EL PROYECTO
Para testear que todo se encuentra funcionando, desde la consola situados en la raiz del proyecto ejecutamos el siguente comando:

        npm start

## DEPLOY EN HEROKU
Aquí vamos a ver como hacer “deploy” de una aplicación de Node utilizando el servicio de Heroku. Para empezar debes tener es una cuenta, lo cual es gratis.

1. Lo primero que debemos hacer es un cambio a nuestro package.json, con lo que indicamos en que version de Node corre nuestra aplicación. Heroku lo necesita para saber que version utilizar. Agregamos lo siguiente a nuestro package.json:

        "engines": {
        "node": "6.11.0"
        }

2. Luego creamos un par de archivos nuevos en el directorio root del app, el primero es el archivo **Procfile** que contiene la orden para correr nuestra aplicación, en nuestro caso agregaremos al archivo lo siguiente:

    web: npm start

3. Antes de seguir con los comando por consola, asegurate de tener instalado heroku-cli en tu maquina, puedes valerte de la siguiene información https://devcenter.heroku.com/articles/heroku-cli

4. Aseguate de estar loguead@ a Heroku ante de empezar con los comandos, para ello logueate en tu navegador y luego en la consola escribe:

        heroku login

5. Ahora estamos listos para crear el repositorio remoto a donde se subirá el app, ejecutamos:

        heroku create nombre-del-app

6. Ahora podemos hacer push al repositorio remoto de heroku, asegurándonos de que no subamos el folder node_modules/ ,verifica tu .gitignore, luego corremos:

        git push heroku master

7. Podriamos verificar que la aplicación fue subida correctamente, aunque no tendrá un funcionamiento correcto ya que necesita de un servidor de imágenes y una DB, sigamos con ello.

### CONSTRUYENDO UN BUCKET DE PRODUCCION USANDO S3 DE AWS
Para implementar un bucket de producción solo deber seguir los pasos mensionados anteriormente al contruir un bucket en un entorno local.

> **Nota:** ten en cuenta que este bucket debe tener un nombre único y no puede ser el mismo que utilizas para otro entorno.

### CONFIGURANDO DB DE PRODUCCION
Agregaremos una DB MySQL en producción para ello heroku ofrece una buena solución llamada JAWSDB.
Para implementarla puedes valerte de la siguiente información:

1. Documentación oficial en heroku: https://devcenter.heroku.com/articles/jawsdb

2. Dandote otro alternativa, para implementarla rápidamente, debemos pararnos en nuestro proyecto en heroku y copiamos esta link en el navegador: https://elements.heroku.com/search?q=JAWSDB

3. Seleccionamos el elemento **JawsDB MySQL** y luego tocamos en el botón **Install JawsDB MySQL**.

4. Paso seguido, situados en la pantalla **Online Order Form**, seleccionamos el plan **gratuito Kitefin Shared - Free** y en App to provision to, escribimos el nombre de nuestro proyecto, finalizamos presionando el botón **Submit Order Form**.

5. Regrazando a la pestaña **Overview** de nuestro proyecto y veremos el nuevo add-on creado, a continuación hacemos click en el para buscar nuestras variables de entorno y conectar nuestra nueva DB.

### CONFIGURANDO VARIABLES DE ENTORNO 
Las variables de entorno para producción deben ser agregadas en tu archivo .env y en heroku. 

1. Ahora que ya configuraste una DB de producción puedes completar el archivo .env 

        // DB Production Config
        USERNAME=
        PASSWORD=
        DATABASE=
        HOST=
        DIALECT=mysql
        DB_PORT=3306

2. Para agregar esta variales en heroku deber ir a la pestaña **Settings** de tu proyecto y presionar en el botón **Reveal Config Vars**, Agrega la siguiente información:

        // DB Production Config
        USERNAME=
        PASSWORD=
        DATABASE=
        HOST=
        DIALECT=mysql
        DB_PORT=3306

        // Main domain 
        DOMAIN=https://nombre-del-proyecto.herokuapp.com/

        // AWS S3 Config
        AWS_ACCESS_USER=...
        AWS_ACCESS_KEY_ID=...
        AWS_SECRET_ACCESS_KEY=...
        AWS_BUCKET_NAME=...
        AWS_REGION=...

3. Verifica la siguente ruta: public/js/env.js, en este archivo deberas establecer el dominio principal de tu aplicación y de la ruta donde se encuentran almacenados tus productos, por lo tanto actualizaremos lo siguente:

        window.env = {
            //DOMAIN: "http://localhost:3000",
            //PRODUCT_URL: "https://localhost:3000/images/products",
            PRODUCT_URL: "https://nombre-del-bucket.s3-sa-east-1.amazonaws.com",
            DOMAIN: https://nombre-del-proyecto.herokuapp.com/,
        };

### MIGRANDO INFORMACION A DB DE PRODUCCION
Luego de completar los pasos anteriores regresa a la consola de tu proyecto y posicinad@ en la raiz del proyecto, escribe:

        sequelize db:create --env production (creamos la DB)
        sequelize db:migrate --env production (creamos la estructura)
        sequelize db:seed:all --env production (Agregamos los datos iniciales)

Esto migrará la estructura e información inicial a tu DB de producción. 

### MIGRANDO INFORMACION DUMMY AL SOCKET DE PRODUCCION 
Una vez finalizado el trabajo de sequelize es necesario que completes el ciclo agregando las imagenes de ejemplo que seran leidas de tu socket de producción, con esto nos aseguraremos que todo esta funcionando correctamente, para ello deber realizar lo siguiente:

1. Dirigite a tu socket de produccion en AWS, busca el servicio S3.

2. En el listado de buckets ingresa a tu bucket de producción y toca en **Create folder**, luego en el campo **Folder name** escribe **products** y toca el botón **Create folder**.

3. Ingresa a la carpeta que se acaba de crear y presiona en **Upload**. Dentro de esta sección presiona en **Add files** y agrega los siguentes archivos:

        product-01.png
        product-02.png
        product-03.png
        product-04.png
        product-05.png
        product-06.png
        product-07.png
        product-08.png
        product-01.png
        product-gallery-01.jpg
        product-gallery-02.jpg
        product-gallery-03.jpg
        product-gallery-04.jpg
        product-gallery-05.jpg
        product-gallery-06.jpg
        product-gallery-07.jpg
        product-gallery-08.jpg
        product-gallery-09.jpg
        product-gallery-10.jpg

> **Nota:** podrás encontrar estos archivos en el directorio public/images/products del proyecto.

## AYUDA
Si tenes algún inconveniente en el despliegue de esta aplicación no dudes en contactarme a <a href="mailto:info@estebanburgos.com.ar">info@estebanburgos.com.ar</a>



