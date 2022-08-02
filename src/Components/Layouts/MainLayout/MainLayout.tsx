import React from 'react'
import Footer from '../../UI/Footer/Footer'
import Header from '../../UI/Header/Header'
import './MainLayout.css'

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <div className="page__wrapper">
      <div className="page__header">
        <Header />
      </div>
      <main className='page__main'>
        {children}
      </main>
      <div className="page__footer">
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout