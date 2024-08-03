import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "./routes.js";
import DefautLayout from "./DefautLayout/DefautLayout.js";
import BlankLayout from "./DefautLayout/BlankLayout.js";
import { MainCss } from "./css/mainCss.js";
import { BaseCss } from "./css/baseCss.js";
import { GridCss } from "./css/gridCss.js";
import ContextApi from "./hook/ComponentContext.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {PublicRoute.map((route, index) => {
            let Layout = DefautLayout;
            let Page = route.component;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = BlankLayout;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ContextApi>
                    <BaseCss>
                      <MainCss>
                        <Layout>
                          <Page />
                        </Layout>
                      </MainCss>
                    </BaseCss>
                  </ContextApi>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
