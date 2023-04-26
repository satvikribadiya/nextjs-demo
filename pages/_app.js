import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../redux/store'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const Layout = dynamic(() => import('../components/layout'))
const Adminlayout = dynamic(() => import('../components/admin/adminlayout'))
const MLMAdminlayout = dynamic(() => import('../components/MLMadmin/adminlauoutMLM'))
const MLMuserlayout = dynamic(() => import('../components/MLMuser/userlauoutMLM'))
const Nodatafound = dynamic(() => import('../components/admin/nodatafound'))

export default function App({ Component, pageProps }) {

  const router = useRouter()

  if (router.pathname.includes("/backadm")) {
    return(
      <Adminlayout>
        <ToastContainer />
          <Component {...pageProps} />
      </Adminlayout>
    )
  } else if (router.pathname.includes("/_error")) {
    return (
        <Nodatafound />
    )
  } else if (router.pathname.includes("/MLMadmin")){
    return (
      <MLMAdminlayout>
        <ToastContainer />
        <Component {...pageProps} />
      </MLMAdminlayout>
    )
  } else if (router.pathname.includes("/MLMuser")) {
    return (
      <MLMuserlayout>
        <ToastContainer />
        <Component {...pageProps} />
      </MLMuserlayout>
    )
  } else {
    return (
      <Layout>
        <ToastContainer />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    )

  }
}
