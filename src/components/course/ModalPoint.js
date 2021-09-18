import React, { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export const ModalPoint = ({ Point }) => {
  const [open, setOpen] = React.useState(true);
  const myChangeHandler = (event) => {};
  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your score is {Point.point} / {Point.total}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Review the answer</Button>
        <Button color='blue' as={Link} to='/course'>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
