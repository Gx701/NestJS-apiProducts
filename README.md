### al clonar el projecto ejecute los siguientes comandos

npm install -g npm@latest
o
npm install

## Para iniciar el projecto
npm run start:dev

### sobre el projecto 

## Autenticación y Control de Acceso
Para esto se uso la libreria Passport con JWT, para generar tokens de acceso para los usuarios que se van Registrando en el sistema.

Para el middleware de autenticación (auth) se creo una clase JwtAuthGuard para proteger las rutas de acceso no autorizado. 

Los decoradores corresponden a una ruta y método HTTP específicos son parecidos a los routes que se crean en los diferentes frameworks ejemplo laravel, angular, reactjs.

