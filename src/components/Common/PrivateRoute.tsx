import { Navigate, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  // check user login chua  neu dang nhap => route chua => login pages

  const isLoginIn = Boolean(localStorage.getItem('token'));

  if (!isLoginIn) return <Navigate to="/login" />;

  return <Route {...props}></Route>;
}
