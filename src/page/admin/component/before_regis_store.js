import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Form,
  Card,
  Row,
} from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import API from "../../API/API";

const Registerstore = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  /////////////resetpass////////////
  const log = {
    contactname: "",
    email: "",
    pass: "",
    storename: "",
    username: "",
    tel: "",
  };
  const [Users, setUsers] = useState(log);
  const inputdata = (event) => {
    let { name, value } = event.target;
    setUsers({ ...Users, [name]: value });
  };

  const register = (e) => {
    e.preventDefault();

    var data = {
      storename: Users.storename,
      username: Users.username,
      tel: Users.tel,
      email: Users.email,
      password: Users.pass,
      contactname: Users.contactname,
    };
    var minc = data.password.length;
    if (
      data.storename != "" ||
      data.username != "" ||
      data.tel != "" ||
      data.password != "" ||
      data.email != "" ||
      data.contactname != "" 
    ) {
      if (minc == 8) {
        axios
          .post(API("AddStore"), data) //ส่งค่าไปแอดใน DB
          .then((res) => {
            console.log(res.data.message);
            if (res.data.message == "success") {
              Swal.fire("แอด user สำเร็จ", "success").then(() =>
                window.location.reload()
              );
            } else {
              Swal.fire(
                "เแอด user ล้มเหลว",
                "ขื่อผู้ใช้นี้มีอยู่ในระบบอยู้แล้ว",
                "warning"
              );
              // .then(() => window.location.reload())
            }
          })

          .catch((error) => {
            console.log("error");
          }); //ใช้ ดัก Error
      } else {
        Swal.fire(
          "เปลี่ยนรหัสผ่านล้มเหลว",
          "กรุณาตั้งรหัสผ่าน 8 หลัก",
          "warning"
        );
      }
    } else {
      Swal.fire("เพิ่มผู้ใช้ใหม่ล้มเหลว", "กรุณากรอกข้อมูลให้ครบ", "warning");
    }
  };
  /////////////delectuser////////////////

  return (
    <div style={{ marginTop: "0px", marginLeft: "10px" }}>
      <Button
        outline
        color="info"
        size="md"
        style={{ marginBottom: 10 }}
        onClick={toggle}
      >
        เพิ่มบัญชีร้านค้าในระบบ
      </Button>

      <Form align="right">
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}> เพิ่มบัญชีร้านค้าในระบบ </ModalHeader>
          <ModalBody>
            <FormGroup align="left">
              <Card className="CardBackground-1">
                ชื่อร้านค้า
                <Input type="text" name="storename" onChange={inputdata} />
                Email
                <Input type="email" name="email" onChange={inputdata} />
                ชื่อผู้ใช้
                <Input type="text" name="username" onChange={inputdata} />
                ชื่อผู้ติดต่อ
                <Input type="text" name="contactname" onChange={inputdata} />
                รหัสผ่าน
                <Input
                  type="password"
                  name="pass"
                  min="8"
                  max="8"
                  onChange={inputdata}
                />
               
                Tel
                <Input type="text" name="tel" onChange={inputdata} />
              </Card>
            </FormGroup>
            <div align="right">
              <div style={{ maxWidth: "250px" }}></div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              className="Button-Style"
              size="md"
              onClick={(e) => register(e)}
            >
              ตกลง
            </Button>
            <Button
              color="danger"
              className="Button-Style"
              size="md"
              onClick={toggle}
            >
              ปิด
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
};

export default Registerstore;