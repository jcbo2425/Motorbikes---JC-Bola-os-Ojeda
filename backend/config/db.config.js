module.exports = { //permite exportar info de un fichero a otros
    HOST: "localhost",
    USER: "root",
    PASSWORD: "jcbodaw2911",
    DB: "db_motos",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};