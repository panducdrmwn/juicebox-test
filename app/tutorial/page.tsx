import Carousel from '@/components/carousel'
import React from 'react'
import { fontBagoss, fontSohne } from "@/public/fonts";
import { cn } from '@/lib/utils';

const Tutorial = () => {
  return (
    <div  className={`${cn("antialiased",fontSohne.variable)}`}>
      <Carousel/>
    </div>
  )
}

export default Tutorial