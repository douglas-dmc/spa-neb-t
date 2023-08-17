import { useForm } from "react-hook-form"
import { CadForm } from "./CadastroStyled"

export function Cadastro() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("exemplo"))

    return (
        <CadForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Digite o título da norma"
                    {...register("titulo", { required: true })}
                />
                {errors.titulo && <span>Digite o título da norma</span>}

                <textarea
                    rows="3"
                    placeholder="Digite o objetivo da norma"
                    {...register("objetivo", { required: true })}
                ></textarea>
                {errors.objetivo && <span>Descreva o objetivo da norma</span>}

                <select {...register("tipo")}>
                    <option value="" selected>
                        Selecione o tipo de norma
                    </option>
                    <option value="especificação">especificação</option>
                    <option value="método de ensaio">método de ensaio</option>
                    <option value="procedimento">procedimento</option>
                    <option value="padronização">padronização</option>
                    <option value="classificação">classificação</option>
                </select>

                {errors.tipo && <span>Digite o tipo da norma</span>}

                <div>
                    <input
                        type="number"
                        placeholder="Digite o número da norma"
                        {...register("numero", { required: true })}
                    />

                    <input
                        type="text"
                        placeholder="Digite a edição da norma"
                        {...register("numero")}
                    />
                </div>
                {errors.numero && <span>Digite o número da norma</span>}

                <input
                    type="file"
                    accept=".pdf"
                    placeholder="Selecione o arquivo da norma"
                    {...register("arquivo", { required: true })}
                />
                {errors.arquivo && <span>Selecione o arquivo da norma</span>}

                <div>
                    <button type="reset" >Limpar</button>
                    <button type="submit" >Cadastrar</button>
                </div>
            </form>
        </CadForm>
    )
}