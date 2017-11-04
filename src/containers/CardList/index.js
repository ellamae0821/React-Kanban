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
              created_by={card.creator.name}
              assigned_to={card.assignee.name}
              priority={card.priority.name}
              status={card.status.name}
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