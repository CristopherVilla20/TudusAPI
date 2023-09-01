const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_Asignacion.js','./routes/rest_Persona.js','./routes/rest_Tarea.js']

swaggerAutogen(outputFile, endpointsFiles)
