import styles from './main.module.css'

export const SearchTop = () => {
  return (
    <>
      <div className={styles.searchTop}>
        <div className={styles.search}>
          <div className={styles.placeholder}>
            <h3>Digite o produto que deseja pesquisar</h3>
          </div>
          <div className={styles.icon}>
            <a href="#">
              <img src="src/assets/icons/search_icone.svg" alt="lupa" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}