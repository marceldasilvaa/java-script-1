const TemplateExpressions = () => {

    const name = "Marcel";
    const data = {
        age: 19,
        job: "programmer"
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem com você?</h1>
            <p>Você trabalha como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
}

export default TemplateExpressions;