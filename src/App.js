import './App.css';
import CardRick from './components/common/card';
import {CircularPagination} from './components/common/paginator';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
    <div>
      <CardRick/>
      <CircularPagination/>
    </div>
    </Provider>
  );
}

export default App;
