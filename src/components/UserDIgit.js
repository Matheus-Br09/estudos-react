import { useState } from "react";

function UserDigit({onEnviarDados}){
    const [texto, setTexto] = useState();

    const handleEnviar = () => {
        onEnviarDados(texto)
    }

    return(
        <div>
            <input type="text" value={texto}
            placeholder="Digite seu nome" onChange={handleEnviar}/>
        </div>
    )
}

export default UserDigit;