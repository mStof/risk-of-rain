import z from "zod";

const paymentSchema = z.object({
  cardNumber: z.string().min(19, "Número do cartão é obrigatório"),
  cardHolder: z.string().min(3, "Nome do titular é obrigatório"),
  cpf: z
    .string()
    .min(14, "CPF é obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido"),
  securityCode: z.string().min(3, "Código de segurança é obrigatório").max(3, "Código de segurança inválido"),
  expirationDate: z.string().min(5, "Vencimento é obrigatório")
});

type PaymentFormData = z.infer<typeof paymentSchema>;

export { paymentSchema, type PaymentFormData };
