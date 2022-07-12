export const FILTER_OPTIONS = [
  {type: 'all', name: 'All'},
  {type: 'male', name: 'Male'},
  {type: 'female', name: 'Female'}
]

export const DROPDOWN_CUSTOM_STYLE = {
  menuPortal: (base) => ({ ...base, zIndex: 999 }),
  control: (provided) => ({
    ...provided,
    minHeight: '28px',
    height: '28px',
    minWidth: '90px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    borderRadius: '4px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '28px',
    padding: '0 6px',
    fontSize: '12px',
    alignItems: 'center' 
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000',
    }
  },
  option: (styles) => {
    return {
      ...styles,
      fontSize: '12px'
    };
  },
  input: (provided) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '28px',
    marginTop: '0px'
  }),
};