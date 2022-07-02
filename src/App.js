import "./style/_app.scss"
import { routerList } from './router';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DefaultLayout from './layout/main_layout';
import LoginLayout from './layout/login_layout';

import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {
            routerList.map(route => {
              const Component = route.component
              const LayoutApp = route.isLogin ? DefaultLayout : LoginLayout
              return(
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <LayoutApp>
                      <Component />
                    </LayoutApp>
                  }
                />
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
