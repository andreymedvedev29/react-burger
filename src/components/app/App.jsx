
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import styles from './App.module.css';
import {data} from '../../utils/data.js';

export default function App() {
  return (
    <>
      <AppHeader />
      <section className={ styles.App }>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </section>  
    </>
  )
}


