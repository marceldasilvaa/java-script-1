import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["Marcel", "Matheus", "Pedro"]);

    const [users, setUsers] = useState([
        {id: 1, nome: "Marcel", idade: 19},
        {id: 2, nome: "Matheus", idade: 28},
        {id: 3, nome: "Pedro", idade: 38}
    ]);
    
    const deleteRandom = () => {
        const randomUser = Math.floor(Math.random() * 4);

        setUsers((prevUser) => {
            return prevUser.filter((user) => randomUser !== user.id);
        });
    }

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
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;
