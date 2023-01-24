# demographics
react


#install dependencies
npm install

#run

npm start

# backend configuration server/index js

port 4000  Nota : Puede cambiar el puerto en la linea 7 ubicacion(server/index.js)

# run the project both front end and back end (local)

npm run start:dev

# remote database connection

const connection = mysql.createConnection({
    host: 'mysql-chevy.alwaysdata.net',
    user: 'chevy_free',
    password: 'adivinala',
    database: 'chevy_logsdb'
})



