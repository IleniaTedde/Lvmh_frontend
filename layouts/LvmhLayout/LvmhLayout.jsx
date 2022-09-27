
import React, {useContext} from "react";
import styles from './LvmhLayout.module.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SkipToMainContent from "../../components/SkipToMainContent/SkipToMainContent";


const LvmhLayout = ({ children }) => {

  return (
    <div>
      { 
        <>
          <SkipToMainContent skipLink="#main" />
          <Header />
          <div id="main" className={`${styles.content}`}>
            {children}
          </div>
          <Footer />
        </>
      }
    </div>
  );
};


export default LvmhLayout;
