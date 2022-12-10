import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from 'decorators/ProtectedRoute';
import Home from 'views/Home';
import Login from 'views/Login';
import CreateAccount from 'views/CreateAccount';
import Recipes from 'views/Recipes';
import Recipe from 'views/Recipe';
import CreateRecipe from 'views/CreateRecipe';
import MealPlanner from 'views/MealPlanner';
import UserAccount from 'views/UserAccount';
import NotFound from 'views/NotFound';
import GroceryList from 'views/GroceryList';
import ResetPassword from 'views/ResetPassword';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="recipes" element={<ProtectedRoute><Recipes /></ProtectedRoute>} />
            <Route path="recipes/:slug" element={<ProtectedRoute><Recipe /></ProtectedRoute>} />
            <Route path="add-recipe" element={<ProtectedRoute><CreateRecipe /></ProtectedRoute>} />
            <Route path="meal-planner" element={<ProtectedRoute><MealPlanner /></ProtectedRoute>} />
            <Route path="account" element={<ProtectedRoute><UserAccount /></ProtectedRoute>} />
            <Route path="grocery-list" element={<ProtectedRoute><GroceryList /> </ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;
