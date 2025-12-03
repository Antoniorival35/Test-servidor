import "./MyForm.css";

const MyForm = () => {
    return (
        <div>
            {/*1 - criação de form */}
            <form>
                <div>
                    <label htmlfor="name">Nome:</label>
                    <imput type="text" name="Name" placeholder="Digite o seu nome" />
                </div>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
};
export default MyForm;