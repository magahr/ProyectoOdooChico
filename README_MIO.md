Odoo
==================================I N I C I A L E S ================================================
# Paso 0.- Video de entrenamiento/configuracion

            https://www.youtube.com/watch?v=jzpp-sLP-gI


# Paso 1.- Degarga y documentacion del producto.
            https://www.odoo.com/documentation/17.0/es_419/administration/on_premise/source.html

            Odoo Fremework:

            https://www.odoo.com/documentation/17.0/es/developer/reference/frontend.html

            Odoo New Module:
            https://www.odoo.com/documentation/17.0/th/contributing/development.html


# Paso 2.- Clonar el repo de ODOO

            este:
            git clone https://github.com/odoo/odoo.git

            git clone https://github.com/odoo/enterprise.git

            recomendado por lo pesado: hacer fork y luego clonar al local.

# Paso 3.-   Instalar python
# Paso 4.- Instalar postgress
            (recuerda quitar el antivirus para instalar
            Crear los usuarios desde pgadmin sobre el server boton derecho rol)
            puerto:5432
            base datos: odoodb02 
            user powerd : odoo02
            usser super powerd : odoo03
            password user: admin
            usuario del server: postgres
            clave del server: admin
            
            nota: mas abajo esta la configuracion del proyecto en la empresa.

# Paso 5: crear el virtual env  "venv"

        python  -m venv venv
            
# Paso 6: activar el virtual env  "venv"

            Presionar f1
            selectiona python ('venv')
            Select Interpreter
            esto selecciona el ambiente.

            Desde la consola Bach:
                # source .venv/Scripts/activate
                source venv/Scripts/activate  (sin punto)

            Desde la consola de Cmder
                .venv\Scripts\activate
   
# Paso 7.-Cree (o colocar de otro proyecto del mismo lenguaje) el .gitignore y cloque a:
        # Environments
            .env
            .venv
            env/
            venv/
            ENV/
            env.bak/
            venv.bak/  

# Paso 8.-Instalar dependenicaa

        pip install setuptools wheel

# Paso 9.-Actualizar el archivo requirements

        pip install -r requirements.txt

# Paso 10.- Crear y actualizar la base de datos

        Ir a pgadmin y crear la base datos con el usuario super creado anteriormente:
        
        python odoo-bin -r dbuser -w dbpassword --addons-path=addons -d mydb

        ESTE ES:
        python odoo-bin -r odoo03 -w admin --addons-path=addons -d odoodb02 -i base


        python odoo-bin.py -r userodo -w admin  -d odoodb -i base 
            (-i base), con i base, se ejecuta una sola vez, porque es para crear las tablas BE CAREFULL!!

# Paso 11.- Levantar el server

        python odoo-bin* -r odoo03 -w admin -d odoodb02 
        python odoo-bin  -r odoo03 -w admin --addons-path=addons -d odoodb02

        http://localhost:8069

        usuario para el acceso : admin
        password user          : admin
         

==========================PASOS UNA VEZ RECREADO TODO EL AMBIENTE ========================================
# Paso 12.- activar el virtual env  "venv" (VER PASO 06)
       Desde la consola Bach:
           source venv/Scripts/activate  (sin punto)

# Paso 12.- Levantar el server (VER PASO 11)

# Paso 13.- Levantar el server (VER PASO 09)

====== Pasos para crear modulos ======

# Paso 14.- Crear y levantar un modulo

python odoo-bin scaffold [nombre del modulo] [nombre de la carpeta donde estara el modulo]

       python odoo-bin scaffold prueba02 modules 

python odoo bin install --add-module /ruta/a/tu/modulo prueba

     python odoo bin install --add-module modules prueba
    
# levantar el server con los modulos creados que estan en la carpeta modules

    python odoo-bin -r odoo03 -w admin --addons-path=addons,modules -d odoodb02 

# Paso 15.- Habilitar el modulo de desarrollador de odoo

     En setting colocar:
        activate the developer mode

     En la barra de taresa superior seleccionar:
        Update Apps list

    








pasos:
=====================>INICIALES en proyecto de jesus<=========================
1.- python  -m venv venv
2.- pip install setuptools wheel
3.- pip install -r requirements.txt
4.- crear un usuario en postgre con todos los privilegios(full privilegios)
    userodo   admin
5.- crear una db de nombre: 
    odoodb

    copiar el contenido de : C:\Users\mhernandez.FOSPUCA\Documents\ProyectoOdoo\odoo-bin
    en la raiz del proyecto:
    C:\Users\mhernandez.FOSPUCA\Documents\ProyectoOdoo\odoo-17.0+e.20241018

    en el archivo odoo.conf, cambiar:

       db_user = userodo
       db_password = admin
       db_name = odoodb
       addons_path = addons_path = C:/Users/mhernandez.FOSPUCA/Documents/ProyectoOdoo/odoo-17.0+e.20241018/odoo/addons
       

6.- ejecutar:
    python odoo-bin.py -r dbuser -w dbpassword --addons-path=addons -d mydb

    este:
    python odoo-bin.py -r userodo -w admin  -d odoodb -i base 
    (-i base), se ejecuta una sola vez, porque es para crear las tablas

    quitamos esto --addons-path=addons, porque ya lo tiene en el path en odoo.conf


========== CUANDO YA ESTE TODO LISTO  ====

7.- Crear el gitignore
    
8.- Activar el ambiente virtual
    source venv/activate


7.- levantar el server.
    python odoo-bin.py -r userodo -w admin -d odoodb 

    http://localhost:8040

documentacion:
https://www.odoo.com/documentation/17.0/es_419/administration/on_premise/source.html


Control de Cambio:
git commit -m "09-12-2024 - Updating the new project"
git commit -m "10-12-2024 - Creating new modules"
requirements.txt
source venv/Scripts/activate