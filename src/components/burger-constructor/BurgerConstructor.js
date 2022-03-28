import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import BunTwo from '../../images/bun-02.svg'
import SauceOne from '../../images/sauce-01.svg'


export default function BurgerConstructor () {
    return (
        <div className={ styles.BurgerConstructor }>   
              <div style={{ marginLeft: '55px',marginBottom: '10px' }}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={BunTwo}
                 />
                 </div>           
            <div className={ styles.Burger } style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className={ styles.Element }>
                    <div className='m-3'><DragIcon type="primary" /></div>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={SauceOne}
                    />
                </div>
                <div className={ styles.Element }>
                    <div className='m-3'><DragIcon type="primary" /></div>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={SauceOne}
                    />
                </div>
                <div className={ styles.Element }>
                    <div className='m-3'><DragIcon type="primary" /></div>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={SauceOne}
                    />
                </div>
                <div className={ styles.Element }>
                    <div className='m-3'><DragIcon type="primary" /></div>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={SauceOne}
                    />
                </div>
                <div className={ styles.Element }>
                    <div className='m-3'><DragIcon type="primary" /></div>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={SauceOne}
                    />
                </div>
                <div className={ styles.Element }>
                    <div className='m-3'><DragIcon type="primary" /></div>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={SauceOne}
                    />
                </div>
                <div className={ styles.Element }>
                    <div className='m-3'><DragIcon type="primary" /></div>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={SauceOne}
                    />
                </div>
            </div>
            <div style={{ marginLeft: '55px',marginTop: '10px' }}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={BunTwo}
                />
            </div>
            <div className={ styles.Button }>
                <div className={ styles.PriceIcon }><p className={ styles.Price }>610</p><CurrencyIcon type="primary" /></div>   
                <div className={ styles.ButtonIcon }><Button type="primary" size="medium">Нажми на меня</Button></div>
            </div> 
        </div> 
          
    )
}