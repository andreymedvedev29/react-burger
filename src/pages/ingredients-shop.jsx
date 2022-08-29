import { useEffect } from "react";
import styles from "./ingredients-shop.module.css";

import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import Modal from "../components/modal/Modal";
import OrderDetails from "../components/order-details/OrderDetails";
import IngredientDetails from "../components/ingredient-details/IngredientDetails";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import {
  SELECT_INGREDIENT,
  getIngredients,
} from "../services/actions/ingredients";
import { CLEAR_ORDER_NUMBER } from "../services/actions/order";

export function IngredientsShop() {
  const dispatch = useDispatch();
  
  const { ingredients, selectedIngredient } = useSelector(
    (store) => store.ingredients
  );
  const { orderNumber } = useSelector((store) => store.order);
  
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const closeAllModals = () => {
    dispatch({ type: CLEAR_ORDER_NUMBER });
    dispatch({ type: SELECT_INGREDIENT });
  };

  return (
    <div className={styles.App}>
      {orderNumber && (
        <Modal title="" onClose={closeAllModals}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
      {/*selectedIngredient && (
        <Modal title="Детали ингредиента" onClose={closeAllModals}>
          <IngredientDetails />
        </Modal>
      )*/}

      <section className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </section>
    </div>
  );
}

