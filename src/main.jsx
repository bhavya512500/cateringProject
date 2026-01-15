import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './Nav/Nav.css'
import './Components/About/AboutCss.css'
import './Components/Services/Services.css'
import './Components/contact/contact.css'
import './Components/menu/menu.css'
import './Components/subscribe/subscribe.css'
import './Components/signUp/signUp.css'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Provider } from 'react-redux'
import { store } from './Utility/Store.js'
import RoutingArea from './Routes/RoutingArea.jsx'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
   <RoutingArea/>
</Provider>
)
