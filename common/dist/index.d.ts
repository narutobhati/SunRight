import zod from 'zod';
export declare const signupInput: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
    name: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
}, {
    email: string;
    password: string;
    name: string;
}>;
export type SignupInput = zod.infer<typeof signupInput>;
export declare const signinInput: zod.ZodObject<{
    username: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    password: string;
    username: string;
}, {
    password: string;
    username: string;
}>;
export type SigninInput = zod.infer<typeof signinInput>;
export declare const blogInput: zod.ZodObject<{
    tittle: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    tittle: string;
    content: string;
}, {
    tittle: string;
    content: string;
}>;
export type BlogInput = zod.infer<typeof blogInput>;
