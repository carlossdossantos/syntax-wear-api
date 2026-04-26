import { FastifyInstance } from "fastify";
import { listProducts } from "../controllers/products.controller";
import { authenticate } from "../middlewares/auth.middleware";

export default async function productRoutes(fastify: FastifyInstance){

    fastify.addHook('onRequest', authenticate);
    fastify.get('/',{
        schema: {
            tags: ['Products'],
            description: 'Lista produtos com filtros opcionais',
            querystring: {
                type: "object",
                properties: {
                    page: { type: "number", description: "Número da página" },
                    limit: { type: "number", description: "Quantidade de produtos por página" },
                    minPrice: { type: "number", description: "Preço mínimo" },
                    maxPrice: { type: "number", description: "Preço máximo" },
                    search: { type: "string", description: "Texto de busca" },
                    sortBy: {type: "string", enum: ["price", "name", "createdAt"]},
                    sortOrder: {type: "string", enum: ["asc", "desc"]},    
                },                   
            },
        },
    }, listProducts);
}