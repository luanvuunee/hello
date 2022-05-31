import { useEffect } from 'react';

import cityApi from 'api/cityAPI';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => {
      console.log(response.data);
    });
  });

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>


    </Switch>
  );
}

export default App;
