import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'
import { HeaderWrapper } from './components/header-wrapper'

export const App = () => {
  const [data, setData] = useState([])
  const productToSearch = ['Cabo Flexivel-2,5mm-750V-Vermelho-100-Metros-Sil', 'Bomba-Periferica-1/2Cv-(220V)-Ecobomba', 'Fechadura Alavanca Wc Premium 2800/71 Ip Aliança']


  const getList = async (query) => {
    const { data: result } = await axios.get(`http://localhost:2222/price/?name=${query}`)
    setData(result)
  }

  useEffect(() => { }, [data])
  return (
    <>
      <HeaderWrapper />
      <div className="tags">
        <ul className="name-product">
          <li><button className="menu-item" onClick={() => getList(productToSearch[0])}>cabos</button></li>
          <li><a className="menu-item" href="#">telas</a></li>
          <li><a className="menu-item" href="#">arame</a></li>
          <li><a className="menu-item" href="#">ducha</a></li>
          <li><button className="menu-item" onClick={() => getList(productToSearch[2])}>trena</button></li>
          <li><a className="menu-item" href="#">discos</a></li>
          <li><button className="menu-item" onClick={() => getList(productToSearch[1])}>bombas</button></li>
          <li><a className="menu-item" href="#">eletrodo</a></li>
          <li><a className="menu-item" href="#">torneiras</a></li>
        </ul>
      </div>
      <div className="precos">
        {data?.listWithAL ? (
          <div className="nosso-preco">
            <div className="preco">
              <ul className="preco-item">
                <li>preço:
                  <div className="description2">{data.listWithAL[0]?.price}</div>
                </li>
              </ul>
            </div>
            <div className="preco">
              <ul className="preco-item">
                <li>titulo:</li>
                <div className="description2">{data.listWithAL[0]?.title}</div>
              </ul>
            </div>
            <div className="preco">
              <ul className="preco-item">
                <li>origem:</li>
                <a href={data.listWithAL[0]?.urlLink} target='_blank'><div className="description2">{data.listWithAL[0]?.loja}</div></a>
              </ul>
            </div>
          </div>
        )
          : null
        }
      </div>
      <main className="search-scraping">
        <div>
          <h1 className="title">preços:</h1>
        </div>
        <div className="container-card">
          {data.fullList ? (
            <>
              {data.fullList.map(card => {
                return (
                  <div key={card.urlLink} className="cards">
                    <div className="item-card">
                      <img src={card.image} alt="imagem do produto" />
                      <div className="detals">
                        <div className="detals-item">
                          <h4>preço:</h4>
                          <div className="description">{card.price}</div>
                        </div>
                        <div className="detals-item">
                          <h4>titulo:</h4>
                          <div className="description">{card.title}</div>
                        </div>
                        <div className="detals-item">
                          <h4>origem:</h4>
                          <a href={card.urlLink} target='_blank'><div className="description">{card.loja}</div></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </>
          ) : (
            <div className="cards">
              <div className="item-card">
                <img alt="imagem do produto" />
                <div className="detals">
                  <div className="detals-item">
                    <h4>preço:</h4>
                    <div className="description"></div>
                  </div>
                  <div className="detals-item">
                    <h4>titulo:</h4>
                    <div className="description"></div>
                  </div>
                  <div className="detals-item">
                    <h4>origem:</h4>
                    <div className="description"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}