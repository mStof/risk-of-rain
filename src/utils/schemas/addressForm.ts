import z from "zod";

export const addressSchema = z.object({
  cep: z
    .string()
    .min(9, "CEP inválido")
    .regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  address: z.string().min(1, "Endereço é obrigatório"),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional()
});

export type FormData = z.infer<typeof addressSchema>;
