import { Navigate, Route } from "react-router-dom";
import { RouteProps } from "react-router-dom";

interface IPrivateRoutes extends RouteProps {
  isAuthenticated: boolean;
  authPath: string;
}

export default function PrivateRoutes(props: IPrivateRoutes) {
  if (!props.isAuthenticated) {
    return <Navigate to={props.authPath} />;
  }

  return <Route path={props.path} element={props.element} />;
}
