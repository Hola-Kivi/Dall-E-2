import path from "path";
import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dall-E-2 API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple application made with Express and documented with Swagger",
      // license: {
      //   name: "MIT",
      //   url: "https://spdx.org/licenses/MIT.html",
      // },
      contact: {
        name: "huiwei",
        url: "#",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.ts")],
};

export const specSwagger = swaggerJsdoc(options);
