import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="bg-themeOrange px-8 text-white">
      <div className="container px-8">
        <h1 className="text-3xl py-4 font-bold">{title}</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Hejdoktor Questionaire",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
