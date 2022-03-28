import { useState } from 'react';
import { CurrencyIcon, Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import BunOne from '../../images/bun-01.svg'
import BunTwo from '../../images/bun-02.svg'
import SauceTwo from '../../images/sauce-02.svg'
import SauceFour from '../../images/sauce-04.svg'
import SauceThree from '../../images/sauce-03.svg'
import SauceOne from '../../images/sauce-01.svg'

export default function BurgerIngredients () {
    const [current, setCurrent] = useState('one')
    return (
        <section className={ styles.BurgerIngredients }>
            <h1 className={ styles.Title }>Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
                </Tab>
            </div>
            <div className={ styles.Section }>
                <div>
                    <h2 className={ styles.SubTitle }>Булки</h2>
                    <div className={ styles.Container }>
                        <div className={ styles.Block }>
                            <div><Counter count={1} size="default" /></div>
                            <img className="ml-4 mr-4" src={ BunTwo } alt="Булка"/>
                            <div className={ styles.Price }><p className={ styles.PriceCoin }>20</p><CurrencyIcon type="primary" /></div>
                            <p className={ styles.Name }>Краторная булка N-200i</p>
                        </div>
                        <div className={ styles.Block }>
                            <img className="ml-4 mr-4" src={ BunOne } alt="Булка" />
                            <div className={ styles.Price }><p className={ styles.PriceCoin } >20</p><CurrencyIcon type="primary" /></div>
                            <p className={ styles.Name }>Флюоресцентная булка R2-D3</p>
                        </div>  
                    </div>
                </div>    
                <div>
                    <h2 className={ styles.SubTitle }>Соусы</h2>
                    <div className={ styles.Container }>
                        <div className={ styles.Block }>
                            <img className="ml-4 mr-4" src={ SauceTwo } alt="Соус"/>
                            <div className={ styles.Price }><p className={ styles.PriceCoin }>30</p><CurrencyIcon type="primary" /></div>
                            <p className={ styles.Name }>Соус Spicy-X</p>
                        </div>
                        <div className={ styles.Block }>
                            <img className="ml-4 mr-4" src={ SauceFour } alt="Соус"/>
                            <div className={ styles.Price }><p className={ styles.PriceCoin } >30</p><CurrencyIcon type="primary" /></div>
                            <p className={ styles.Name }>Соус фирменный Space Sauce</p>
                        </div>
                    </div>
                    <div className={ styles.Container }>
                        <div className={ styles.Block }>
                            <div><Counter count={1} size="default" /></div>
                            <img className="ml-4 mr-4" src={ SauceThree } alt="Соус" />
                            <div className={ styles.Price }><p className={ styles.PriceCoin }>30</p><CurrencyIcon type="primary" /></div>
                            <p className={ styles.Name }>Соус-X</p>
                        </div>
                        <div className={ styles.Block }>
                            <img className="ml-4 mr-4" src={ SauceOne } alt="Соус"/>
                            <div className={ styles.Price }><p className={ styles.PriceCoin } >30</p><CurrencyIcon type="primary" /></div>
                            <p className={ styles.Name }>Соус-X</p>
                        </div>      
                    </div>
                </div>  
            </div>
        </section>
    )
}










