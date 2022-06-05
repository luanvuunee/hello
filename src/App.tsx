import { useEffect } from 'react';

import cityApi from 'api/cityAPI';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  

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
