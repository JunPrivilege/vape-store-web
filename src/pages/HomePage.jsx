import { Container, Row, Col } from "react-bootstrap"
import Banner from '../assets/images/banner.jpg'
import backgroundImage from '../assets/images/background.png'

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <h1>Choose Your <br /> <span>Vapes Category</span> <br /> Here !</h1>
              <p>The best vape store this year with more than<br />five thousand trusted customers.</p>
              <button className="btn btn-outline-danger">Explore Now!</button>
            </Col>
            <Col className="text-center">
              <img src={Banner} alt="banner-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1>Kelas Terbaru</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore delectus exercitationem veritatis aperiam sequi consectetur, animi qui possimus blanditiis provident ipsam facere corporis consequatur ipsa dignissimos placeat quo minima quidem.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage