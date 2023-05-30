// Write your code here

import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-nav-menu">
              <h1 className="left-nav-text">Left Navbar Menu</h1>
              <ul className="left-nav-list-items">
                <li className="items">Item 1</li>
                <li className="items">Item 2</li>
                <li className="items">Item 3</li>
                <li className="items">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-nav-container">
              <h1 className="right-nav-text">Right Navbar</h1>
              <ul className="right-nav-list-items">
                <p className="right-list-items">Ad 1</p>
                <p className="right-list-items">Ad 2</p>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
