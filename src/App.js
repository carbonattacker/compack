import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes?.length && routes?.map((r) => {
          return (
            <Route key={r?.id} path={r?.ref} element={<r.Component />} />
          )
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
