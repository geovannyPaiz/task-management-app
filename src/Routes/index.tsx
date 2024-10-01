import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "Components/Templates";
import { menuItems } from "Constants/MenuItems";

const Welcome = lazy(() => import("../Pages/General/Welcome"));

const App = () => {
  return (
    <BrowserRouter>
      <Layout itemsNav={menuItems}>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
