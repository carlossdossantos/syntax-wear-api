import { loginUser, registerUser } from "../services/auth.service";
import { loginSchema, registerSchema } from "../utils/validators";
export const register = async (request, reply) => {
    // Lógica de registro de usuário
    const validation = registerSchema.parse(request.body);
    const user = await registerUser(validation);
    const token = request.server.jwt.sign({ userId: user.id });
    reply.status(201).send({
        user,
        token,
    });
};
export const login = async (request, reply) => {
    const validation = loginSchema.parse(request.body);
    const user = await loginUser(validation);
    const token = request.server.jwt.sign({ userId: user.id });
    reply.status(200).send({
        user,
        token,
    });
};
//# sourceMappingURL=auth.controller.js.map