import { Link } from "react-scroll"
import { LINKS } from "constants/links"
import "./style.scss"

const Sidebar = ({
  showSidebar,
  onHandleSidebar,
  walletAddress,
  onConnectWalletHandler,
}) => (
  <div
    className={`sidebar${showSidebar ? " sidebar-show" : ""}`}
    onClick={onHandleSidebar}
  >
    <div className="sidebar-links flex flex-column">
      <button onClick={() => walletAddress === "" && onConnectWalletHandler()}>
        {walletAddress !== ""
          ? walletAddress.slice(0, 6) + " ... " + walletAddress.slice(38)
          : "CONNECT WALLET"}
      </button>
      {LINKS.map((data, index) => (
        <Link
          key={index}
          className="sidebar-links-anchor"
          activeClass="active"
          to={data.toLowerCase()}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={onHandleSidebar}
        >
          {data}
        </Link>
      ))}
    </div>
  </div>
)

export default Sidebar
