import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '../components/burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../components/burger-constructor/BurgerConstructor';

import styles from './main.module.css';

export function MainPage() {
    return (
      <section className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </section>
    )
}