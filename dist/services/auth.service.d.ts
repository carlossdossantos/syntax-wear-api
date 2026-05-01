import { AuthRequest, RegisterRequest } from "../types";
export declare const registerUser: (payload: RegisterRequest) => Promise<{
    createdAt: Date;
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    cpf: string | null;
    birthDate: Date | null;
    phone: string | null;
    role: import("@prisma/client").$Enums.Role;
}>;
export declare const loginUser: (data: AuthRequest) => Promise<{
    createdAt: Date;
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    cpf: string | null;
    birthDate: Date | null;
    phone: string | null;
    role: import("@prisma/client").$Enums.Role;
}>;
//# sourceMappingURL=auth.service.d.ts.map