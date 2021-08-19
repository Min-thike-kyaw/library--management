import React,{useEffect, useState} from 'react'
import AppContainer from '../AppContainer';
import Axios from "axios";
import BookRecordApi from '../../Api/BookRecordApi';
// import { async } from 'q';
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const BookRecord = () => {
    function ToContact(props) {
        
        const [show, setShow] = useState(false);
        // const [borrower_id, setBorrrower_id] = useState(null);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
      
        return (
          <>
            <Button variant="success mr-1" onClick={handleShow}>
              Contact 
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                    <h2>To Contact</h2>
                </Modal.Title>
              </Modal.Header>
                    <Modal.Body>
                        
                        <div className="">
                            <p>Name : <span className="font-weight-bold">{ props.borrower_name}</span></p>
                            <p>Unique Id:<span className="font-weight-bold">{ props.borrower_unique_id}</span></p>
                            <p>Email : <span className="font-weight-bold">{ props.borrower_email}</span></p>
                            <p>Phone : <span className="font-weight-bold">{ props.borrower_phone_no}</span></p>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} variant="primary">
                  <Link to={`borrowers/${props.borrower_id}`} >Detail</Link>
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }
    const [records, setRecords] = useState([])
    const [alerts, setAlerts] = useState(false)
    const [header, setHeader] = useState({
        header: "All records",
        button: "Only Exceeded records"
    })
    const fetchRecords = () => {
        if (alerts) {
            BookRecordApi.getAllBookRecords().then((res) => {
                const data = res.data.data.filter((res) => res.condition == 0 && new Date( res.borrowed_to_date) <= new Date())
                setRecords(data)
                console.log(records)
            })
        } else {
            BookRecordApi.getAllBookRecords().then((res) => {
                const data = res.data.data.filter((res) => res.condition == 0)
                setRecords(data)
                
            })
        }
        
    }
    
    const alertRecords = async ()  => {
        setHeader({
            header: header.button,
            button: header.header
        })
        
        console.log(alerts)
        setAlerts(!alerts)

        console.log(alerts)
        fetchRecords()
    }
    useEffect(() => fetchRecords(), [alerts])
    const lost = (id) => {
        if (confirm("Are u sure `borrower lost`?")) {
            if (confirm("really sure he lost?")) {
                try {
                    BookRecordApi.lostBook(id)
                        .then((res) =>
                            console.log(res),
                            fetchRecords()
                        )
                        .catch((err) =>
                            console.log(err.response.data)
                        )
                } catch {
                    alert("Something wrong")
                }
            }
        } else {
            console.log("world")
        }
    }
    const returnBook = (id) => {
        if (confirm("Are u sure `borrower return`?")) {
            if (confirm("Really sure?")) {
                try {
                    BookRecordApi.returnBookRecord(id)
                        .then((res) =>
                            console.log(res),
                            fetchRecords()
                        )
                        .catch((err) =>
                            console.log(err.response.data)
                        )
                } catch {
                    alert("Something wrong")
                }
            }
        } else {
            console.log("world")
        }
    }
    console.log(records)
    const renderRecords = () => {
        if (records == []) {
            return (<tr>
                <td>No Record</td>
            </tr>)
        } else {
            
            return records.map((record, key) =>
                <tr key={record.id} className="d-block py-3">{record.borrower.name}(id-{record.borrower.unique_id}) borrowed {record.book.name} at {record.borrowed_from_date }
                    <td><button onClick={()=> lost(record.id)} className="btn btn-danger">Lost</button></td>
                    <td><button onClick={() => returnBook(record.id)} className="btn btn-primary">Return</button></td>
                    {new Date(record.borrowed_to_date) <= new Date() ? <td><ToContact
                        className="btn btn-success"
                        borrower_name={record.borrower.name}
                        borrower_email={record.borrower.email}
                        borrower_phone_no={record.borrower.phone_no}
                        borrower_unique_id={record.borrower.unique_id}
                        borrower_id={record.borrower_id}
                    
                    >Contact</ToContact></td> : ""}
                </tr>
            )
        }
    }
    return <AppContainer title="Book Records">
        <div className="container">
            <h3>{header.header} <button className="btn btn-outline-danger" onClick={() => alertRecords()}>Click to see { header.button}</button></h3>
            <div className="row justify-content-center">
                
                <div className="col-md-12">
                    <div className="card-body">
                    <table className="table table-striped">
                        <tbody>
                        {renderRecords()} 
  
                        </tbody>
                        </table>
                      
                        
                    </div>
                </div>
            </div>
        </div>
        
    </AppContainer>
}
export default BookRecord;