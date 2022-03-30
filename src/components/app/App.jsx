import React from 'react'
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import styles from './App.module.css';


export default function App() {
  return (
    <>
      <AppHeader />
      <section className={ styles.App }>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>  
    </>
  )
}


