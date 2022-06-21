import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Registration, Login } from "./components";
import { Containers, StyledApp } from "./styled";

const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <Navbar />
        <Containers.app>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Containers.app>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
