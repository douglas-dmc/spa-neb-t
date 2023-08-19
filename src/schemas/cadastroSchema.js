import { z } from "zod"

export const cadastroSchema = z
    .object({
        titulo: z
            .string()
            .nonempty({ message: "Digite o título da norma" })
            .min(3, { message: "O título não pode ser tão curto" }),
        objetivo: z
            .string()
            .nonempty({ message: "Digite o objetivo da norma" })
            .min(10, { message: "O objetivo deve ter mais de 10 caracteres" }),
        tipo: z.string().nonempty({ message: "Selecione o tipo da norma" }),
        numero: z.string().nonempty({ message: "Digite o número da norma" }),
        arquivo: z
            .any()
            .refine(
                (files) => files?.length == 1,
                "Selecione o arquivo da norma"
            ),
    })
    .transform((value) => {
        const parsed = parseInt(value.numero)
        return parsed
    })
