const Logiin = ({usuario, contrasena}) => {
    return(
        <form>
            <img src="public/user.png" alt="User" />
            <input value={usuario} type="text" />
            <input value={contrasena} type="text" />
            <input type="button" value="Iniciar Sesión" />
        </form>
    )
}
export default Logiin