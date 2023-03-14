import { clearQuery, postContactForm, FieldType } from './utils';
import { Box, Button, Modal, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react';
import DougPng from '../../../assets/png/contact-modal-doug.png';
import FormTextField from './FormTextField';
import { fontWeights } from '../../../theme/typography';

const modalStyle = {
  top: '50%',
  left: '50%',
  gap: '16px',
  width: '342px',
  height: '358px',
  display: 'flex',
  borderRadius: '8px',
  p: '32px 48px 24px',
  textAlign: 'center',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.12) 100%), #0D133D;`,
  boxShadow: `0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)`
};

const FormCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-items: space-evenly;
  padding: 24px 40px;
  gap: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.07) 100%),
    #10184c;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const errorModalProps = {
  title: 'Oops!',
  body: 'Something went wrong. Please refresh the page and try again.'
};

const successModalProps = {
  title: 'Thank you!',
  body: 'Our team will personally review your request and match you with the unicorn who can best assist you.'
};

function ContactForm() {
  const [query, setQuery] = React.useState(clearQuery());
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalProps, setModalProps] = React.useState(successModalProps);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postContactForm(query, handleSuccess, handleFailure);
  };

  function handleSuccess() {
    setModalProps(successModalProps);
    setOpenModal(true);
    resetForm();
  }

  function handleFailure() {
    setModalProps(errorModalProps);
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  function resetForm() {
    setQuery(clearQuery);
  }

  function fieldChangeHandler(field) {
    return (event) => {
      setQuery((k) => {
        k[field] = event.target.value;
        return { ...k };
      });
    };
  }

  useEffect(() => {
    const allFieldsValid = Object.values(query).every((v) => v);
    setCanSubmit(allFieldsValid);
  }, [query]);

  return (
    <FormCard
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: { xs: '360px', md: '480px' },
        marginTop: { xs: '6rem', md: '0' }
      }}
    >
      <Modal open={openModal} onClose={closeModal}>
        <Box sx={modalStyle}>
          <Box component="img" alt="Doug the Unicorn" src={DougPng} />
          <Typography
            variant="h5"
            color="secondary"
            sx={{ fontSize: '30px', fontWeight: fontWeights.regular }}
          >
            {modalProps.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {modalProps.body}
          </Typography>
          <Button
            onClick={closeModal}
            color="inherit"
            sx={{
              alignSelf: 'end'
              // color: "primary.contrastText",
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
      <Typography component="h3" variant="h2" color="primary.contrastText">
        Get in Touch
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Please provide us with your information and we will contact you shortly to discuss your
        missions needs.
      </Typography>
      {Object.values(FieldType).map((v) => (
        <FormTextField
          key={v}
          queryValue={query[v]}
          fieldType={v}
          onChange={fieldChangeHandler(v)}
        />
      ))}
      <Button variant="contained" type="submit" color="secondary" disabled={!canSubmit}>
        Agree and Submit
      </Button>
      <Typography variant="caption" color="text.secondary">
        {
          'By entering your information above and clicking the "Agree and Submit" button, you agree that we may contact you, at email address you provide in this form.'
        }
      </Typography>
    </FormCard>
  );
}

export default ContactForm;
