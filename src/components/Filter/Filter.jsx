import React from 'react';
import PropTypes from 'prop-types';
import { LabelFil, InputFil } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <LabelFil>
    Find contacts by name
    <InputFil type="text" value={value} onChange={onChange} />
  </LabelFil>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
