import { CaptainCandyFaceRadial } from "resources/Images"
import { Link } from "react-scroll"
import "./style.scss"

const Hero = () => (
  <div className="home container flex">
    <div className="home-caption">
      <div className="home-caption-title flex">
        <img src={CaptainCandyFaceRadial} alt="home title" />
        <span>CAPTAIN CANDY</span>
      </div>
      <p>
        Captain Candy is a part of the SuperKrass team and has now his own
        collection of 10,000 unique NFTs available on the Ethereum blockchain.
      </p>
      <p>
        Each Captain is completely unique, created using over 100 individual
        features.
      </p>
      <p>JOIN OUR DISCORD TO GET NOTIFIED ABOUT LAUNCH DATES.</p>
      <div className="home-caption-buttons flex">
        <button>READ MORE</button>
        <button>
          <Link
            activeClass="active"
            to={"mint"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            MINT NOW
          </Link>
        </button>
      </div>
    </div>
  </div>
)

export default Hero
