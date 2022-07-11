import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

// molecules
import FormHeader from "../components/molecules/FormHeader";

// organisms
import FormLogin from "../components/organisms/FormLogin";

function App() {
  return (
    <div className="container-fluid ps-md-0 overflow-hidden">
      <div class="row g-0w">
        
       
        {/* Form layout */}
        <FormLogin />
      
      </div>
    </div>
  );
}

export default App;