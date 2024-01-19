import { Button, Card, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="my-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, molestiae quos. Nesciunt maiores accusantium blanditiis
            dolorem voluptates mollitia cumque illum? Praesentium harum corporis
            fugit consequatur esse pariatur nam mollitia ipsa!
          </p>
          <div className="d-flex gap-5">
            <Link
              to="/login"
              className="btn btn-primary"
              style={{ textDecoration: "none" }}
            >
              <FaSignInAlt /> Sign In
            </Link>
            <Link
              to="/login"
              className="btn btn-secondary"
              style={{ textDecoration: "none" }}
            >
              <FaSignOutAlt /> Register
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};
