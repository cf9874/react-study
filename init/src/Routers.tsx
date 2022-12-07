import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Coin, Coins } from "./routes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
