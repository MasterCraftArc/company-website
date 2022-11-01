import { clearQuery, postContactForm, FieldType } from "./utils";
import { Box, Button, Modal, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import FormTextField from "./FormTextField";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.07) 100%), #0D133D`,
  boxShadow: `0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)`,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const FormCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-items: space-evenly;
  padding: 24px 40px;
  gap: 16px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.07) 0%,
      rgba(255, 255, 255, 0.07) 100%
    ),
    #10184c;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const errorModalProps = {
  title: "Oops!",
  body: "Something went wrong. Please refresh the page and try again.",
};

const successModalProps = {
  title: "Thank you!",
  body: `We'll be in touch shortly`,
};

function ContactForm() {
  const [query, setQuery] = React.useState(clearQuery());
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalProps, setModalProps] = React.useState(successModalProps);

  const handleSubmit = React.useCallback(
    async (event) => {
      event.preventDefault();
      await postContactForm(query, handleSuccess, handleFailure);
    },
    [query]
  );

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
        width: { xs: "360px", md: "480px" },
        marginTop: { xs: "6rem", md: "0" },
      }}
    >
      <Modal open={openModal} onClose={closeModal}>
        <Box sx={modalStyle}>
          <Typography variant="h4" marginTop={"4px"}>
            {modalProps.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={"left"}>
            {modalProps.body}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={closeModal}
            sx={{ width: "50%" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
      <Typography component="h3" variant="h2" color="primary.contrastText">
        Get in Touch
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Please provide us with your information and we will contact you shortly
        to discuss your missions needs.
      </Typography>
      {Object.values(FieldType).map((v) => (
        <FormTextField
          key={v}
          queryValue={query[v]}
          fieldType={v}
          onChange={fieldChangeHandler(v)}
        />
      ))}
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!canSubmit}
      >
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
