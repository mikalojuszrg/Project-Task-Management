import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { MainLayoutRoutes } from "./const";

const Routes = () => {
  const { Layout, routes } = MainLayoutRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
