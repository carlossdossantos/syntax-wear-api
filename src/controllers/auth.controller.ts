import { FastifyReply, FastifyRequest } from "fastify";
import { loginUser, registerUser } from "../services/auth.service.js";
import { AuthRequest, RegisterRequest } from "../types/index.js";
import { loginSchema, registerSchema } from "../utils/validators.js";

export const register = async (request: FastifyRequest, reply: FastifyReply) => {
	// Lógica de registro de usuário

    const validation = registerSchema.parse(request.body as RegisterRequest);

	const user = await registerUser(validation);

	const token = request.server.jwt.sign({ userId: user.id });

	reply.status(201).send({
		user,
		token,
	});
};

export const login = async (request: FastifyRequest<{ Body: AuthRequest }>, reply: FastifyReply) => {

	const validation = loginSchema.parse(request.body as AuthRequest);

	const user = await loginUser(validation, reply);

	if(!user) return;

	const token = request.server.jwt.sign({ userId: user.id });

	reply.setCookie("syntaxwear.token", token, {
		httpOnly: true, // Não acessível via JavaScript
		secure: process.env.NODE_ENV === "production", // Apenas em HTTPS no ambiente de produção
		sameSite: "lax", // Protege contra CSRF - permite requisição de navegação normais
		path: "/", // Disponível em todo o site todas as rotas
		maxAge: 60 * 60 * 24 // expira no máximo em 1 dia
	})

	reply.status(200).send({
		user
	});
};

export const profile = async (request: FastifyRequest, reply: FastifyReply) => {
	reply.status(200).send(request.user);
};

