 import amerImage from '../images/amerImage.jpg'
 import { person } from "../data.js";
export const Content=()=>{
    console.log(person);
 person.length?(
    person.map(
    (ele,index,arr)=>{
   return(
     <div className="amer-flex">
        <img className="img-avatar" src={ele.img}/>
        <div>
          <p>{ele.name }</p>
          <p>{ele.date} </p>
        </div>
      </div>
    )  ;
    }
)
 ):(
    <h2>There is no Dates Today</h2>
 );

} 

export default Content