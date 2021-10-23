import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"
import { SuperkrassLogo } from "resources/Images"
import { LINKS } from "constants/links"
import "./style.scss"

const Navbar = () => (
  <div className="navbar container flex">
    <div className="navbar-logo">
      <img src={SuperkrassLogo} alt="logo" />
    </div>
    <div className="navbar-links">
      {LINKS.map((data, index) => (
        <Link
          key={index}
          className="navbar-links-anchor"
          activeClass="active"
          to={data.toLowerCase()}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          {data}
        </Link>
      ))}
    </div>
    <div className="navbar-button">
      <button>COMING SOON</button>
    </div>
    <div className="navbar-collapse">
      <button>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  </div>
)

export default Navbar
