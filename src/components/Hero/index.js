import { CaptainCandyFaceRadial } from "resources/Images"
import { Link } from "react-scroll"
import "./style.scss"

const Hero = () => (
  <div className="hero container flex">
    <div className="hero-caption">
      <div className="hero-caption-title flex">
        <img src={CaptainCandyFaceRadial} alt="hero title" />
        <span>CAPTAIN CANDY</span>
      </div>
      <p>
        Captain Candy is a part of the SuperKrass team and has now his own
        collection of 10,000 unique NFTs available on the Ethereum blockchain.
      </p>
      <p>
        Each Captain is completely unique, created using over 100 individual
        features.
        {/* JOIN OUR DISCORD TO GET NOTIFIED ABOUT LAUNCH DATES. */}
      </p>
      <div className="hero-caption-buttons flex">
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
            MINT NOw
          </Link>
        </button>
      </div>
    </div>
  </div>
)

export default Hero
