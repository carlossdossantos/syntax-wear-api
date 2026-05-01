import { FastifyReply, FastifyRequest } from "fastify";
import { AuthRequest } from "../types/index.js";
export declare const register: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
export declare const login: (request: FastifyRequest<{
    Body: AuthRequest;
}>, reply: FastifyReply) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map