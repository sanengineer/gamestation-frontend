import React from 'react';
import{Button,Modal} from "react-bootstrap"
import { useHistory } from 'react-router-dom';

export const ModalsConfirm=({toogle,closeModals})=> {
  
  const history = useHistory();
  return (
      <>
        <Modal show={toogle} >
          <Modal.Header><strong>Quit Game Confirm</strong></Modal.Header>
          <Modal.Body>Are you sure to end the game?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>closeModals()}>
              No
            </Button>
            <Button variant="danger" onClick={()=> history.goBack()}>
              Quit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  