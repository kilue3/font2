import React, { useState, useEffect } from "react";
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter ,
  FormGroup,
  Col,
  Form,
  Card,
  Input,
  Row,
} from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import API from "../../API/API";

const Op_bill = ({ props }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const [Invoice, setInvoice] = useState("");
 ///////////////////localstate///////////
 const session = {
  id: localStorage.getItem("id"),
  fname: localStorage.getItem("fname"),
  uname: localStorage.getItem("uname"),
  conname:localStorage.getItem("conname"),
  status: localStorage.getItem("status"),
};
const [ses, setSes] = useState(session);
  useEffect(() => {
    axios.get(API("Getstoreinvoice") + ses.uname).then((response) => {
      setInvoice(response.data);
    });
  }, []);
//////////////////////////////ดึงข้อมูลบิล///////////////////////////////////
  const [Invoicedt, setInvoicedt] = useState([]);
  const CheckIds = (e) => {
    e.preventDefault();

    var id = bill.bill_id;
    if (id != "") {
      axios
        .get(API("GetInvoicedt") + id) //ส่งค่าไปแอดใน DB
        .then((res) => {
          setInvoicedt(res.data);
         
        });
    } else {
      Swal.fire("เแอด user ล้มเหลว", "ไม่พบรายชื่อระบบ", "warning");
    }
  };

///////////date///////////////////////
const date = new Date();  // 2009-11-10
const month = date.toLocaleString('th-TH', {
    year: 'numeric',
    month: 'long',
  });
console.log(month);

  const inputdata = (event) => {
    let { name, value } = event.target;
    setbill({ ...bill, [name]: value });
  };
 
  const logs = {
    bill_id: "",
    
  };
 
  const [bill, setbill] = useState(logs);
  /////////////delectuser////////////////
  const opbill = (e,Invoicedts) => {
    e.preventDefault();

    var data = {
      bill_id: Invoicedts.Invoice,
      bill_detail: "",
      store_id: ses.id,
      number: Invoicedts.BillAmount,
      AmountCur: Invoicedts.AmountCur,
      SumTax: Invoicedts.SumTax,
      Bpc_Mark: Invoicedts.Bpc_Mark,
      Bpc_BillFinish: Invoicedts.Bpc_BillFinish,
      duedate:  Invoicedts.duedate


    };
   
      
    
                    axios.post(API("Addbills"), data) //ส่งค่าไปแอดใน DB
                  .then((res) => {
                    console.log(res.data.message);
                    if (res.data.message == "success") {
    
                      Swal.fire(
                        "เปิดบิลสำเร็จ",
                        "กรุณาไประบุรายละเอียดบิล",
                       "success"
                      )
                      .then(() => window.location.reload());
                    } else{
                      Swal.fire(
                        "เปิดบิลล้มเหลว",
                        "หมายเลขบิลนี้ได้เเจ้งเปิดบิลแล้ว",
                        "warning"
                      );
                      // .then(() => window.location.reload())
                    }
                  })
    
                  .catch((error) => {
                    console.log("error");
                  }); //ใช้ ดัก Error
             
      
    
}

  return (
    <div style={{ marginTop: "0px", marginLeft: "10px" }}>
      <Row>
        <Col sm="12">
          {" "}
          <Button
            color="danger"
            size="lg"
            className="Button-Style"
            onClick={toggle}
            block
          >
            ยื่นวางบิล{" "}
          </Button>
        </Col>
      </Row>

        <Modal isOpen={modal} toggle={toggle}  fullscreen={true} >
          <ModalHeader toggle={toggle}>ยื่นเรื่องวางบิล </ModalHeader>
          <ModalBody>
            <FormGroup align="left">
              <h3 for="more_detail">ยื่นวางบิลประจำเดือน {month}</h3>

              <Form align="right">
          <ModalBody>
            <FormGroup align="left">
              <Card className="CardBackground-1">
             {ses.fname}<br></br>
                เลขเอกสาร (เฉพาะใบเบิก)
                <Input type="select" name="bill_id" placeholder="กรุณากรอกเลขใบเบิก" onChange={inputdata} >
                <option>กรุณาเลือกหมายเลขบิล</option>
               {Invoice == ""?
               
               (<>
        <option>ไม่พบหมายเลขบิลในระบบ</option>
</>):
               
               
               (<>
               {Invoice.map((lists) => {
                return (
                  <>
                    
                      <option key={lists.Invoice}>{lists.Invoice}</option>

                      
                  </>
                );
              })}</>)}
                
                </Input>
                
                <br></br>
                <Button
                      color="primary"
                      className="Button-Style"
                      block
                      size="md"
                      onClick={(e) => CheckIds(e)}
                    >
                      ดึงข้อมูล
                    </Button>{" "}

                    {Invoicedt == ""  ? (
              <>
                
              </>
            ) : (
              <>
              {Invoicedt.map((Invoicedts) => {
                  return (
                    <>
                     
                      <hr></hr>
                      <h4> เลขที่เอกสาร :{Invoicedts.Invoice}</h4>
                      <hr></hr>
                      <b>วันครบกำหนด :</b>{Invoicedts.duedate} 
                      <br></br>
                     <b> ภาษี :</b> {Invoicedts.SumTax} บาท <br></br>
                     <b> ยอดวางบิล :</b> {Invoicedts.BillAmount} บาท
                      <br></br>
                   
                      

                      <hr></hr>
                      <Button
                        color="success"
                        className="Button-Style col-12"
                        size="md"
                        onClick={(e, a) =>opbill(e,Invoicedts)}>
                        ตกลง
                      </Button>
                    </>
                  );
                })}</>
            )}


                    
              </Card>
            </FormGroup>
            <div align="right">
              <div style={{ maxWidth: "250px" }}></div>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button
              color="primary"
              className="Button-Style"
              size="md"
              onClick={(e) =>opbill(e)}
            >
              ตกลง
            </Button> */}
            <Button
              color="danger"
              className="Button-Style"
              size="md"
              onClick={toggle}
            >
              ปิด
            </Button>
          </ModalFooter>
      </Form>
            </FormGroup>
            <div align="right">
              <div style={{ maxWidth: "250px" }}></div>
            </div>
          </ModalBody>
         
        </Modal>
    </div>
  );
};

export default Op_bill;
