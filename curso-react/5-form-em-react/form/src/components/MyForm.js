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

  return (
    <div>
      {/* criacao de form */}
      <form>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite seu nome aqui" onChange={handleName}/>
        </div>
        {/* label envolvendo input */}
        <label>
            <span>Email:</span>
            <input type="text" name="email" placeholder="Digite seu email aqui" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
