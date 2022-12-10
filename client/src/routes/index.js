import ProtectedRoute from 'decorators/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from 'views/CreateAccount';
import CreateRecipe from 'views/CreateRecipe';
import GroceryList from 'views/GroceryList';
import Home from 'views/Home';
import Login from 'views/Login';
import MealPlanner from 'views/MealPlanner';
import NotFound from 'views/NotFound';
import Recipe from 'views/Recipe';
import Recipes from 'views/Recipes';
import ResetPassword from 'views/ResetPassword';
import UserAccount from 'views/UserAccount';

function AppRoutes() {
    return (
        <Routes>
            <Route exact path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route
                path="recipes"
                element={
                    <ProtectedRoute>
                        <Recipes />
                    </ProtectedRoute>
                }
            />
            <Route
                path="recipes/:slug"
                element={
                    <ProtectedRoute>
                        <Recipe />
                    </ProtectedRoute>
                }
            />
            <Route
                path="add-recipe"
                element={
                    <ProtectedRoute>
                        <CreateRecipe />
                    </ProtectedRoute>
                }
            />
            <Route
                path="meal-planner"
                element={
                    <ProtectedRoute>
                        <MealPlanner />
                    </ProtectedRoute>
                }
            />
            <Route
                path="account"
                element={
                    <ProtectedRoute>
                        <UserAccount />
                    </ProtectedRoute>
                }
            />
            <Route
                path="grocery-list"
                element={
                    <ProtectedRoute>
                        <GroceryList />{' '}
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
