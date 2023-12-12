import React, { useState } from "react";
// import { Accordion } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import { Accordion, AccordionTab } from "primereact/accordion";

import { faq } from "../data";

function FaqComponent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
              Pertanyaan yang sering ditanyakan
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion activeIndex={activeIndex}
                onChange={handleAccordionChange}
                 className="shadow-sm">
                  <AccordionTab header={data.title}>
                    <p className="m-0">{data.desc}</p>
                  </AccordionTab>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default FaqComponent;
