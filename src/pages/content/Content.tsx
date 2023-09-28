import Form from "../../components/form/Form";
import Navbar from "../../components/navbar/Navbar";
import "./content.scss";

const Content = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="buttonContainer">
          <button>Save & Continue</button>
        </div>
        <Navbar />
        <Form />
      </div>
    </div>
  );
};

export default Content;
