import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeCard({ recipe }) {
  const { pathname } = useLocation();
  const id = recipe.idMeal || recipe.idDrink;
  const name = recipe.strMeal || recipe.strDrink;
  const thumb = recipe.strMealThumb || recipe.strDrinkThumb;
  const category = recipe.strCategory;

  return (
    <Link
      className="recipe-card"
      to={`${pathname}/${id}`}
      type="button"
    >
      <img src={thumb} alt="recipe thumb" />
      <h2>{name}</h2>
      {category && <p>{`${category}`}</p>}
    </Link>
  );
}

RecipeCard.defaultProps = {
  recipe: PropTypes.shape({
    idMeal: '',
    idDrink: '',
    strMeal: '',
    strDrink: '',
    strMealThumb: '',
    strDrinkThumb: '',
    strCategory: '',
  }),
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strCategory: PropTypes.string,
  }),
};

export default RecipeCard;
