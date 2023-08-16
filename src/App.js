import {Button}  from "react-bootstrap";
import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  amerImage  from "./images/amerImage.jpg";
import person from "./data.js";
import { Header } from "./components/header.js";
import { Content } from "./components/content.js";
import { Footer } from "./components/footer.js";
import { useState,useEffect } from "react";
export default function App() {
const [personData,changePeronData]=useState(person);

useEffect(
  ()=>{
  changePeronData([]);
  },[]
)

const clearData=()=>{
  changePeronData([]);
}
const returnData=()=>{
  changePeronData(person);
}

  return (
<div className=" font color-body">
     <Container className="py-5">
{/* This is the jsut the header  */}
   <Header amerPerson={personData}></Header>
{/* This is the content */}
 <div className="rectangle">
 {
   personData.length?(
    personData.map(
    (ele,index,arr)=>{
   return(
     <div className="amer-flex">
        <img className="img-avatar" src={amerImage}/>
        <div>
          <p>{ele.name }</p>
          <p>{ele.date} </p>
        </div>
      </div>
    )  ;
    }
)
 ):(
    <h2 style={{textAlign:"center",padding:"10px"}}>لايــــــــــوجد اي مواعيد اليـوم</h2>
 )
 }
 </div>
{/* This is the Footer of this website */}
{<Footer onDelete={clearData} onShow={returnData} ></Footer>}
    </Container>
</div>
  );
}

