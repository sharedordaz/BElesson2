const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API ',
    description: 'A contacts manager made in Node Js',
  },
  host: "lesson2-backend2-sharedordaz.onrender.com",
  basePath: "/",
  schemes: ['http', 'https'],
  produces: ['application/json'],
  licence : {
  name: "GPL3",
  url: "https://www.gnu.org/licenses/gpl-3.0.html"
  }
};


const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

