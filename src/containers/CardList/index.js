import React, {Component} from 'react';
import CardComponentItem from '../../components/CardComponentItem'


const CardList = ({cards}) => {
  return (
    <div className='eachCard'>
      {
        cards.map((card, idx) => {
          return (
            <CardComponentItem
              id={card.id}
              title={card.title}
              created_by={card.created_by}
              assigned_to={card.assigned_to}
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