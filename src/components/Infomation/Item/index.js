import "./style.scss"

const InformationItem = ({ children }) => (
  <div className="item">
    <div className="item-inner flex flex-column">{children}</div>
  </div>
)

export default InformationItem
