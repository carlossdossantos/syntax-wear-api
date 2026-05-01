import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProduct, ProductFilters } from "../types";
export declare const listProducts: (request: FastifyRequest<{
    Querystring: ProductFilters;
}>, reply: FastifyReply) => Promise<void>;
export declare const getProduct: (request: FastifyRequest<{
    Params: {
        id: number;
    };
}>, reply: FastifyReply) => Promise<void>;
export declare const createNewProduct: (request: FastifyRequest<{
    Body: CreateProduct;
}>, reply: FastifyReply) => Promise<void>;
export declare const updateExistingProduct: (request: FastifyRequest<{
    Params: {
        id: string;
    };
    Body: Partial<CreateProduct>;
}>, reply: FastifyReply) => Promise<void>;
export declare const deleteExistingProduct: (request: FastifyRequest<{
    Params: {
        id: string;
    };
}>, reply: FastifyReply) => Promise<void>;
//# sourceMappingURL=products.controller.d.ts.map