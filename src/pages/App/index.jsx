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
    { path: '/Shopi/', element: <Home/>},
    { path: '/Shopi/shoes', element: <Home/>},
    { path: '/Shopi/electronics', element: <Home/>},
    { path: '/Shopi/furnitures', element: <Home/>},
    { path: '/Shopi/toys', element: <Home/>},
    { path: '/Shopi/others', element: <Home/>},
    { path: '/Shopi/my_order', element: <MyOrder/>},
    { path: '/Shopi/my_order/last', element: <MyOrder/>},
    { path: '/Shopi/my_order/:id', element: <MyOrder/>},
    { path: '/Shopi/my_orders', element: <MyOrders/>},
    { path: '/Shopi/*', element: <NotFound/>},
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
