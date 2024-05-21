import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header1 } from "../data";
import "../dist/css/Blog.css";

import Blog1 from "../img/blog1.png";
import Blog2 from "../img/blog2.png";
import Blog3 from "../img/blog3.png";

const BlogPage = () => {
  return (
    <div>
      <header
        className="blog-header"
        style={{
          backgroundImage: `url(${Header1.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1>AGRIWAVE</h1>
              <p>BLOG</p>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="blog-content">
        <Container>
          <Row>
            <Col md={4}>
              <Link to="/blog1" className="blog-link">
                <img src={Blog1} alt="Blog 1" />
                <div className="blog-info">
                  <h3>Judul Blog 1</h3>
                  <p>Tanggal: [Tanggal Blog 1]</p>
                  <p>Deskripsi: [Deskripsi Blog 1]</p>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/blog2" className="blog-link">
                <img src={Blog2} alt="Blog 2" />
                <div className="blog-info">
                  <h3>Judul Blog 2</h3>
                  <p>Tanggal: [Tanggal Blog 2]</p>
                  <p>Deskripsi: [Deskripsi Blog 2]</p>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/blog3" className="blog-link">
                <img src={Blog3} alt="Blog 3" />
                <div className="blog-info">
                  <h3>Judul Blog 3</h3>
                  <p>Tanggal: [Tanggal Blog 3]</p>
                  <p>Deskripsi: [Deskripsi Blog 3]</p>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogPage;
