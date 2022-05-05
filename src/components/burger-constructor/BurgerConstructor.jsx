import React from 'react';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import BunTwo from '../../images/bun-02.png'


//import data from '../../utils/data'

export default function BurgerConstructor({data}) {
  return (
    <div className='ml-10 mt-25'>
      <div >
          <div className='ml-6 mr-6 mb-4'>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={BunTwo}
            />
          </div>
          <ul className={styles.list}>
            {data.map( el =>{
              if (el.type == "bun"){
                return null
              }else {
                return (           
                <li className={styles.item + " mb-4"} key={el._id}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={el.name}
                    price={el.price}
                    thumbnail={el.image}
                  />
                </li>)
              }
            })}
          </ul>
          <div className='ml-6 mr-6 mt-4'>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={BunTwo}
            />
          </div>
      </div>
      <div className={styles.buttonCont +' mt-10'}>
        <p className="text text_type_main-large mr-2">
          {data.reduce( (total, current) => {
            return total + Number(current.price)
          },0)}
        </p>
        <div className='mr-10'>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}



