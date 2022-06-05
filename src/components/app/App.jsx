import {React, useEffect} from 'react';
import styles from './App.module.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import OrderDetails from '../order-details/OrderDetails';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_INGREDIENT, getIngredients } from '../../services/actions/ingredients';
import { CLEAR_ORDER_NUMBER } from '../../services/actions/order';


export default function App() {
  const dispatch = useDispatch();
  const { selectedIngredient } = useSelector((store) => store.ingredients);
  const { orderNumber } = useSelector((store) => store.order);
  
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const closeAllModals = () => {
    dispatch({ type: CLEAR_ORDER_NUMBER });
    dispatch({ type: SELECT_INGREDIENT });
  }

  return (
    <div className={styles.App}>
      {orderNumber &&
        <Modal
          title=""
          onClose={closeAllModals}
        >
          <OrderDetails  orderNumber={orderNumber}/>
        </Modal>
      }
      {selectedIngredient && 
      <Modal
        title="Детали ингредиента"
        onClose={closeAllModals}
      >
        <IngredientDetails />
      </Modal>
      }

      <AppHeader />
      <section className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </section>
    </div>
  );
}