import { Row,Col,Button } from "react-bootstrap";
import person from "../data";
export const Footer=({onDelete,onShow})=>{
    return (
           <Row className="justify-content-center" style={{fontSize:'30px'}}>
          <Col sm='8' className="py-4">
          <div className="d-flex justify-content-between">
            <button className="btn-style" onClick={onShow}>عرض الكل</button>
            <button className="btn-style" onClick={onDelete}>مسح البيانات</button>
          </div>
          <h5 style={{margin:"2px auto",textAlign:"center"}}>محمد علاء عامر |  Mohamed Alaa amer</h5>
        </Col>
      </Row>
    );
}