import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../dist/css/Home.css";

import backgroundTT from "../img/1.png";
import Layanan1 from "../img/7.png";
import Layanan2 from "../img/8.png";
import Layanan3 from "../img/15.png";
import Layanan4 from "../img/11.png";
import FotoAplikasi from "../img/14.png";
import FotoUlasan from "../img/10.png";
import BlogSpot from "../img/16.png";
import TentangKami from "../img/17.png";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="home">
      {/* Header Section */}
      <header
        className="w-100 min-vh-100 background-image"
        style={{
          backgroundImage: `url(${backgroundTT})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col className="text-center">
              <h1>AGRIWAVE</h1>
              <p>MENGARUNGI OMBAK PERTANIAN MENUJU KESEJAHTERAAN</p>
              <button className="button-home-page-download">DOWNLOAD</button>
            </Col>
          </Row>
        </Container>
      </header>
      <br />
      <div className="homeb1">
        <Container className="layanan">
          <div>
            <Row className="text-center">
              <Col>
                <h1 className="fw-bold">Layanan Yang Kami Sediakan</h1>
              </Col>
            </Row>
          </div>
          <div className="homeb2">
            <Row className="justify-content-center">
              {[
                {
                  src: Layanan1,
                  title: "Toko",
                  description: "Menyediakan berbagai macam produk pertanian",
                },
                {
                  src: Layanan2,
                  title: "Pelatihan",
                  description:
                    "Sarana bagi masyarakat dalam industri pertanian",
                },
                {
                  src: Layanan3,
                  title: "Informasi",
                  description: "Menyediakan konten yang informatif",
                },
                {
                  src: Layanan4,
                  title: "Diskusi",
                  description: "Forum untuk pengguna berbagi pengetahuan",
                },
              ].map((service, index) => (
                <Col key={index} md={6} lg={3}>
                  <div className="layanan-container text-center">
                    <img src={service.src} alt={service.title} />
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
      <br />
      <div className="homeb3">
        <Container className="deskripsi">
          <Row className="align-items-center">
            <Col md={6} sm={12}>
              <img
                src={FotoAplikasi}
                alt="Aplikasi Agriwave"
                className="img-fluid"
              />
            </Col>
            <Col md={6} sm={12}>
              <div className="homeb20">
                <h2>Tentang Aplikasi Agriwave</h2>
                <p>
                  Agriwave juga dikenal sebagai aplikasi pertanian digital,
                  adalah perangkat lunak yang dirancang khusus untuk mendukung
                  petani dalam manajemen pertanian mereka. Aplikasi ini
                  menawarkan berbagai fitur dan fungsionalitas yang dirancang
                  untuk membantu petani meningkatkan produktivitas, efisiensi,
                  dan keberlanjutan pertanian mereka.
                </p>
                <h3>Keunggulan Aplikasi Agriwave</h3>
                <p>
                  Aplikasi ini memberikan panduan dan rekomendasi mengenai
                  manajemen tanaman, termasuk pemilihan bibit, pemupukan
                  tanaman, perawatan tanaman, dan waktu panen yang optimal.
                  Informasi ini membantu petani dalam mengoptimalkan hasil panen
                  mereka dengan meminimalkan risiko kerugian.
                </p>
                <button>SELENGKAPNYA</button>
                <br />
                <br />
                <button>PLAYSTORE</button>
                <button>APPSTORE</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div className="homeb4">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="homeb4">
                <h2 className="fw-bold text-center">Ulasan Produk</h2>
                <div className="d-flex align-items-center mb-4">
                  <div className="homeb5">
                    <img src={FotoUlasan} alt="Foto Ulasan" />
                  </div>
                  <div className="homeb6">
                    <h3>Brigitha Lauren</h3>
                    <p>Farmer, AgroHolding</p>
                  </div>
                </div>
                <p className="ulasan-text">
                  Pupuk organik dari larva Black Soldier Fly telah memberi hasil
                  luar biasa pada pertanian saya. Tanaman lebih subur dan
                  berbuah lebih banyak. Sangat direkomendasikan bagi mereka yang
                  mencari solusi alami dan efektif untuk pertanian
                </p>
                <div className="navigation-buttons">
                  <button>NEXT</button>
                  <button>NEXT</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div className="homeb7">
        <Container className="additional-content">
          <Row className="justify-content-center align-items-center">
            {[
              {
                title: "Kasgot Organik",
                description:
                  "Sebuah pupuk organik berkualitas tinggi hasil dari pencernaan larva maggot, untuk meningkatkan kesuburan tanah atau media tanam, membantu memperkaya nutrisi dan memperbaiki kualitas pertumbuhan tanaman.",
              },
              {
                title: "Pelatihan",
                description:
                  "Pelatihan bertanam dengan pupuk maggot untuk hasil panen yang optimal! Panduan menggunakan pupuk maggot untuk meningkatkan pertumbuhan tanaman.",
                buttonAction: () => navigate("/video"), // Add the navigation action here
              },
            ].map((content, index) => (
              <Col key={index} md={6} sm={12}>
                <div
                  className="additional-content-item text-center with-background"
                  style={{ backgroundImage: `url(${FotoAplikasi})` }}
                >
                  <div>
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                    {content.buttonAction ? (
                      <button onClick={content.buttonAction}>Tonton</button>
                    ) : (
                      <button>Selengkapnya</button>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <br />
      <div className="homeb8">
        <Container>
          <Row className="justify-content-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <Col key={index} md={4} sm={6}>
                <div className="blog-post">
                  <img src={BlogSpot} alt={`Blog Post ${index + 1}`} />
                  <div className="blog-info">
                    <p className="blog-date">Mei 16, 2024</p>
                    <h3 className="blog-title">
                      Meningkatkan Kesuburan Tanah Alami
                    </h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <br />
      <div
        className="homeb9"
        style={{ backgroundImage: `url(${TentangKami})` }}
      >
        <div className="overlay">
          <h2>Tentang Kami</h2>
          <p>
            Kami adalah sebuah platform pertanian yang berfokus pada pupuk
            maggot, marketplace, dan pelatihan pertanian. Dengan menyediakan
            pupuk maggot organik yang berkualitas, marketplace untuk jual-beli
            produk pertanian, dan pelatihan yang komprehensif tentang pertanian
            berkelanjutan, kami bertujuan untuk membantu petani meningkatkan
            hasil panen mereka secara alami dan berkelanjutan.
          </p>
          <p>
            Kami dapat berperan dalam memajukan industri pertanian menuju masa
            depan yang lebih cerah dan berkelanjutan.
          </p>
          <button>Selengkapnya</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
