import Texto from '../components/texto'
import Menu from '../components/menu'
import { useState } from 'react'

// react hooks:
// useState, useEffect, useMemo

const teste = () => {

    var [totalContador, setTotalContador] = useState(0)

    function contador() {

        totalContador = totalContador + 1
        //console.log(totalContador)
        setTotalContador(totalContador)

    }

    var mensagem = "Olá mundo!"


    return (
        <div>

            <Menu />

            {mensagem}
            <br />
            <Texto titulo="Testando título">Texto aqui!!</Texto>
            <br />
            
            {totalContador}

            <br /><br />

            <input type="button" value="Conta" onClick={() => contador()} />
        </div>
    )    

}


export default teste