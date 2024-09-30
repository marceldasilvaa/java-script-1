import styles from "./CarStyles.module.css";

const ShowCarDetails = ({brand, model, newCar}) => {
  return (
    <div>
      <h3 className={styles.tituloSecundario}>Exibindo todos nossos carros à venda</h3>
      <p className={styles.detalhes}>Temos um carro da marca: {brand}</p>
      <p className={styles.detalhes}>Com seu respectivo modelo: {model}.</p>
      {newCar && <p className={styles.new}>Este carro é novo!</p>}
    </div>
  )
}

export default ShowCarDetails;