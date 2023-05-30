// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="cc-layout-bg">
          <h1 className="layout-main-heading">Layout</h1>
          <div className="input-container">
            <input
              onClick={onToggleShowContent}
              type="checkbox"
              id="checkboxContent"
            />
            <label className="label-text" htmlFor="checkboxContent">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              onClick={onToggleShowLeftNavbar}
              id="checkboxLeftNavbar"
            />
            <label className="label-text" htmlFor="checkboxLeftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              onClick={onToggleShowRightNavbar}
              id="checkboxRightNavbar"
            />
            <label className="label-text" htmlFor="checkboxRightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
