import React,{useState} from 'react';
import { Container } from "react-bootstrap";

function Showhidetab()
{
 const[showtab, setShowtab]= useState(1);

 const handletab = (e)=>{
  setShowtab(e);
    }
    return(
        <React.Fragment>
             <Container>
      <div className="row">
      <h3 className="mt-3 mb-3">Show Hide Div Content on button click in React js </h3>
        <div className="col-sm-12 bg-light">      
              
       <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
          <button className= {showtab===1? "nav-link active": "nav-link" }  onClick={()=>handletab(1)}>Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={ showtab===2 ? "nav-link active": "nav-link"}  onClick={()=>handletab(2)}>Profile</button>
          </li>

          <li class="nav-item" role="presentation">
            <button className={ showtab===3 ? "nav-link active": "nav-link"}  onClick={()=>handletab(3)}>Contact Us</button>
          </li>
      </ul>

      <div class="tab-content text-dark" id="pills-tabContent">

           {/* start tab 1*/} 
           <div  className= { showtab===1 ? "tab-pane fade show active":"tab-pane fade show"} > 
               <p>Tab 1 Content</p>
             <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
             </p>
          </div>
          {/* close tab 1*/} 


         {/* start tab 2*/} 
          <div  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} > 
           <p>Tab 2 Content</p>
           <p>Fill the form</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p> 
          </div>
          {/* close tab 2*/} 


           {/* start tab 3*/} 
           <div  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} > 
           <p>Fill the Contact Form</p>
         
          <p>
            Name: <input type="text" name='username' className='form-control'/>
          </p> 
          <p>
         <button className='btn btn-primary'>Submit</button>
          </p>
          </div>
          {/* close tab 3*/} 


     </div>

   </div>     
</div>
            </Container>

        </React.Fragment>
    );
}
export default Showhidetab;