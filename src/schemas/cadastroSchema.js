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
    edicao: z.string(),
    bi_numero: z
        .number({
            errorMap: () => {
                return { message: "Digite o número do BI" }
            },
        })
        .positive({ message: "O número do BI deve ser maior que zero" })
        .lte(999, { message: "O número do BI deve ser menor que 999" }),
    be_numero: z
        .number({
            errorMap: () => {
                return { message: "Digite o número do BE" }
            },
        })
        .positive({ message: "O número do BE deve ser maior que zero" })
        .lte(999, { message: "O número do BE deve ser menor que 999" }),
    bi_data: z.date(),
    be_data: z.date(),
    status: z.string(),
    arquivo: z
        .instanceof(FileList)
        .refine((files) => files?.length > 0, {
            message: "Selecione o arquivo da norma",
        })
        .transform((list) => list.item(0))
        .refine((files) => files.type == "application/pdf", {
            message: "O arquivo deve estar no formato pdf",
        })
        .refine((files) => files.size <= 6 * 1024 * 1024, {
            message: "O arquivo deve ter no máximo 6 MB",
        }),
})
