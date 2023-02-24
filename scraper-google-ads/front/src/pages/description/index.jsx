import styles from './main.module.css'

export const Description = () => {
  return (
    <>
      <main className={styles.searchScraping}>
        <div><h1 className={styles.titleDescri}>Resultado da Pesquisa</h1></div>
        <div className={styles.containerCardDes}>
          <div className={styles.cards}>
            <div className={styles.itemCard}>
              <img src="" alt="imagem do produto" />
              <div className={styles.detals}>
                <div className={styles.detalsItem}>
                  <h4>preço:</h4>
                  <div className={styles.description}></div>
                </div>
                <div className={styles.detalsItem}>
                  <h4>titulo:</h4>
                  <div className={styles.description}></div>
                </div>
                <div className={styles.detalsItem}>
                  <h4>origem:</h4>
                  <div className={styles.description}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}