import * as React from 'react'
import styles from './Layout.module.scss'
import Cheque from "../components/Cheque/Cheque";
import Footer from "../components/Footer/Footer";

const Layout = () => {

    return (
        <div className={styles.layoutWrapper}>
           <Cheque/>
            <Footer/>
        </div>
    )
}

export default Layout

