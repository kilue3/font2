import React, { useState, useEffect } from "react";
import StaffLeftMenu from "../../component/staff_page/left_menu";
import { Container, Card, Button, Table, Row, Col, CardBody } from "reactstrap";
import { Helmet } from "react-helmet";
import NavBar from "../../component/structure_global/navbar";
import axios from "axios";
import Info_user from "./info_user";
import API from "../API/API"
import Registerusers from  "./component/regis_user"
const title = "ผู้ใช้ในระบบทั้งหมด";

const Alluser = () => {
  const session = {
    id: localStorage.getItem("id"),
    fname: localStorage.getItem("fname"),
    uname: localStorage.getItem("username"),
    status: localStorage.getItem("status"),
  };
  const [ses, setSes] = useState(session);
  if (ses.status == "enable" || ses.status == null ) {
    window.location.assign("/");
  }

  const [User, setUser] = useState([]);
  const [normaluser, setnormaluser] = useState([]);

  useEffect(() => {
    axios.get(API("Showlistnameusers")).then((response) => {
      setUser(response.data);
    });
    axios.get(API("Allnormaluser")).then((response) => {
      setnormaluser(response.data);
    });    

  }, []);

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
            <Card className="HeaderShadow" >
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb BreadcrumbStyle">
                  <li className="breadcrumb-item">
                    <a href="/adminpage">หน้าหลัก</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    ผู้ใช้งานในระบบ
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
                  ผู้ใช้งานในระบบ
                </h5>
              </Card>
            </Card>

            <Card className="CardBackground-1" style={{ margin: 10 }}>
              <CardBody>
              {ses.status == "admin" ? (
                                      <Registerusers/>
                                      ) : (
                              ""
                            )}
                    
              <h4>รายชื่อแอดมิน</h4>
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th>ชื่อ-สกุล </th>
                      <th>ชื่อผู้ใช้ </th>
                      <th>สถานะ</th>
                      
                     
                      {ses.status == "admin" ? (
                          <th>รายละเอียดผู้ใช้</th> ) : (
                              ""
                            )}
                    


                    </tr>
                  </thead>
                  <tbody>
                    {User.map((list) => {
                      return (
                        <>
                          <tr>
                            <td key={list.id}>{list.fullname}</td>
                            <td>{list.username}</td>
                            <td>{list.status}</td>
                           {ses.status == "admin" ? (
                              <td>
                              <Info_user id={list.id} />
                              </td>
                            ) : (
                              <></>
                            )}
                           
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
                <h4>รายชื่อผู้ใช้ทั่วไป</h4>
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th>ชื่อ-สกุล </th>
                      <th>ชื่อผู้ใช้ </th>
                      <th>สถานะ</th>
                      
                     
                      {ses.status == "admin" ? (
                          <th>รายละเอียดผู้ใช้</th> ) : (
                              ""
                            )}
                    


                    </tr>
                  </thead>
                  <tbody>
                    {normaluser.map((normal) => {
                      return (
                        <>
                          <tr>
                            <td>{normal.fullname}</td>
                            <td>{normal.username}</td>
                            <td>{normal.status}</td>  {ses.status == "admin" ? (
                              <td>
                              <Info_user id={normal.id} />
                              </td>
                            ) : (
                              <></>
                            )}

                         
                           
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

export default Alluser;
