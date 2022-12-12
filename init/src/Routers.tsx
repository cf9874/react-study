import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Coin, Coins } from "./routes";

interface IRouterProps {
  isDark: boolean;
  toggle: () => void;
}

function Router({ isDark, toggle }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/*  PUBLIC_URL은 package.json의 homepage URL값 */}
      <Routes>
        <Route path="/:coinId/*" element={<Coin isDark={isDark} toggle={toggle} />} />
        <Route path="/" element={<Coins isDark={isDark} toggle={toggle} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
