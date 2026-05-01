import z, { ZodError } from "zod";
export const errorHandler = (error, request, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            message: "Erro de validação (zod)",
            errors: z.treeifyError(error),
        });
    }
    if (error.code === "FST_ERR_VALIDATION") {
        return reply.status(400).send({
            message: "Erro de validação (fastify)",
            errors: error.validation,
        });
    }
    return reply.status(500).send({ message: "Erro interno do servidor", debug: error.message });
};
//# sourceMappingURL=error.middleware.js.map