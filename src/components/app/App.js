
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import styles from './App.module.css';

export default function App() {
  return (
    <>
      <AppHeader />
      <div className={ styles.App }>
        <BurgerIngredients />
         
      </div>
      
    </>
  )
}


