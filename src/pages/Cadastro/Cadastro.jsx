import { useForm } from "react-hook-form"
import { CadForm } from "./CadastroStyled"
import { zodResolver } from "@hookform/resolvers/zod"
import {cadastroSchema} from "../../schemas/cadastroSchema"

export function Cadastro() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        mode: "all",
        resolver: zodResolver(cadastroSchema),
        defaultValues: {
            titulo: "",
            objetivo: "",
            tipo: "",
            numero: "",
            edicao: "",
            arquivo: "",
        },
    })

    console.log("errors", errors)

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    console.log(watch())

    return (
        <CadForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Digite o título da norma"
                    {...register("titulo")}
                />
                {errors.titulo?.message && <span>{errors.titulo.message}</span>}

                <textarea
                    rows="3"
                    placeholder="Digite o objetivo da norma"
                    {...register("objetivo")}
                ></textarea>
                {errors.objetivo?.message && (
                    <span>{errors.objetivo.message}</span>
                )}

                <select {...register("tipo")}>
                    <option value="">Seleciona o tipo de norma</option>
                    <option value="especificação">Especificação</option>
                    <option value="método de ensaio">Método de Ensaio</option>
                    <option value="procedimento">Procedimento</option>
                    <option value="padronização">Padronização</option>
                    <option value="classificação">Classificação</option>
                    <option value="simbologia">Simbologia</option>
                </select>

                {errors.tipo?.message && <span>{errors.tipo.message}</span>}

                <div>
                    <input
                        type="number"
                        placeholder="Digite o número da norma"
                        {...register("numero")}
                    />

                    <input
                        type="text"
                        placeholder="Digite a edição da norma"
                        {...register("edicao")}
                    />
                </div>
                {errors.numero?.message && <span>{errors.numero.message}</span>}

                <input
                    type="file"
                    accept=".pdf"
                    placeholder="Selecione o arquivo da norma"
                    {...register("arquivo")}
                />
                {errors.arquivo?.message && (
                    <span>{errors.arquivo.message}</span>
                )}

                <div>
                    <button type="reset">Limpar</button>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </CadForm>
    )
}
