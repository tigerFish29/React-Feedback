import PropTypes from "prop-types";

const Header = ({ text }) => {
    return (
        <header style={{
            backgroundColor: "#000000",
            fontWeight: "300",
            fontFamily: "monospace",
            color: "#fff"


        }}>
           <div className="container">
              <h2>{text}</h2>
           </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Feedback UI"
}

Header.propTypes = {
    text: PropTypes.string
}



export default Header;