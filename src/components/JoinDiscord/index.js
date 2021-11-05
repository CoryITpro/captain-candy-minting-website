import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import "./style.scss"

const JoinDiscord = () => (
  <div className="discord container flex">
    <div className="discord-wrapper flex">
      <div className="discord-wrapper-texts flex">
        <div className="discord-wrapper-icon">
          <FontAwesomeIcon icon={faDiscord} />
        </div>
        <div className="discord-wrapper-captions flex flex-column">
          <div>
            Join the <span>Discord</span> Group!
          </div>
          <div>
            Stay up to date with news and events what's happening with Captain
            Candy. Join our official discord channel and secure your place in
            the Candyverse!
          </div>
        </div>
      </div>
      <div className="discord-wrapper-join flex">
        <a
          href="https://discord.gg/5DwNcK9gQ9"
          target="_blank"
          rel="noreferrer"
        >
          JOIN DISCORD
        </a>
      </div>
    </div>
  </div>
)

export default JoinDiscord
