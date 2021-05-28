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
import Logout from 'views/Logout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="">
                <Home />
            </Route>
            <Route path="login">
                <Login />
            </Route>
            <Route path="create-account">
                <CreateAccount />
            </Route>
            <ProtectedRoute path="recipes">
                <Route path="/">
                    <Recipes />
                </Route>
                <Route path="/:slug">
                    <Recipe />
                </Route>
            </ProtectedRoute>
            <ProtectedRoute path="add-recipe">
                <CreateRecipe />
            </ProtectedRoute>
            <ProtectedRoute path="meal-planner">
                <MealPlanner />
            </ProtectedRoute>
            <ProtectedRoute path="account">
                <UserAccount />
            </ProtectedRoute>
            <ProtectedRoute path="grocery-list">
                <GroceryList />
            </ProtectedRoute>
            <ProtectedRoute path="logout">
                <Logout />
            </ProtectedRoute>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;
