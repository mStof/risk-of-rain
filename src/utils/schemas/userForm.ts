import z from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.email().min(1, "Email é obrigatório"),
  password: z.string("Senha é obrigatório").min(6, "Senha tem que ser acima de 6 caracteres"),
  cpf: z
    .string()
    .min(14, "CPF é obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido")
});

export type userSchemaType = z.infer<typeof userSchema>;