import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './Redux/store/store.js'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App