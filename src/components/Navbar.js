import { Button } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src="ilogo.webp" alt="logo" />
      </div>
      <div>
        <Button className="antdbtn" type="primary">
          <Link to="/login">Login</Link>
        </Button>

        <Button className="antdbtn2" type="primary">
          <Link to="/signup">Signup</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
