import React from 'react'
import CardsBlock from '../../Components/CardsBlock/CardsBlock'
import MainLayout from '../../Components/Layouts/MainLayout/MainLayout'
import { cardData } from '../../fixtures/cardData'

function HomePage() {
  return (
    <MainLayout>
        <CardsBlock title="Results for “query”" cardData={cardData}/>
    </MainLayout>
  )
}

export default HomePage