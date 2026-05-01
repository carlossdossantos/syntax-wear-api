import { CategoryFilters, CreateCategory, UpdateCategory } from "../types";
export declare const getCategories: (filters: CategoryFilters) => Promise<{
    data: {
        name: string;
        createdAt: Date;
        description: string | null;
        slug: string;
        active: boolean;
        id: number;
        updatedAt: Date;
    }[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare const getCategoryById: (id: number) => Promise<{
    name: string;
    createdAt: Date;
    description: string | null;
    slug: string;
    active: boolean;
    id: number;
    updatedAt: Date;
}>;
export declare const createCategory: (data: CreateCategory) => Promise<{
    name: string;
    createdAt: Date;
    description: string | null;
    slug: string;
    active: boolean;
    id: number;
    updatedAt: Date;
}>;
export declare const updateCategory: (id: number, data: UpdateCategory) => Promise<{
    name: string;
    createdAt: Date;
    description: string | null;
    slug: string;
    active: boolean;
    id: number;
    updatedAt: Date;
}>;
export declare const deleteCategory: (id: number) => Promise<void>;
//# sourceMappingURL=categories.service.d.ts.map