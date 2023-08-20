import { z } from "zod"

export const cadastroSchema = z.object({
    titulo: z
        .string()
        .nonempty({ message: "Digite o título da norma" })
        .min(3, { message: "O título não pode ser tão curto" }),
    objetivo: z
        .string()
        .nonempty({ message: "Digite o objetivo da norma" })
        .min(10, { message: "O objetivo deve ter mais de 10 caracteres" }),
    tipo: z.string().nonempty({ message: "Selecione o tipo da norma" }),
    numero: z
        .number({
            errorMap: () => {
                return { message: "Digite o número da norma" }
            },
        })
        .positive({ message: "O número da norma deve ser maior que zero" }),
    arquivo: z
        .any()
        .refine((files) => files?.length == 1, "Selecione o arquivo da norma")
        .refine(
            (files) => files?.[0]?.type == "application/pdf",
            "O arquivo deve estar no formato pdf"
        )
        .refine(
            (files) => files?.[0]?.size <= 6000000,
            "O arquivo deve ter no máximo 6 MB"
        ),
    bi_aprov: z
        .string()
        .nonempty({ message: "Digite o BI de aprovação da norma" }),
    homol: z
        .string()
        .nonempty({ message: "Digite o BE de homologação da norma" }),
})
