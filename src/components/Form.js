import React from 'react';

const Form = (props) =>(
    <form onSubmit={props.getRecipe}>
        <input className="form__input" type="text" name="recipeName"/>
        <button className="btn btn-info">Search</button>
    </form>
);
export default Form;