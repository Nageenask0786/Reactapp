import './index.css'

// Write your code here.

const CardList = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default CardList
