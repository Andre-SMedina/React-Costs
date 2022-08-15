import PropTypes from "prop-types";

function Item({ marca, ano_lancamento }) {
  return (
    <li>
      {marca} - {ano_lancamento}
    </li>
  );
}

// Define os tipos de elementos que devem ser recebidos
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
};

// mostra um valor padrão se não for informado um valor
Item.defaultProps = {
  marca: "Faltou a marca",
  ano_lancamento: 0,
};

export default Item;
