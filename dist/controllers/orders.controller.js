import { orderFiltersSchema, createOrderSchema, updateOrderSchema } from '../utils/validators.js';
import { getOrders, getOrderById, createOrder, updateOrder, cancelOrder } from '../services/orders.service.js';
export async function listOrders(request, reply) {
    const filters = orderFiltersSchema.parse(request.query);
    // Extrair userId e role do token JWT
    const user = request.user;
    const requestingUserId = user.userId;
    const isAdmin = user.role === 'ADMIN';
    const orders = await getOrders(filters, requestingUserId, isAdmin);
    reply.status(200).send(orders);
}
export async function getOrder(request, reply) {
    const id = parseInt(request.params.id, 10);
    // Extrair userId e role do token JWT
    const user = request.user;
    const requestingUserId = user.userId;
    const isAdmin = user.role === 'ADMIN';
    const order = await getOrderById(id, requestingUserId, isAdmin);
    reply.status(200).send(order);
}
export async function createNewOrder(request, reply) {
    const data = createOrderSchema.parse(request.body);
    const order = await createOrder(data);
    reply.status(201).send({
        message: 'Pedido criado com sucesso',
        orderId: order.id,
    });
}
export async function updateExistingOrder(request, reply) {
    const id = parseInt(request.params.id, 10);
    const data = updateOrderSchema.parse(request.body);
    // Extrair userId e role do token JWT
    const user = request.user;
    const requestingUserId = user.userId;
    const isAdmin = user.role === 'ADMIN';
    const order = await updateOrder(id, data, requestingUserId, isAdmin);
    reply.status(200).send(order);
}
export async function deleteExistingOrder(request, reply) {
    const id = parseInt(request.params.id, 10);
    // Extrair userId e role do token JWT
    const user = request.user;
    const requestingUserId = user.userId;
    const isAdmin = user.role === 'ADMIN';
    await cancelOrder(id, requestingUserId, isAdmin);
    reply.status(200).send({
        message: 'Pedido cancelado com sucesso',
    });
}
//# sourceMappingURL=orders.controller.js.map