module.exports = (sequelize, Sequelize) => {
    const Moto = sequelize.define("moto", {
      model: {
        type: Sequelize.STRING
      },
      cylinderCap: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      }
    })
  
    return Moto;
  }