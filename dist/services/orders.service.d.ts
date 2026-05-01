import { OrderFilters, CreateOrder, UpdateOrder } from '../types/index.js';
export declare function getOrders(filters: OrderFilters | undefined, requestingUserId: number, isAdmin: boolean): Promise<{
    data: {
        createdAt: Date;
        id: number;
        updatedAt: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        status: import("@prisma/client").$Enums.OrderStatus;
        userId: number | null;
        shippingAddress: import("@prisma/client/runtime/client").JsonValue;
        paymentMethod: string;
    }[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare function getOrderById(id: number, requestingUserId: number, isAdmin: boolean): Promise<{
    items: ({
        product: {
            category: {
                name: string;
                createdAt: Date;
                description: string | null;
                slug: string;
                active: boolean;
                id: number;
                updatedAt: Date;
            };
        } & {
            price: import("@prisma/client-runtime-utils").Decimal;
            name: string;
            createdAt: Date;
            description: string | null;
            colors: import("@prisma/client/runtime/client").JsonValue | null;
            sizes: import("@prisma/client/runtime/client").JsonValue | null;
            slug: string;
            stock: number;
            active: boolean;
            images: import("@prisma/client/runtime/client").JsonValue | null;
            categoryId: number;
            id: number;
            updatedAt: Date;
        };
    } & {
        price: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        id: number;
        productId: number;
        quantity: number;
        size: string | null;
        orderId: number;
    })[];
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        cpf: string | null;
        phone: string | null;
    } | null;
} & {
    createdAt: Date;
    id: number;
    updatedAt: Date;
    total: import("@prisma/client-runtime-utils").Decimal;
    status: import("@prisma/client").$Enums.OrderStatus;
    userId: number | null;
    shippingAddress: import("@prisma/client/runtime/client").JsonValue;
    paymentMethod: string;
}>;
export declare function createOrder(data: CreateOrder): Promise<{
    createdAt: Date;
    id: number;
    updatedAt: Date;
    total: import("@prisma/client-runtime-utils").Decimal;
    status: import("@prisma/client").$Enums.OrderStatus;
    userId: number | null;
    shippingAddress: import("@prisma/client/runtime/client").JsonValue;
    paymentMethod: string;
}>;
export declare function updateOrder(id: number, data: UpdateOrder, requestingUserId: number, isAdmin: boolean): Promise<{
    items: ({
        product: {
            category: {
                name: string;
                createdAt: Date;
                description: string | null;
                slug: string;
                active: boolean;
                id: number;
                updatedAt: Date;
            };
        } & {
            price: import("@prisma/client-runtime-utils").Decimal;
            name: string;
            createdAt: Date;
            description: string | null;
            colors: import("@prisma/client/runtime/client").JsonValue | null;
            sizes: import("@prisma/client/runtime/client").JsonValue | null;
            slug: string;
            stock: number;
            active: boolean;
            images: import("@prisma/client/runtime/client").JsonValue | null;
            categoryId: number;
            id: number;
            updatedAt: Date;
        };
    } & {
        price: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        id: number;
        productId: number;
        quantity: number;
        size: string | null;
        orderId: number;
    })[];
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        cpf: string | null;
        phone: string | null;
    } | null;
} & {
    createdAt: Date;
    id: number;
    updatedAt: Date;
    total: import("@prisma/client-runtime-utils").Decimal;
    status: import("@prisma/client").$Enums.OrderStatus;
    userId: number | null;
    shippingAddress: import("@prisma/client/runtime/client").JsonValue;
    paymentMethod: string;
}>;
export declare function cancelOrder(id: number, requestingUserId: number, isAdmin: boolean): Promise<{
    items: ({
        product: {
            category: {
                name: string;
                createdAt: Date;
                description: string | null;
                slug: string;
                active: boolean;
                id: number;
                updatedAt: Date;
            };
        } & {
            price: import("@prisma/client-runtime-utils").Decimal;
            name: string;
            createdAt: Date;
            description: string | null;
            colors: import("@prisma/client/runtime/client").JsonValue | null;
            sizes: import("@prisma/client/runtime/client").JsonValue | null;
            slug: string;
            stock: number;
            active: boolean;
            images: import("@prisma/client/runtime/client").JsonValue | null;
            categoryId: number;
            id: number;
            updatedAt: Date;
        };
    } & {
        price: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        id: number;
        productId: number;
        quantity: number;
        size: string | null;
        orderId: number;
    })[];
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    } | null;
} & {
    createdAt: Date;
    id: number;
    updatedAt: Date;
    total: import("@prisma/client-runtime-utils").Decimal;
    status: import("@prisma/client").$Enums.OrderStatus;
    userId: number | null;
    shippingAddress: import("@prisma/client/runtime/client").JsonValue;
    paymentMethod: string;
}>;
//# sourceMappingURL=orders.service.d.ts.map