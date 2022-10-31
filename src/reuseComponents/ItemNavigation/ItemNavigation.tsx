import React, { FC } from 'react';
import itn from './ItemNavigation.module.css'

interface ItemNavigationProps {
  img: string,
  title: string,
  id: number
}

const ItemNavigation: FC<ItemNavigationProps> = ({ id, img, title }) => {

  const hoverBlock = (id: number) => {
    console.log(id)
  }

  return ( // Елеменn навигации Cars
    <li className={itn.wrapper} onMouseMove={() => hoverBlock(id)}>
      <div className={itn.blockImg}>
        <img src={img} title="img" />
      </div>
      <div className={itn.title}>{title}</div>
    </li>
  )
}

export default ItemNavigation