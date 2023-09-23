import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import HomeScreen from "./components/homeComponents/HomeScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="newRecipe" element={<NewRecipeScreen />} />
        <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      </main>
      <Footer />     
    </div>
  );
}

export default App;
