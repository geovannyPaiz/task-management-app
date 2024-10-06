import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "Components/Templates";
import { menuItems } from "Constants/MenuItems";
import { Loader } from "Components/atoms";

const Welcome = lazy(() => import("../Pages/General/Welcome"));
const Dashboard = lazy(() => import("../Pages/General/Dashboard"));
const MyTask = lazy(() => import("../Pages/General/Dashboard"));
const NotFound = lazy(() => import("Pages/General/404"));

const App = () => {
  return (
    <BrowserRouter>
      <Layout itemsNav={menuItems}>
        <Suspense fallback={<Loader visible size={100} />}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myTasks" element={<MyTask />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
