import z from "zod";
export declare const loginSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const registerSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    cpf: z.ZodOptional<z.ZodString>;
    birthDate: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const productFiltersSchema: z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    limit: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    minPrice: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    maxPrice: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    sortBy: z.ZodOptional<z.ZodEnum<{
        price: "price";
        name: "name";
        createdAt: "createdAt";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.z.core.$strip>;
export declare const categoryFiltersSchema: z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    limit: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
    active: z.ZodBoolean;
}, z.z.core.$strip>;
export declare const updateCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    active: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sizes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    slug: z.ZodString;
    stock: z.ZodNumber;
    active: z.ZodBoolean;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    categoryId: z.ZodNumber;
}, z.z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sizes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    slug: z.ZodOptional<z.ZodString>;
    stock: z.ZodOptional<z.ZodNumber>;
    active: z.ZodOptional<z.ZodBoolean>;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    categoryId: z.ZodOptional<z.ZodNumber>;
}, z.z.core.$strip>;
export declare const deleteProductSchema: z.ZodObject<{
    id: z.ZodNumber;
}, z.z.core.$strip>;
export declare const orderFiltersSchema: z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    limit: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        PAID: "PAID";
        SHIPPED: "SHIPPED";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
    }>>;
    userId: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const createOrderItemSchema: z.ZodObject<{
    productId: z.ZodNumber;
    quantity: z.ZodNumber;
    size: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const createOrderSchema: z.ZodObject<{
    userId: z.ZodOptional<z.ZodNumber>;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodNumber;
        quantity: z.ZodNumber;
        size: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>>;
    shippingAddress: z.ZodObject<{
        cep: z.ZodString;
        street: z.ZodString;
        number: z.ZodString;
        complement: z.ZodOptional<z.ZodString>;
        neighborhood: z.ZodString;
        city: z.ZodString;
        state: z.ZodString;
        country: z.ZodDefault<z.ZodString>;
    }, z.z.core.$strip>;
    paymentMethod: z.ZodString;
}, z.z.core.$strip>;
export declare const updateOrderSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        PAID: "PAID";
        SHIPPED: "SHIPPED";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
    }>>;
    shippingAddress: z.ZodOptional<z.ZodObject<{
        cep: z.ZodString;
        street: z.ZodString;
        number: z.ZodString;
        complement: z.ZodOptional<z.ZodString>;
        neighborhood: z.ZodString;
        city: z.ZodString;
        state: z.ZodString;
        country: z.ZodDefault<z.ZodString>;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
//# sourceMappingURL=validators.d.ts.map