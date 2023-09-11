import './App.css';
import CardRick from './components/common/card';
import {CircularPagination} from './components/common/paginator';
import { Provider } from 'react-redux';
import {NavbarSimple} from './components/layout/navbar';
import store from './store';
function App() {
  return (
    <Provider store={store}>
    <div>
      <NavbarSimple/>
      <CardRick/>
      <CircularPagination/>
    </div>
    </Provider>
  );
}

export default App;
