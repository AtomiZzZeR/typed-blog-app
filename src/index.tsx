import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </BrowserRouter>
);
