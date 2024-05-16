import React from 'react'
import './DetailsCard.css'
import SearchBrand from './SearchBrand'

const DetailsCard = () => {
  const restaurants = [
    { id: 1, name: "مطعم السما" },
    { id: 2, name: "مطعم محمد" },
    { id: 3, name: "مطعم طارق" },
    { id: 4, name: "مطعم عبد الله" },
    { id: 5, name: "مطعم الأمير" },
    { id: 6, name: "مطعم الزيتون" },
    { id: 7, name: "مطعم القصر" },
    { id: 8, name: "مطعم النخيل" },
    { id: 9, name: "مطعم الفراشة" },
    { id: 10, name: "مطعم الشرقي" },
    { id: 11, name: "مطعم الغدير" },
    { id: 12, name: "مطعم الرومانسية" },
    { id: 13, name: "مطعم الفاخر" },
    { id: 14, name: "مطعم البحر" },
    { id: 15, name: "مطعم السفينة" },
  ];
  
  return (
    

    <>
       <div className='brand-cards'>
        <SearchBrand title={restaurants}/>
       </div>
    </>
  )  
}

export default DetailsCard
