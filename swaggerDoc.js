const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const options = {
    swaggerDefinition: {
        info:{
            title: "Test TransferTo",
            version: "1.0.0",
            description: "Test Api For Express"
        },
        basePath: "/"
    },
    apis: []
}