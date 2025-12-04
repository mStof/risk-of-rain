import z from "zod";

export const userSchemaUpdate = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.email().min(1, "Email é obrigatório"),
  password: z
    .string("Senha é obrigatório")
    .min(6, "Senha tem que ser acima de 6 caracteres"),
  tel: z
    .string()
    .min(15, "Telefone inválido")
    .regex(
      /(\(?[1-9]{2}\)?\s?)?(9?){0,1}9?[0-9]{4}-?[0-9]{4}$/,
      "Telefone inválido"
    ).optional(),
  cpf: z
    .string()
    .min(14, "CPF é obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido")
});

export type userSchemaUpdateType = z.infer<typeof userSchemaUpdate>;
