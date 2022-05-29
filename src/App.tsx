import { useEffect } from 'react';

import cityApi from 'api/cityAPI';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => {
      console.log(response.data);
    });
  });

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/admin" element={<PrivateRoute />}>
        <Route path="/admin" element={<AdminLayout />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
