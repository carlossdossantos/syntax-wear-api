import { FastifyReply, FastifyRequest } from "fastify";
import { CategoryFilters, CreateCategory } from "../types/index.js";
export declare const listCategories: (request: FastifyRequest<{
    Querystring: CategoryFilters;
}>, reply: FastifyReply) => Promise<void>;
export declare const getCategory: (request: FastifyRequest<{
    Params: {
        id: string;
    };
}>, reply: FastifyReply) => Promise<void>;
export declare const createNewCategory: (request: FastifyRequest<{
    Body: CreateCategory;
}>, reply: FastifyReply) => Promise<void>;
export declare const updateExistingCategory: (request: FastifyRequest<{
    Params: {
        id: string;
    };
    Body: Partial<CreateCategory>;
}>, reply: FastifyReply) => Promise<void>;
export declare const deleteExistingCategory: (request: FastifyRequest<{
    Params: {
        id: string;
    };
}>, reply: FastifyReply) => Promise<void>;
//# sourceMappingURL=categories.controller.d.ts.map