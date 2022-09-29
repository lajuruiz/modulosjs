1. se debe de instalar node js por que este es mi entorno de ejecucion para js y es orientado
a eventos asincronos.

2.instalar npm para cada navegador 
NPM es parte esencial de node js 
<!-- npm es parte esencial de Node.js, el entorno de ejecución de javaScript en el lado del servidor Es muy seguramente la principal razón del gran éxito de Node permitiendo que cientos de desarrolladores puedan compartir paquetes de software entre distintos proyectos. -->
(NPM es un gestor de paquetes para Javascript)
Node Package Manager o manejador de paquetes de node.

3. El package.json contiene informacion importante sobre el proyecto como: 
Nombre descripcion autor palabras importantes scripts  entre otras 
Este archivo indica a npm que el directorio en el que se encuentra es en efecto un proyecto o paquete npm. 

*** el package.json se ejecuta con el comando npm init 


4. package-lock.json 

Este archivo es auto generado y es una lista descriptiva y exacta de las versiones instaladas durante tu proceso. 
No esta destinado a ser leído ni manipulado por los desarrolladores, si no, para ser un insumo del proceso de 
manejo de dependencias.
se genera con el comando npm install 

5. por que usar scripts??? 
Cuando necesitas que tu paquete ejecuta alguna acción antes de ser utilizado y que no dependa del sistema operativo en que está siendo instaladonpm run start

siempre viene este script por defecto: 
*"test": "echo \"Error: no test specified\" && exit 1"*
se puede dejar o eliminar ya que no hace nada.

start : Se suele usar para tareas de inicio del proyecto. Se puede arrancar con npm start.
comando: npm run start





NOTAS:
https://www.npmjs.com/  -- crear una cuenta 
importante en los scripts que son la forma como yo puedo ejecutar el codigo
en el package.json 
"start": "node ./modulosjs/contabilidad.js"
defino el nombre del script en este caso start y 



*https://lenguajejs.com/npm/administracion/scripts-de-npm*

