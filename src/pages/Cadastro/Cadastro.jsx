import { useForm } from "react-hook-form"
import { CadForm } from "./CadastroStyled"
import { zodResolver } from "@hookform/resolvers/zod"
import { cadastroSchema } from "../../schemas/cadastroSchema"

export function Cadastro() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(cadastroSchema),
        defaultValues: {
            titulo: "",
            objetivo: "",
            tipo: "",
            numero: "",
            edicao: "",
            arquivo: "",
            bi_aprov: "",
            data_aprov: "",
            be_homol: "",
            data_be: "",
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
            <fieldset>
                <legend>
                    Cadastro de NEB/T
                </legend>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("titulo")}
                        type="text"
                        placeholder="Título da norma"
                    />
                    {errors.titulo?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.titulo.message}
                        </span>
                    )}

                    <textarea
                        {...register("objetivo")}
                        rows="3"
                        placeholder="Objetivo da norma"
                    ></textarea>
                    {errors.objetivo?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.objetivo.message}
                        </span>
                    )}

                    <div>
                        <select {...register("tipo")}>
                            <option value="" hidden>
                                Tipo de norma
                            </option>
                            <option value="E">Especificação</option>
                            <option value="M">Método de Ensaio</option>
                            <option value="Pr">Procedimento</option>
                            <option value="Pd">Padronização</option>
                            <option value="C">Classificação</option>
                            <option value="S">Simbologia</option>
                            <option value="T">Terminologia</option>
                        </select>

                        <input
                            {...register("numero", {
                                setValueAs: (value) => parseInt(value, 10),
                            })}
                            type="number"
                            placeholder="Número da norma"
                        />

                        <select {...register("edicao")}>
                            <option value="" hidden>
                                Revisão e modificação
                            </option>
                            <option value="A">A</option>
                            <option value="A M1">A M1</option>
                            <option value="A M2">A M2</option>
                            <option value="A M3">A M3</option>
                            <option value="B">B</option>
                            <option value="B M1">B M1</option>
                            <option value="B M2">B M2</option>
                            <option value="B M3">B M3</option>
                            <option value="C">C</option>
                            <option value="C M1">C M1</option>
                            <option value="C M2">C M2</option>
                            <option value="C M3">C M3</option>
                        </select>
                    </div>
                    {errors.tipo?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.tipo.message}
                        </span>
                    )}

                    {errors.numero?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.numero.message}
                        </span>
                    )}

                    <div>
                        <input
                            {...register("bi_aprov")}
                            type="text"
                            placeholder="BI de aprovação"
                        />

                        <input
                            {...register("data_aprov")}
                            type="date"
                            placeholder="Data de aprovação"
                        />

                        <input
                            {...register("be_homol")}
                            type="text"
                            placeholder="BE de homologação"
                        />

                        <input
                            {...register("data_homol")}
                            type="date"
                            placeholder="Data de homologação"
                        />
                    </div>

                    <input {...register("arquivo")} type="file" accept=".pdf" />
                    {errors.arquivo?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.arquivo.message}
                        </span>
                    )}

                    <aside>
                        <button type="reset">
                            <i className="bi bi-trash-fill"></i>Limpar
                        </button>
                        <button type="submit">
                            <i className="bi bi-save-fill"></i>Cadastrar
                        </button>
                    </aside>
                </form>
            </fieldset>
        </CadForm>
    )
}
