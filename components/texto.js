

const contador = (props) => {

    var titulo = props.titulo
    var texto = props.children

    return (
        <div>
            <b>{titulo}</b>
            <br /><br />
            {texto}
        </div>
    )


}


export default contador