// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faqs-container">
      <div className="white-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-item">
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} faqDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
