import {React, useState, useEffect} from 'react';
import styles from './App.module.css';

import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import baseUrl from '../../utils/data';



export default function App() {

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

  return (
    <>
      <AppHeader />
      <main className={ styles.App }>
        <BurgerIngredients data={ingredients.data}/>
        <BurgerConstructor data={ingredients.data}/>
      </main>  
    </>
  )
}


