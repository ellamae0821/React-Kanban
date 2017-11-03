import React, {Component} from 'react';
import CardComponentItem from '../../components/CardComponentItem'


const CardList = ({cards}) => {
  return (
    <div className='eachCard'>
      {
        cards.map((card, idx) => {
          console.log('CARDLIST CONTAINER - MAP.CARD',card)
          return (
            <CardComponentItem
              id={card.id}
              title={card.title}
              created_by={card.created_by}
              assigned_to={card.assigned_to}
              priority={card.priority}
              status={card.status}
              key={idx}
            />
          )
        })
      }
    </div>

  )
}
/*CardList.defaultProps = {
  cards: []
}*/

export default CardList;