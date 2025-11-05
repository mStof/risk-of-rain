import z from "zod";

export const userSchemaLogin = z.object({
  email: z.email().min(1, "Email é obrigatório"),
  password: z.string("Senha é obrigatório").min(6, "Senha tem que ser acima de 6 caracteres"),
});

export type userSchemaLoginType = z.infer<typeof userSchemaLogin>;