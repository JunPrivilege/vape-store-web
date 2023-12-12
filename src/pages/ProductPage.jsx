import { Container, Row, Col } from "react-bootstrap";
import { semuaProduct } from "../data";
import { Card } from "primereact/card";

const ProductPage = () => {
  return (
    <div className="product-page min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Semua Product</h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
              Kami menawarkan berbagai produk vape, termasuk vaporizer, liquid
              vape dengan berbagai rasa, suku cadang, dan aksesori. Dengan
              pilihan produk terlengkap, Anda dapat memenuhi kebutuhan 
              Anda dengan mudah.
            </p>
          </Col>
        </Row>
        <Row>
          {semuaProduct.map((product) => {
            return (
              <Card key={product.id} className="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={product.delay}>
                <div className="justify-content-between">
                  <div className="div1 star mb-2">
                  <img src={product.image} className="mb-3 rounded-top" /> 
                    <i className={product.star1}></i>
                    <i className={product.star2}></i>
                    <i className={product.star3}></i>
                    <i className={product.star4}></i>
                    <i className={product.star5}></i>
                  <h5 className="mb-2">{product.title}</h5>
                  </div>
                  <div className="ket d-flex justify-content-between align-items-center mt-3">
                    <p className="m-0 text-danger fw-bold">{product.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {product.buy}
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
