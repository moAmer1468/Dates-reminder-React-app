import { Row,Col,Button } from "react-bootstrap";
import person from "../data";
export const Header=({amerPerson})=>{
    return (
        
   <Row className="justify-content-center" style={{fontSize:'40px'}}>
        <Col sm='8' className="py-4">
          <div className="">لديك {amerPerson.length} ميعـــــــــاد</div>
        </Col>
      </Row>
    
);
};
