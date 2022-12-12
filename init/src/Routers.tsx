import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Coin, Coins } from "./routes";

interface IRouterProps {
  isDark: boolean;
}

function Router({ isDark }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/*  PUBLIC_URL은 package.json의 homepage URL값 */}
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
