import './App.css'
import { Price } from './pages/price'
import { Header } from './components/header'
import { SearchTop } from './components/search-top'

export const App = () => {
  return (
    <>
      <Header />
      <SearchTop />
      <Price />
    </>
  )
}