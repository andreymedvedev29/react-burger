import { Logo, BurgerIcon, ListIcon,  ProfileIcon, Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css'

export default function AppHeader () {
    return (
      <div className={ styles.AppHeader }>
        <div className={ styles.BurgerIcon }><BurgerIcon type="primary" /><p className="ml-2 mr-2 mb-2 mt-2"> Конструктор</p></div>
        <div className={ styles.ListIcon }><ListIcon type="secondary" /><p className="ml-2 mr-2 mb-2 mt-2"> Лента заказов</p></div>
        <div className={ styles.Logo } ><Logo  /></div>
        <div className={ styles.ProfileIcon } ><ProfileIcon type="secondary" /><p className="ml-2 mr-2 mb-2 mt-2"> Личный кабинет</p></div>
      </div>
    )
}