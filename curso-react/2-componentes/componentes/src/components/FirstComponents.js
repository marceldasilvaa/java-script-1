import MyComponent from "./MyComponent.js";

//components
const FirstComponent = () => {
    
    // essa função faz isso
    return (
        <div>
            {/*Algum comentário*/}
            <h1>Meu primeiro componente</h1>
            <div className="teste" >Meu texto</div>
            <MyComponent />
        </div>
    );
}

export default FirstComponent;