import PropTypes from "prop-types";

function Logo({ width }) {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/bd/University_of_Engineering_and_Management_Kolkata_logo.png?20230304033834"
      alt="UEMK"
      width={width}
    />
  );
}

export default Logo;

Logo.propTypes = {
  width: PropTypes.string.isRequired,
};
