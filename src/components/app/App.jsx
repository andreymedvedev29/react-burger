import {React, useState, useEffect} from 'react';
import styles from './App.module.css';

import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import OrderDetails from '../order-details/OrderDetails';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import baseUrl from '../../utils/data';



export default function App() {
  const [orderNumber, setOrderNumber] = useState(555);

  const [ingredients, setIngredients] = useState({ 
    isLoading: false,
    hasError: false,
    data: []
  });

  useEffect(() => {
  const getIngredients = async () => {
    setIngredients({ ...ingredients, hasError: false, isLoading: true })
    fetch(baseUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => 
      setIngredients({ 
        ...ingredients, 
        data: res.data, 
        isLoading: false,
        isLoading: false,
       })
      )
      .catch((e) => 
        setIngredients({ ...ingredients, hasError: true, isLoading: false })
      );
  };

    getIngredients();
  }, []);

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false); 
  const [ingredientDetailsOpened, setIngredientDetailsOpened] = useState(false);
  const [ingredientIdOpened, setIngredientIdOpened] = useState(12);

 
  const setIngredientOpened = (id) => {
    setIngredientDetailsOpened(true)
    setIngredientIdOpened(id)
  };
  
  const openTotalModal = () => {
    setIsOrderDetailsOpened(true);
  };

  
  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
    setIngredientDetailsOpened(false);
  };

  return (
    <div className={styles.App}>
      {isOrderDetailsOpened &&
        <Modal
          title=""
          onClose={closeAllModals}
        >
          <OrderDetails  orderNumber={orderNumber}/>
        </Modal>
      }
      {ingredientDetailsOpened && 
      <Modal
        title="Детали ингредиента"
        onClose={closeAllModals}
      >
        <IngredientDetails IngredientOpened={ingredients.data.find( el => el._id == ingredientIdOpened )}/>
      </Modal>
      }

      <AppHeader />
      <section className={styles.container}>
        <BurgerIngredients data={ingredients.data} setIngredientOpened={setIngredientOpened}/>
        <BurgerConstructor data={ingredients.data} openModal={openTotalModal}/>
      </section>
    </div>
  );
}


