import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './main.module.css'

export const Price = () => {
    const [data, setData] = useState([])
    const productToSearch = ['Cabo Flexivel-2,5mm-750V-Vermelho-100-Metros-Sil', 'Bomba-Periferica-1/2Cv-(220V)-Ecobomba', 'Fechadura Alavanca Wc Premium 2800/71 Ip Aliança']


    const getList = async (query) => {
        const { data: result } = await axios.get(`http://localhost:2222/price/?name=${query}`)
        setData(result)
    }

    useEffect(() => { }, [data])
    return (
        <>
            <div className={styles.tags}>
                <ul className={styles.nameProduct}>
                    <li><button className={styles.menuItem} onClick={() => getList(productToSearch[0])}>cabos</button></li>
                    <li><button className={styles.menuItem} onClick={() => getList(productToSearch[1])}>arame</button></li>
                    <li><button className={styles.menuItem} onClick={() => getList(productToSearch[2])}>ducha</button></li>
                    <li><button className={styles.menuItem} onClick={() => getList(productToSearch[3])}>trena</button></li>
                    <li><button className={styles.menuItem} onClick={() => getList(productToSearch[4])}>discos</button></li>
                    <li><button className={styles.menuItem} onClick={() => getList(productToSearch[5])}>bombas</button></li>
                    <li><button className={styles.menuItem} onClick={() => getList(productToSearch[6])}>eletrodo</button></li>
                </ul>
            </div>
            <div className={styles.precos}>
                {data?.listWithAL ? (
                    <div className={styles.nossoPreco}>
                        <div className={styles.preco}>
                            <ul className={styles.precoItem}>
                                <li className={styles.item}><span>preço: </span><span className={styles.itemPreco}>{data.listWithAL[0]?.price}</span></li>
                                <li className={styles.item}><span>titulo: </span><span className={styles.itemPreco}>{data.listWithAL[0]?.title}</span></li>
                                <li className={styles.item}><span>origem: </span><span className={styles.itemPreco}>{data.listWithAL[0]?.loja}</span></li>
                            </ul>
                        </div>
                    </div>
                )
                    : null
                }
            </div>
            <main className={styles.searchScraping}>
                <div>
                    <h1 className={styles.title}>Resultado da Pesquisa</h1>
                </div>
                <div className={styles.containerCard}>
                    {data.fullList ? (
                        <>
                            {data.fullList.map(card => {
                                return (
                                    <div key={card.urlLink} className={styles.cards}>
                                        <div className={styles.itemCard}>
                                            <img src={card.image} alt="imagem do produto" />
                                            <div className={styles.detals}>
                                                <div className={styles.detalsItem}>
                                                    <h4>preço:</h4>
                                                    <div className={styles.description}>{card.price}</div>
                                                </div>
                                                <div className={styles.detalsItem}>
                                                    <h4>titulo:</h4>
                                                    <div className={styles.description}>{card.title}</div>
                                                </div>
                                                <div className={styles.detalsItem}>
                                                    <h4>origem:</h4>
                                                    <a href={card.urlLink} target='_blank'><div className={styles.description}>{card.loja}</div></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </>
                    ) : (
                        <div className={styles.cards}>
                            <div className={styles.itemCard}>
                                <img alt="imagem do produto" />
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
                    )}
                </div>
            </main>
        </>
    )
}