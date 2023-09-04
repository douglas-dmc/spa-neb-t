import { useForm } from "react-hook-form"
import { CadForm } from "./CadastroStyled"
import { zodResolver } from "@hookform/resolvers/zod"
import { cadastroSchema } from "../../schemas/cadastroSchema"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons"

export function Cadastro() {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        watch,
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
            status: "ativa",
        },
    })

    const navigate = useNavigate()

    const onSubmit = (cadastros) => {
        fetch("http://localhost:5000/cadastros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "multipart/form-data",
            },
            body: JSON.stringify(cadastros),
        })
            .then((result) => result.json())
            .then((data) => {
                console.log(data)
                navigate("/cadastro", {
                    state: {
                        message: "Norma cadastrada com sucesso!",
                        typeMessage: "success",
                    },
                })
            })
            .catch((error) => {
                console.log(error)
                navigate("/cadastro", {
                    state: {
                        message: "Norma não cadastrada!",
                        typeMessage: "error",
                    },
                })
            })

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

    const [edicao, setEdicao] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/edicao", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => result.json())
            .then((data) => {
                setEdicao(data)
            })
            .catch((error) => console.log(error))
    }, [])

    const capitalizeString = (string) => {
        string = string
            .toLowerCase()
            .split(" ")
            .map((word) => {
                if (
                    word == "de" ||
                    word == "da" ||
                    word == "do" ||
                    word == "mm" ||
                    word == "para" ||
                    word == "os" ||
                    word == "ou" ||
                    word == "e" ||
                    word == "a" ||
                    word == "o"
                ) {
                    return word.charAt(0).toLowerCase() + word.slice(1)
                } else {
                    return word.charAt(0).toUpperCase() + word.slice(1)
                }
            })

        return string.join(" ")
    }

    return (
        <CadForm>
            <fieldset>
                <div className="legenda">
                    <legend>
                        Cadastro de NEB/T - Parâmetros da Norma Técnica
                    </legend>
                </div>
                <form name="cadastros" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("titulo")}
                        type="text"
                        placeholder="Título"
                        onChange={(e) =>
                            setValue("titulo", capitalizeString(e.target.value))
                        }
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
                            Alterações
                        </option>
                        {edicao.map((option) => (
                            <option value={option.id} key={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>

                    <div className="status">
                        <input
                            type="radio"
                            value="ativa"
                            id="ativa"
                            defaultChecked
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
                        max="350"
                        placeholder="Número do BI"
                    />

                    <input
                        {...register("bi_data", { valueAsDate: true })}
                        type="date"
                        max={new Date().toISOString().split("T")[0]}
                    />

                    <input
                        {...register("be_numero", { valueAsNumber: true })}
                        type="number"
                        max="350"
                        placeholder="Número do BE"
                    />

                    <input
                        {...register("be_data", { valueAsDate: true })}
                        type="date"
                        max={new Date().toISOString().split("T")[0]}
                    />
                    {errors.bi_numero?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.bi_numero.message}
                        </span>
                    )}
                    <div className="uploaderFile">
                        <input
                            {...register("arquivo")}
                            id="uploader"
                            type="file"
                            accept=".pdf"
                        />
                        <label htmlFor="uploader">Upload da norma</label>
                        <input
                            type="text"
                            defaultValue={
                                watch("arquivo") && watch("arquivo[0].name")
                            }
                            readOnly
                        />
                    </div>
                    {errors.arquivo?.message && (
                        <span>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            {errors.arquivo.message}
                        </span>
                    )}
                    <div className="grupo_btn">
                        <button
                            type="reset"
                            onClick={() => {
                                reset({ arquivo: "" })
                            }}
                        >
                            <i className="bi bi-trash-fill"></i>Limpar
                        </button>
                        <button type="submit">
                            <FontAwesomeIcon
                                className="btn_submit"
                                icon={faFloppyDisk}
                            />
                            Cadastrar
                        </button>
                    </div>
                </form>
            </fieldset>
        </CadForm>
    )
}
