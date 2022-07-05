import React, { useState, useEffect } from "react";
import StaffLeftMenu from "../../component/staff_page/left_menu";
import { Container, Card, Button, Table, Row, Col, CardBody } from "reactstrap";
import { Helmet } from "react-helmet";
import NavBar from "../../component/structure_global/navbar";
import axios from "axios";
import Info_store from "./component/info_store";
import API from "../API/API"
import Registerstore from  "./component/regis_store"
const title = "บัญชีร้านค้าในระบบทั้งหมด";

const Storepage = () => {
  const session = {
    id: localStorage.getItem("id"),
    fname: localStorage.getItem("fname"),
    uname: localStorage.getItem("username"),
    status: localStorage.getItem("status"),
  };
  const [ses, setSes] = useState(session);
  const [User, setUser] = useState([]);
  useEffect(() => {
    axios.get(API("Storelist")).then((response) => {
      setUser(response.data);
    });
  }, []);
  if (ses.status == "store" || ses.status == null) {
    window.location.assign("/");

}

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar />

      <div style={{ margin: 10 }}></div>
      <Container className="container-fluid TZS-Container">
        <Row>
          <Col lg="3" className="col-ContentSetting">
            <StaffLeftMenu />
          </Col>

          <Col lg="9" className="col-ContentSetting">
            <Card className="HeaderShadow">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb BreadcrumbStyle">
                  <li className="breadcrumb-item">
                    <a href="/adminpage">หน้าหลัก</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  บัญชีร้านค้าในระบบทั้งหมด
                  </li>
                </ol>
              </nav>
              <Card className="CardHeaderStyle">
                <Col md="6"></Col>
                <h5 style={{ margin: "0px" }}>
                  <img
                    className="header-1-Icon"
                    src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
                  />
                  บัญชีร้านค้าในระบบทั้งหมด
                </h5>
              </Card>
            </Card>

            <Card className="CardBackground-1" style={{ margin: 10 }}>
              <CardBody>
              {ses.status == "admin" ? (
                                      <Registerstore/>
                                      ) : (
                              ""
                            )}
              
                <Table bordered>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>ชื่อร้านค้า </th>
                      <th>ชื่อผู้ติดต่อ</th>
                      <th>สถานะ</th>
                      
                     
                      {ses.status == "admin"||ses.status == "normal" ? (
                          <th>รายละเอียดร้านค้า</th> ) : (
                              ""
                            )}
                    


                    </tr>
                  </thead>
                  <tbody>
                    {User.map((list) => {
                      return (
                        <>
                          <tr>
                            <th>{list.Store_id}</th>
                            <td>{list.Store_name}</td>
                            <td>{list.Contact_name}</td>
                            <td>{list.Store_status}</td>
                            <td> {ses.status == "admin" ||ses.status == "normal"? (
                              <Info_store id={list.Store_id} />
                            ) : (
                              ""
                            )}</td>
                           
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Storepage;
