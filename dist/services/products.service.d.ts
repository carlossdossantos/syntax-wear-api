import { CreateProduct, ProductFilters, UpdateProduct } from "../types/index.js";
export declare const getProducts: (filter: ProductFilters) => Promise<{
    data: {
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
    }[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare const getProductById: (id: number) => Promise<{
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
}>;
export declare const createProduct: (data: CreateProduct) => Promise<{
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
}>;
export declare const updateProduct: (id: number, data: UpdateProduct) => Promise<{
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
}>;
export declare const deleteProduct: (id: number) => Promise<void>;
//# sourceMappingURL=products.service.d.ts.map