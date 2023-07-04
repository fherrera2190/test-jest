import PropTypes from "prop-types";

export const FirtsApp = ({ title, subTitle,name }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirtsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

FirtsApp.defaultProps = {
  title: "No hay Titulos",
  subTitle: "No hay subTitulo",
  name: "Fernando Herrera",
};
