import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />
      })}
      {/* <h1>Card List Component</h1> */}
    </div>
  )
}

export default CardList
