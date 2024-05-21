import { Container, Row, Col } from "react-bootstrap";
import { Header2 } from "../data";
import "../dist/css/Kontak.css";

const KontakPage = () => {
  return (
    <div className="kontakb1">
      <div>
        <header
          className=""
          style={{
            backgroundImage: `url(${Header2.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <Row>
              <Col>
                <h1>AGRIWAVE</h1>
                <p>KONTAK</p>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <br />
      <br />
      <div className="kontakb2">
        <div className="komponen">
          <Container className="kontenb1">
            <Row className="rowkonb1">
              <p>
                Kami di sini untuk membantu, dan kami senang mendengar dari
                anda! Apakah anda ada pertanyaan, komentar, atau hanya ingin
                chat, anda dapar menghubungi kami melalui form kontak di halaman
                ini, atau melalui telepon, email, atau media sosial.
              </p>
              <button>Via Support Chat</button>
              <button>Via Call</button>
              <button>Via Email</button>

              <form id="contactForm" action="submit.php" method="post">
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  placeholder="Nama"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  id="pesan"
                  name="pesan"
                  placeholder="Pesan"
                  required
                ></textarea>
                <button type="submit">Kirim</button>
              </form>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default KontakPage;
