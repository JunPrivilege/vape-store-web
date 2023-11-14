import { Container, Row, Col, Button } from "react-bootstrap"

import Banner from '../assets/images/banner.jpg'
import backgroundImage from '../assets/images/background.png'

import { productTerbaru } from "../data"

import { useNavigate } from "react-router-dom"
import { Card } from "primereact/card"

const HomePage = () => {
  let navigate = useNavigate();
  
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">Choose Your <br /> <span>Vapes Category</span> <br /> Here !</h1>
              <p className="mb-4">The best vape store this year with more than<br />five thousand trusted customers.</p>
              <button className="btn btn-outline-danger mb-xs-0 mb-2">Explore Now!</button>
            </Col>
            <Col lg="6" className="text-center pt-lg-0 pt-5">
              <img src={Banner} alt="banner-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="product w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Product Terbaru</h1>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {productTerbaru.map((product) => {
              return (
              <Card key={product.id}>
                <img src={product.image} className="mb-3 rounded-top"/>
                <div className="star mb-2">
                  <i className={product.star1}></i>
                  <i className={product.star2}></i>
                  <i className={product.star3}></i>
                  <i className={product.star4}></i>
                  <i className={product.star5}></i>
                </div>
                <h5 className="mb-2">{product.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center mt-3">
                  <p className="m-0 text-danger fw-bold">{product.price}</p>
                  <button className="btn btn-danger rounded-1">{product.buy}</button>
                </div>
              </Card>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <Button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate('/product')}>Lihat Semua Product
              <i className="fa-solid fa-chevron-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage