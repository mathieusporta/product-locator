import '../../public/styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider session={pageProps.session}>
       <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default MyApp
