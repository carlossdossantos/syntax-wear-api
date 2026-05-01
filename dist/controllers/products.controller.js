import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../services/products.service.js";
import { createProductSchema, deleteProductSchema, productFiltersSchema, updateProductSchema } from "../utils/validators.js";
import { generateSlug } from "../utils/slug.js";
export const listProducts = async (request, reply) => {
    const filters = productFiltersSchema.parse(request.query);
    const result = await getProducts(filters);
    reply.status(200).send(result);
};
export const getProduct = async (request, reply) => {
    const product = await getProductById(request.params.id);
    reply.status(200).send(product);
};
export const createNewProduct = async (request, reply) => {
    const body = request.body;
    body.slug = generateSlug(body.name);
    const validate = createProductSchema.parse(body);
    await createProduct(validate);
    reply.status(201).send({ message: "Produto criado com sucesso" });
};
export const updateExistingProduct = async (request, reply) => {
    const { id } = request.params;
    const body = request.body;
    const validate = updateProductSchema.parse(body);
    if (validate.name) {
        validate.slug = generateSlug(validate.name);
    }
    const product = await updateProduct(Number(id), validate);
    reply.status(200).send(product);
};
export const deleteExistingProduct = async (request, reply) => {
    const { id } = request.params;
    const validate = deleteProductSchema.parse({ id: Number(id) });
    await deleteProduct(validate.id);
    reply.status(204).send();
};
//# sourceMappingURL=products.controller.js.map