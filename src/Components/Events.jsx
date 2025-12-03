import "./Events.css";
const Events = () => {
    const hundleClick = () => {
        console.log("Executou click")
    }
    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>
                    Click aqui
                </button>
            </div>
            <div>
        <button onClick={hundleClick}> Novo Clique</button>
        </div>
    </div>
    );
};
export default Events;