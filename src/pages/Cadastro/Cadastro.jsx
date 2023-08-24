import { useForm } from "react-hook-form"
import { CadForm } from "./CadastroStyled"
import { zodResolver } from "@hookform/resolvers/zod"
import { cadastroSchema } from "../../schemas/cadastroSchema"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Cadastro() {
    const {
        register,
        handleSubmit,
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
            arquivo: {},
            bi_numero: "",
            bi_data: "",
            be_numero: "",
            be_data: "",
        },
    })

    const navigate = useNavigate()

    const onSubmit = (cadastros) => {

        fetch("http://localhost:5000/cadastros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cadastros),
        })
            .then((result) => result.json())
            .then((data) => {
                console.log(data)
                navigate("/cadastro", {state:
                    {message: "Norma cadastrada com sucesso!"},
                })
            })
            .catch((error) => console.log(error))

        reset()
    }

    //console.log(watch())

    const [tipo, setTipo] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/tipos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => result.json())
            .then((data) => {
                setTipo(data)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <CadForm>
            <fieldset>
                <legend>Cadastro de NEB/T</legend>
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
                            {tipo.map((option) => (
                                <option value={option.id} key={option.id}>
                                    {option.name}
                                </option>
                            ))}
                        </select>

                        <input
                            {...register("numero", {
                                valueAsNumber: true,
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
                            {...register("bi_numero")}
                            type="text"
                            placeholder="BI de aprovação"
                        />

                        <input
                            {...register("bi_data", { valueAsDate: true })}
                            type="date"
                        />

                        <input
                            {...register("be_numero")}
                            type="text"
                            placeholder="BE de homologação"
                        />

                        <input
                            {...register("be_data", { valueAsDate: true })}
                            type="date"
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
