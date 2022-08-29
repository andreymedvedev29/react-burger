import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import AppHeader from "./components/app-header/AppHeader";
import { IngredientsShop } from "./pages/ingredients-shop";
import { LoginPage } from "./pages/login";
import { RegistrationPage } from "./pages/registration.jsx";
import { ForgotPasswordPage } from "./pages/forgot-password.jsx";
import { ResetPasswordPage } from "./pages/reset-password.jsx";
import { ProfilePage } from "./pages/profile.jsx";
import { NotFound404 } from "./pages/not-found.jsx";
import { ProtectedRoute } from "./components/protectedRoute";
import { IngredientPage } from "./pages/ingredient-page";

import { useDispatch, useSelector } from "react-redux";
import IngredientDetails from "./components/ingredient-details/IngredientDetails";
import Modal from "./components/modal/Modal";
import { SELECT_INGREDIENT } from "./services/actions/ingredients";
import { CLEAR_ORDER_NUMBER } from "./services/actions/order";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [visitForgotPass, setVisitForgotPass] = useState(false);
  const { ingredients, selectedIngredient } = useSelector(
    (store) => store.ingredients
  );

  const closeAllModals = () => {
    dispatch({ type: CLEAR_ORDER_NUMBER });
    dispatch({ type: SELECT_INGREDIENT });
    navigate(-1);
  };

  const location = useLocation();
  const background = location.state?.background;
  return (
    <>
      <AppHeader />
      <Routes location={background ?? location}>
        <Route path="/" element={<IngredientsShop />}></Route>
        {background && (
          <>
            <Route
              path="/ingredients/:id"
              element={
                <>
                  <IngredientsShop />
                  <Modal title="Детали ингредиента" onClose={closeAllModals}>
                    <IngredientDetails />
                  </Modal>
                </>
              }
            ></Route>
          </>
        )}
        <Route
          path="/login"
          element={
            <ProtectedRoute anonymous={true}>
              <LoginPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <ProtectedRoute anonymous={true}>
              <RegistrationPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={
            <ProtectedRoute anonymous={true}>
              <ForgotPasswordPage setVisitForgotPass={setVisitForgotPass} />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute anonymous={true}>
              <ResetPasswordPage visitForgotPass={visitForgotPass} />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute anonymous={false}>
              <ProfilePage />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/ingredients/:id" element={<IngredientPage />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </>
  );
}