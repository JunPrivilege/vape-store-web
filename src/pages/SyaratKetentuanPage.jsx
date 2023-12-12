import { Container, Row, Col } from "react-bootstrap";

const SyaratKetentuanPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Syarat dan Ketentuan</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Diharapkan untuk membaca terlebih dahulu syarat dan ketentuan kami sebelum membeli produk, terimakasih
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <h2 className="fw-bold">1. Usia Pembeli</h2>
              <ul>
                <li>Pembeli harus berusia minimal 18 tahun.</li>
                <li>Proses verifikasi usia akan dilakukan sebelum penyelesaian pembelian.</li>
              </ul>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <h2 className="fw-bold">2. Pendaftaran Pelanggan</h2>
              <ul>
                <li>Pelanggan diharuskan mendaftar akun sebelum melakukan pembelian.</li>
                <li>nformasi pribadi pelanggan akan disimpan dengan aman dan dirahasiakan.</li>
              </ul>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <h2 className="fw-bold">3. Kebijakan Pengembalian dan Garansi</h2>
              <ul>
                <li>Produk yang dapat dikembalikan hanya dalam kondisi tertentu, seperti cacat pabrik.</li>
              </ul>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <h2 className="fw-bold">4. Pembayaran</h2>
              <ul>
                <li>Metode pembayaran untuk saat ini hanya bisa COD (Cash Or Duel).</li>
              </ul>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <h2 className="fw-bold">5. Ketentuan Penggunaan Website</h2>
              <ul>
                <li>Pengguna harus mematuhi ketentuan penggunaan website atau aplikasi.</li>
                <li>Data pelanggan akan digunakan sesuai dengan kebijakan privasi yang telah ditetapkan.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SyaratKetentuanPage;
