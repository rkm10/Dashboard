import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.jsx'
import { Suspense } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import Spinner from './Layout/spinner/spinner.jsx'
import persistStore from 'redux-persist/es/persistStore'


let persistor = persistStore(store);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
    </Suspense>
  </Provider>,
)
