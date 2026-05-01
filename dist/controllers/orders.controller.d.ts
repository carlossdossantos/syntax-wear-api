import { FastifyRequest, FastifyReply } from 'fastify';
export declare function listOrders(request: FastifyRequest, reply: FastifyReply): Promise<void>;
export declare function getOrder(request: FastifyRequest<{
    Params: {
        id: string;
    };
}>, reply: FastifyReply): Promise<void>;
export declare function createNewOrder(request: FastifyRequest, reply: FastifyReply): Promise<void>;
export declare function updateExistingOrder(request: FastifyRequest<{
    Params: {
        id: string;
    };
}>, reply: FastifyReply): Promise<void>;
export declare function deleteExistingOrder(request: FastifyRequest<{
    Params: {
        id: string;
    };
}>, reply: FastifyReply): Promise<void>;
//# sourceMappingURL=orders.controller.d.ts.map