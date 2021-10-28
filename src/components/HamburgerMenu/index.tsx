import { Link } from "react-router-dom";
import { sections } from "./const"

import { useHamburgerMenu } from "../../store"
import { FaTimes } from 'react-icons/fa'
import "./styles.css"

export const HamburgerMenu = () => {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useHamburgerMenu()
  const toggleMenuOpen = () => setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)

  return (
    hamburgerMenuIsOpen ?
    <>
      <div className={`dim-screen ${hamburgerMenuIsOpen && "show"}`}
        onClick={() => { setHamburgerMenuIsOpen(false) }}
      />
      <div className={`dropdown-content ${hamburgerMenuIsOpen && "show"}`}>
        <div className="dropdown-header">
          <div className="menu-title">Atlas of Opportunity</div>
          <button className="close-icon" onClick={toggleMenuOpen}>
            <FaTimes/>
          </button>
        </div>
        { sections.map((choices, idx) => 
          <div key={idx} className="dropdownSection">
            { choices.map((choice, idx) => (
               /^https?:\/\//.test(choice.url) ?
                <a key={idx}
                  href={choice.url}
                  onClick={toggleMenuOpen}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {choice.title}
                </a> :
                <Link key={idx}
                  to={choice.url}
                  onClick={toggleMenuOpen}
                >
                  {choice.title}
                </Link>
            ))}
          </div>
        )}
      </div>
    </>
    : <></>
  )
}