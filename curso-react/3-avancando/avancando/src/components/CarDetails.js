const CarDetails = ({brand, km, cor}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <p>Marca: {brand}</p>  
      <p>KM: {km}</p>
      <p>Cor: {cor}</p>
    </div>
  )
}

export default CarDetails;