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
            arquivo: "",
            bi_numero: "",
            bi_data: "",
            be_numero: "",
            be_data: "",
            status: "ativa",
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
                navigate("/cadastro", {
                    state: {
                        message: "Norma cadastrada com sucesso!",
                    },
                })
            })
            .catch((error) => console.log(error))

        reset()
    }

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
                <div className="legenda">
                    <legend>
                        Cadastro de NEB/T - Parâmetros da Norma Técnica
                    </legend>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("titulo")}
                        type="text"
                        placeholder="Título"
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
                        placeholder="Objetivo"
                    ></textarea>
                    {errors.objetivo?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.objetivo.message}
                        </span>
                    )}

                    <select {...register("tipo")} required>
                        <option value="" hidden>
                            Tipo
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
                        placeholder="Número"
                    />

                    <select {...register("edicao")} required>
                        <option value="" hidden>
                            Revisões
                        </option>
                        <option value="NR">Não revisada</option>
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

                    <div className="status">
                        <input
                            type="radio"
                            value="ativa"
                            id="ativa"
                            {...register("status")}
                        />
                        <label htmlFor="ativa">ativa</label>

                        <input
                            type="radio"
                            value="cancelada"
                            id="cancelada"
                            {...register("status")}
                        />
                        <label htmlFor="cancelada">cancelada</label>
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

                    <input
                        {...register("bi_numero", { valueAsNumber: true })}
                        type="number"
                        placeholder="Número do BI"
                    />

                    <input
                        {...register("bi_data", { valueAsDate: true })}
                        type="date"
                    />

                    <input
                        {...register("be_numero", { valueAsNumber: true })}
                        type="number"
                        placeholder="Número do BE"
                    />

                    <input
                        {...register("be_data", { valueAsDate: true })}
                        type="date"
                    />
                    {errors.bi_numero?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.bi_numero.message}
                        </span>
                    )}

                    <input
                        {...register("arquivo")}
                        type="file"
                        accept=".pdf"
                    />
                    {errors.arquivo?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.arquivo.message}
                        </span>
                    )}

                    <button type="reset">
                        <i className="bi bi-trash-fill"></i>Limpar
                    </button>
                    <button type="submit">
                        <i className="bi bi-save-fill"></i>Cadastrar
                    </button>
                </form>
            </fieldset>
        </CadForm>
    )
}
