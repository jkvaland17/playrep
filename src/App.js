import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateroutesArray, PublicroutesArray } from "./routes";
import PrivateRouters from "./Routers/PrivateRouter";
import PublicRouters from "./Routers/PublicRouter";
import Layout from "./Layout";
import { MoonLoader } from "react-spinners";

const App = () => {
  return (
    <React.Suspense fallback={<MoonLoader color="#20b7c9" />}>
      <BrowserRouter>
      <Layout>
        <Routes>
          {PublicroutesArray?.map(({ component: Component, path }, key) => {
            return (
              <Route
                path={path}
                element={
                  <PublicRouters>
                    <Component />
                  </PublicRouters>
                }
                key={key}
              />
            );
          })}
          {PrivateroutesArray?.map(({ component: Component, path }, key) => (
            <Route
              path={path}
              element={
                <PrivateRouters>
                  
                    <Component />
              
                </PrivateRouters>
              }
              key={key}
            />
          ))}
        </Routes>
        </Layout>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
