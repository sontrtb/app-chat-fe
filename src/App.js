import "./style/_app.scss"
import { routerList } from './router';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DefaultLayout from './layout/main_layout';
import LoginLayout from './layout/login_layout';

function App() {

  return (
    <div>
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
    </div>
  );
}

export default App;
