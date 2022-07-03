import "./style/_app.scss"
import { routerList } from './router';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DefaultLayout from './layout/main_layout';
import LoginLayout from './layout/login_layout';

import { Provider } from 'react-redux';
import store from "./redux/store";

import { checkLogin } from "./ultis/checkLogin";

function RequireLogin({ children }) {

  if (!checkLogin()) {
    return <Navigate to="/login" replace/>;
  }
  return children;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {
            routerList.map(({component, isLogin, path}) => {
              const Component = component
              const LayoutApp = isLogin ? DefaultLayout : LoginLayout

              if(!isLogin && !checkLogin()) {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                        <LayoutApp>
                          <Component />
                        </LayoutApp>
                    }
                  />
                )
              }
              
              if(isLogin) {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <RequireLogin>
                        <LayoutApp>
                          <Component />
                        </LayoutApp>
                      </RequireLogin>
                    }
                  />
                )
              }
              
            })
          }
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
