const CarDetails = ({brand, km, cor, newCar}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <p>Marca: {brand}</p>  
      <p>KM: {km}</p>
      <p>Cor: {cor}</p>
      {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails;