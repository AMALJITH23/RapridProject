import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import HeaderComp from './Pages/Common/HeaderComp'

import RouteContainer from './Pages/RouteContainer'

function App() {
  return (
    <div>
    <HeaderComp>
    </HeaderComp>
    <BrowserRouter>
      <RouteContainer>
      </RouteContainer>
    </BrowserRouter>
    </div>
  );
}

export default App;
