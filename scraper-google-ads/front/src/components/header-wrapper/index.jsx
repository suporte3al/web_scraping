import styles from './main.module.css'
import { Header } from '../header'
import { SearchTop } from '../search-top'

export const HeaderWrapper = () => {
  return (
    <section className={styles.fixo}>
      <Header />
      <SearchTop />
    </section>
  )
}