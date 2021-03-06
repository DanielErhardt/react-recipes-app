import React from 'react';
import PropTypes from 'prop-types';
import { createId } from '../../helpers';

const allowedTypes = ['number', 'text', 'email', 'password', 'search', 'checkbox', 'radio'];

function LabeledInput(props) {
  const {
    id, label, labelToRight, type, name, value,
    className, divClassName, placeholder, onChange, defaultChecked,
  } = props;

  if (!allowedTypes.includes(type)) {
    throw new Error(`The InputElement component does not work currently with the ${type} type.`);
  }

  const thisId = id || createId();

  const labelElement = (
    <label htmlFor={thisId}>
      {label}
    </label>
  );

  return (
    <div className={`labeled-input ${divClassName}`}>
      {!labelToRight && labelElement}
      <input
        style={{ margin: '0 3px' }}
        className={className}
        id={thisId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        defaultChecked={defaultChecked}
      />
      {labelToRight && labelElement}
    </div>
  );
}

LabeledInput.defaultProps = {
  id: '',
  label: '',
  labelToRight: false,
  name: '',
  value: '',
  divClassName: '',
  className: '',
  placeholder: '',
  onChange: () => {},
  defaultChecked: false,
};

LabeledInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelToRight: PropTypes.bool,
  type: PropTypes.oneOf(allowedTypes).isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
};

export default LabeledInput;
