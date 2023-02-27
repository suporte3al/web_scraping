import styles from './main.module.css';

export const ComponentSkeleton = ({
  urlLink = '#',
  image = 'https://raw.githubusercontent.com/suporte3al/assets_AL/main/CAPACETE%20AL%202%202.png',
  price = '0.00',
  title = 'realize uma busca',
  loja = 'Atacado do Lojista' }) => {
  return (
    <>
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonTitle}>
          <h3>LOADING...</h3>
        </div>

        <ul>
          {Array(3)
            .fill()
            .map((item, index) => (
              <li key={index}>
                <div key={urlLink} className={styles.cards}>
                  <div className={styles.itemCard}>
                    <img src={image} alt="imagem do produto" />
                    <div className={styles.detals}>
                      <div className={styles.detalsItem}>
                        <h4>preço:</h4>
                        <div className={styles.description}>R$ {price}</div>
                      </div>
                      <div className={styles.detalsItem}>
                        <h4>titulo:</h4>
                        <div className={styles.description}>{title}</div>
                      </div>
                      <div className={styles.detalsItem}>
                        <h4>origem:</h4>
                        <a href={urlLink} target='_blank'><div className={styles.description}>{loja}</div></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}