import React from 'react';
import { saveOrder } from '../../services/actions/order';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { ADD_INGREDIENT } from '../../services/actions/burger';
import BurgerConstructorIngredient from '../burger-constructor-ingredient/Burger-constructor-ingredient';
import { v4 as uuidv4 } from 'uuid'; 


export default function BurgerConstructor() {
  const dispatch = useDispatch(); 

  const { ingredients } = useSelector((store) => store.ingredients);
  const { burgerStructure } = useSelector((store) => store.burger);

  const handleOrderClick = () => {
    dispatch(saveOrder(burgerStructure.map((element) => {return element._id})));
  }

  const addIngredient = (id) => {
    const ingredient = ingredients.find((el) => el._id === id);
    dispatch({
      type: ADD_INGREDIENT,
      ingredient: { ...ingredient, uuid: uuidv4()}});
  };

  const [{ opacity }, target] = useDrop({
    accept: 'ingredient',
    drop(el) {
      addIngredient(el.id);
    },
    collect: (monitor) => ({
      opacity: monitor.isOver() ? 0.5 : 1,
    }),
  });

  return (
    <section  ref={target} style={{maxWidth: 570, opacity}} className={`${styles.section} + ml-10 mt-25`}>
        <div>
          <div className='ml-6 mr-6 mb-4'>
            {burgerStructure.length == 0 || burgerStructure[0]?.type !== 'bun' ?
              <p className={`${styles.bunText} + text text_type_main-default`}>
                Пожалуйста, перенесите сюда булку для создания заказа
              </p>
            :
              <ConstructorElement
              type="top"
              isLocked={true}
              text={burgerStructure[0].name + ' (верх)'}
              price={burgerStructure[0].price}
              thumbnail={burgerStructure[0].image}
              />
            }
            
          </div>

          <ul className={styles.list}>
            {burgerStructure.some((elem) => {return elem?.type !== 'bun' }) ? 
              burgerStructure
              .map( (el, i)=>{
                if (el.type == "bun"){
                  return null
                }else {
                  return ( 
                    <BurgerConstructorIngredient key={el.uuid} el={el} i={i} />
                  )
                }
              })
            :
              <p className="text text_type_main-default">
                Пожалуйста, перенесите ингредиенты для создания заказа
              </p> 
            }
          </ul>

          <div className='ml-6 mr-6 mb-4'>
            {burgerStructure.length == 0 || burgerStructure[0]?.type !== 'bun' ?
              <p className={`${styles.bunText} + text text_type_main-default`}>
              </p>
            :
              <ConstructorElement
              type="bottom"
              isLocked={true}
              text={burgerStructure[0].name + ' (низ)'}
              price={burgerStructure[0].price}
              thumbnail={burgerStructure[0].image}
              />
            }
            
          </div>
        </div>
      
        <div className={styles.buttonContainer +' mt-10'}>
          <p className="text text_type_main-large mr-2">
            {
            burgerStructure.length == 0  ? 0 : burgerStructure.reduce( (total, current) => {
              return total + Number(current.price)
            },burgerStructure[0].price)
            }
          </p>
          <div className='mr-10'>
            <CurrencyIcon type="primary" />
          </div>
          {burgerStructure.length !== 0 ?
            <Button type="primary" size="large" onClick={handleOrderClick}>
              Оформить заказ
            </Button>
            :
            <div className={styles.disableButton}>
              Оформить заказ
            </div>
          
          }
        </div>
      
    </section>
  );
}




