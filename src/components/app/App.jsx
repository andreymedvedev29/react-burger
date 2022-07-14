import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import styles from './App.module.css';
import AppHeader from '../app-header/AppHeader';
import { LoginPage } from "../../pages/login";
import { RegistrationPage } from "../../pages/registration";
import { MainPage } from "../../pages/main";
import { ForgotPasswordPage } from "../../pages/forgot-password";
import { ResetPasswordPage } from "../../pages/reset-password";

import Modal from '../modal/Modal';
import OrderDetails from '../order-details/OrderDetails';
import IngredientDetails from '../ingredient-details/IngredientDetails';

import { useDispatch, useSelector } from 'react-redux';
import { SELECT_INGREDIENT, getIngredients } from '../../services/actions/ingredients';
import { CLEAR_ORDER_NUMBER } from '../../services/actions/order';


export default function App() {
  const dispatch = useDispatch();
  const { ingredients, selectedIngredient } = useSelector((store) => store.ingredients);
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
      <Routes>
       
          <Route path="/" exact={true}><MainPage /></Route>
          <Route path="/login" exact={true}><LoginPage /></Route>
          <Route path="/registration" exact={true}><RegistrationPage /></Route>
          <Route path="/forgot-password" exact={true}><ForgotPasswordPage /></Route>
          <Route path="/reset-password" exact={true}><ResetPasswordPage /></Route>
        
      </Routes>
    </div>
   
  );
}