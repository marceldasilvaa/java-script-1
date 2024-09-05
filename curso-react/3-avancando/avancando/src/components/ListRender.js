import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["Marcel", "Matheus", "Pedro"]);

    const [users] = useState([
        {id: 532764673, nome: "Marcel", idade: 19},
        {id: 394854403, nome: "Matheus", idade: 28},
        {id: 389482893, nome: "Pedro", idade: 38}
    ]);

    return (
        <div>
            <ul>
                {list.map((item, indice) => (
                    <li key={indice}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.nome} - {user.idade}</li>
                ))};
            </ul>
        </div>
    )
}

export default ListRender
