const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
      <h1>O desafio 4 está resolvido!</h1>
      <p>Pessoas cadastradas: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      {idade >= 18 && <p>Você pode tirar sua carteira de motorista</p>}
    </div>
  )
}

export default UserDetails;