import { BrowserRouter, Route } from 'react-router-dom';

import Productos from './components/Productos';
import Formulario from './components/Formulario';

function App() {
  return (
    <BrowserRouter>
      <Route component={Productos} path="/products" />
      <Route component={Formulario} path="/form" />
    </BrowserRouter>
  );
}

export default App;
