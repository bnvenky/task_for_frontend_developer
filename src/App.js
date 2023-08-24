import {useState} from 'react'
import './App.css'

const App = () => {
  const [selectedOption, setSelectedOption] = useState('double')
  const [totalPrice, setTotalPrice] = useState(360)

  const handleOptionChange = e => {
    setSelectedOption(e.target.value)

    if (e.target.value === 'single') {
      setTotalPrice(195)
    } else if (e.target.value === 'double') {
      setTotalPrice(360)
    } else {
      setTotalPrice(528)
    }
  }

  const singleActiveClass = selectedOption === 'single' ? 'active' : null
  const doubleActiveClass = selectedOption === 'double' ? 'active' : null
  const tripleActiveClass = selectedOption === 'triple' ? 'active' : null

  return (
    <div className="main-container">
      <div className="top-container">
        <hr />
        <h3>Bundle & Save</h3>
        <hr />
      </div>

      <div className={`single-pair ${singleActiveClass}`}>
        <div className="container">
          <input
            id="single"
            type="radio"
            name="pair"
            value="single"
            onChange={handleOptionChange}
          />
          <label htmlFor="single">
            <span>1 Pair</span> <br />
            <span className="currency">DKK 195.00</span>
          </label>
        </div>
        <span className="discount">50% OFF</span>
      </div>

      <div className={`double-container ${doubleActiveClass}`}>
        <div className="double-pair">
          <div className="container">
            <input
              id="pair"
              type="radio"
              name="pair"
              value="double"
              onChange={handleOptionChange}
              defaultChecked
            />
            <label htmlFor="pair">
              <span>2 Pair</span> <br />
              <span className="currency">DKK 345.00</span>
            </label>
          </div>
          <span className="strike">
            <br />
            DKK 195.00
          </span>
          <span className="most-popular">
            Most Popular <br />
            <span className="discount">40% OFF</span>
          </span>
        </div>
      </div>

      <div className={`single-pair ${tripleActiveClass}`}>
        <div className="container">
          <input
            id="triple"
            type="radio"
            name="pair"
            onChange={handleOptionChange}
            value="triple"
          />
          <label htmlFor="triple">
            <span>3 Pair</span> <br />
            <span className="currency">DKK 528.00</span>
          </label>
        </div>
        <span className="discount">60% OFF</span>
      </div>

      <div className="shipping">
        <p className="para">free 2 day shipping</p>
        <p>
          total : <span className="total"> {totalPrice}</span>
        </p>
      </div>

      <div className="button-container">
        <button type="button" className="button">
          + add to cart
        </button>
        <p>&#169; powered by pumper</p>
      </div>
    </div>
  )
}

export default App
