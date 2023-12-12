import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const InstagramLink = () => {
    const instagramUrl = `https://www.instagram.com/falrizun/`;
  
    return (
      <a className="fa-brands fa-instagram" 
      href={instagramUrl} 
      target="_blank" 
      rel="noopener noreferrer"> 
      </a>
    );
  };

  const TwitterLink = () => {
    const TwitterUrl = `https://twitter.com/JunNickjack575`;
  
    return (
      <a className="fa-brands fa-twitter" 
      href={TwitterUrl} 
      target="_blank" 
      rel="noopener noreferrer"> 
      </a>
    );
  };

  const YoutubeLink = () => {
    const YoutubeUrl = `https://www.youtube.com/channel/UCoe7gzPlS03fKL0fN_x6Mow`;
  
    return (
      <a className="fa-brands fa-youtube" 
      href={YoutubeUrl} 
      target="_blank" 
      rel="noopener noreferrer"> 
      </a>
    );
  };

  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h5 className="fw-bold">About Us</h5>
            <p className="desc">
              Selamat datang di Junstore! <br/> Kami adalah tim yang
              berdedikasi untuk memberikan pengalaman belanja online terbaik
              kepada Anda. Sejak didirikan pada tahun 2023, <br/> kami
              telah berkomitmen untuk menyediakan produk berkualitas tinggi dan
              layanan pelanggan yang luar biasa.
            </p>
          </Col>
          <Col lg="3" className="mt-lg-0 mt-4">
            <h5 className="fw-bold">Contact Us</h5>
            <div className="no mb-1">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 857-5680-1162</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">tifalrizkyarjuna@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col lg="3" className="mt-lg-0 mt-5" >
          <h5 className="fw-bold">Social Media</h5>
          <div className="social">
            <TwitterLink />
            <InstagramLink />
            <YoutubeLink />
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Tifal Rizky Arjuna</span>, 
            All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
