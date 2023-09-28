import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="option program">
        <h3>Program Details</h3>
      </div>
      <div className="option application">
        <h3>Application Form</h3>
      </div>
      <div className="option workflow">
        <h3>Workflow</h3>
      </div>
      <div className="option preview">
        <h3>Preview</h3>
      </div>
    </div>
  );
};

export default Navbar;
