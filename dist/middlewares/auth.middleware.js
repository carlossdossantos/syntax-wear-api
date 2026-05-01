import { prisma } from "../utils/prisma.js";
export const authenticate = async (request, reply) => {
    try {
        await request.jwtVerify();
        // Extrair userId do token e buscar role do usuário
        const userId = request.user.userId;
        if (!userId) {
            return reply.status(401).send({ message: "Token inválido. ID do usuário não encontrado." });
        }
        // Buscar role do usuário no banco
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { role: true },
        });
        if (!user) {
            return reply.status(401).send({ message: "Usuário não encontrado." });
        }
        // Adicionar role ao request.user para uso nos controllers
        request.user.role = user.role;
    }
    catch (err) {
        reply.status(401).send({ message: "Token inválido ou expirado" });
    }
};
//# sourceMappingURL=auth.middleware.js.map