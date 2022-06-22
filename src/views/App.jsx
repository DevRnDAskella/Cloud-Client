import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Registration, Login } from "./components";
import { Containers, StyledApp } from "./styled";

const App = () => {
  const isAuth = useSelector((state) => state.reducer.isAuth);

  return (
    <StyledApp>
      <BrowserRouter>
        <Navbar />
        <Containers.app>
          {!isAuth && (
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          )}
        </Containers.app>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
