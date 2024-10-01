import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "Components/Templates";
import { menuItems } from "Constants/MenuItems";
import { Loader } from "Components/atoms"; // Importa un componente de carga.

const Welcome = lazy(() => import("../Pages/General/Welcome"));
const Dashboard = lazy(() => import("../Pages/General/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Layout itemsNav={menuItems}>
        <Suspense fallback={<Loader visible size={100} />}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
