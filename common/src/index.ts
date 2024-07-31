import zod from 'zod';

export const signupInput=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
    name:zod.string()
})

export type SignupInput=zod.infer<typeof signupInput>

export const signinInput=zod.object({
    username:zod.string().email(),
    password:zod.string()
})

export type SigninInput=zod.infer<typeof signinInput>

export const blogInput=zod.object({
    tittle:zod.string(),
    content:zod.string()
})

export type BlogInput=zod.infer<typeof blogInput>