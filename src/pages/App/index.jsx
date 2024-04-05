import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { Navbar } from '../../components/Navbar'
import { ShoppingCartProvider } from '../../context'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/shoes', element: <Home/>},
    { path: '/electronics', element: <Home/>},
    { path: '/furnitures', element: <Home/>},
    { path: '/toys', element: <Home/>},
    { path: '/others', element: <Home/>},
    { path: '/my_order', element: <MyOrder/>},
    { path: '/my_order/last', element: <MyOrder/>},
    { path: '/my_order/:id', element: <MyOrder/>},
    { path: '/my_orders', element: <MyOrders/>},
    { path: '/*', element: <NotFound/>},
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export { App }
