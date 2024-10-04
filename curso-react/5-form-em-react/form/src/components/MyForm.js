import styles from "./MyForm.css";
import {useState} from "react";

const MyForm = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    console.log(name);
    console.log(email);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Enviando o formulário");
      console.log(name, email);
    }

  return (
    <div>
      {/* envio de form */}
      {/* criacao de form */}
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite seu nome aqui" onChange={handleName}/>
        </div>
        {/* label envolvendo input */}
        <label>
            <span>Email:</span>
            {/* simplificacao de manipulacao se state */}
            <input type="text" name="email" placeholder="Digite seu email aqui" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
