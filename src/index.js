import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import store from "./store/store"
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

