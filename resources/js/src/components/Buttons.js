import React, {  useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BookApi from "../Api/BookApi";
import BookRecordApi from "../Api/BookRecordApi";
import { Modal, Button } from "react-bootstrap";
// import times from "./Times";
export function ToBorrow(props) {
    const history = useHistory()
    const [show, setShow] = useState(false);
    const [borrower_id, setBorrrower_id] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const saveBookRecord = async () => {
        try {
          await BookRecordApi.addBookRecord({
            
                "book_id": props.book_id,
                "borrower_unique_id" : borrower_id, 
            }).then(
                handleClose(),
                history.push('/books'),
                setBorrrower_id(null)
            ).catch((error) => {
                console.log(error.response.data)    
                }
            )
        } catch {
            alert("i feel something wrong")
        } finally {
            alert("okay")
        }
    }
  
    return (
      <>
        <Button variant="success mr-1" onClick={handleShow}>
          Borrow 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                <h2>To Borrow</h2>
            </Modal.Title>
          </Modal.Header>
                <Modal.Body>
                    
                    <div className="form-group">
                        <label>Borrower's unique id to borrow `{props.book_name}` </label>
                        <input className="form-control"
                            value={borrower_id}
                            onChange={(e) => setBorrrower_id(e.target.value)}
                        />
                    </div>
                </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveBookRecord}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
