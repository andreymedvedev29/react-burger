import {React, useState, useEffect} from 'react';
import styles from './App.module.css';

import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import baseUrl from '../../utils/data';

export default function App() {

  const [ingridients, setIngridients] = useState({ 
    isLoading: false,
    hasError: false,
    data: []
  });

  useEffect(() => {
  const getIngridients = async() => {
    setIngridients({ ...ingridients, hasError: false, isLoading: true })
    fetch(baseUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => 
      setIngridients({ 
        ...ingridients, 
        data: res.data, 
        isLoading: false,
        isLoading: false,
       })
      )
      .catch((e) => 
        setIngridients({ ...ingridients, hasError: true, isLoading: false })
      );
  };

    getIngridients();
  }, []);

  return (
    <>
      <AppHeader />
      <main className={ styles.App }>
        <BurgerIngredients data={ingridients.data}/>
        <BurgerConstructor data={ingridients.data}/>
      </main>  
    </>
  )
}


