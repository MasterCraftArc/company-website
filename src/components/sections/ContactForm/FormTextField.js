import TextField from '@mui/material/TextField/TextField';
import React from 'react';

function FormTextField(props) {
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    return () => setInitialized(false);
  }, [props.queryValue]);

  return (
    <TextField
      size="small"
      error={initialized && !props.queryValue}
      onBlur={() => setInitialized(true)}
      color="secondary"
      name={props.fieldType}
      variant="outlined"
      onChange={props.onChange}
      required={true}
      label={props.fieldType.charAt(0).toUpperCase() + props.fieldType.slice(1)}
      value={props.queryValue}
    />
  );
}

export default FormTextField;
