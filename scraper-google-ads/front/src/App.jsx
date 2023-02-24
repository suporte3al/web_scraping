import './App.css'
import { Price } from './pages/price'
import { Header } from './components/header'
import { SearchTop } from './components/search-top'
import { Description } from './pages/description'

export const App = () => {
  return (
    <>
      <Header />
      <SearchTop />
      {/*<Price />*/}
      <Description />
    </>
  )
}