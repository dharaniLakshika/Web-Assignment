import React from 'react';
import './MainContent.css';
import percentage from '../Assets/percentage.png';
import ChartComponent from '../Components/ChartComponent';
import goals from '../Assets/goals.jpg';
import circleArrow from '../Assets/circle-arrow.png';
import netbowl from '../Assets/netbowl.png';
import populardish from '../Assets/populardish.png';
import jenny from '../Assets/jenny.png';
import diane from '../Assets/diane.png';
import devone from '../Assets/devone.png';
import star from '../Assets/star.png';
import order from '../Assets/order.png';
import delivered from '../Assets/delivered.png';
import Cancelled from '../Assets/cancelled.png';
import Revenue from '../Assets/revenue.png';
import uparrow from '../Assets/uparrow.png';
import downarrow from '../Assets/downarrow.png';

function MainContent() {
  return (
    <div className="main-content">
      <h3 className="heading">Dashboard</h3>
      <div className="card-container">
        <div className="card">
          <div className="small-card">
            <div style={{width:"0.5rem"}}> 
              <img src={order} style={{paddingRight:"2rem",width:"45px"}} /></div>
           
          </div>
          <div className="paragraph">
            <p>Total Orders</p>
          </div>
          <div style={{paddingTop:"1rem"}}>
          <span style={{color:"white",fontWeight:"bolder",fontSize:"24px"}}>75&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span>
  <img src={uparrow} alt="arrow" />
  <span  style={{color:"green"}}>  3%</span>
 

</span>
 </div>
</div>
         
   
        <div className="card">
          <div className="small-card">
            <img src={delivered}style={{paddingRight:"2rem",width:"55px"}}  />
          </div>
          <div className="paragraph">
            <p>Total Revenue</p>
          </div>
          <div style={{paddingTop:"1rem"}}>
          <span style={{color:"white",fontWeight:"bolder",fontSize:"24px"}}>70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span>
  <img src={downarrow} alt="arrow" />
  <span  style={{color:"green"}}>  3%</span>
 

</span>
 </div>
        </div>
        <div className="card">
          <div className="small-card">
          <img src={Cancelled}style={{paddingRight:"2rem",width:"55px"}}  />
          </div>
          <div className="paragraph">
            <p>Total Products</p>
          </div>
          <div style={{paddingTop:"1rem"}}>
          <span style={{color:"white",fontWeight:"bolder",fontSize:"24px"}}>05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span>
  <img src={uparrow} alt="arrow" />
  <span  style={{color:"green"}}>  3%</span>
 

</span>
 </div>
        </div>
        <div className="card">
          <div className="small-card">
          <img src={Revenue}style={{paddingRight:"2rem",width:"55px"}}  />
          </div>
          <div className="paragraph">
            <p>Total Vehicles</p>
          </div>
          <div style={{paddingTop:"1rem"}}>
          <span style={{color:"white",fontWeight:"bolder",fontSize:"24px"}}>$12k&nbsp;&nbsp;&nbsp;</span>
<span>
  <img src={downarrow} alt="arrow" />
  <span  style={{color:"green"}}>  3%</span>
 

</span>
 </div>
        </div>
        <div className="card-length">
          <div className="paragraph1">
            <span>
              <p className="para1">Net Profit</p>
            </span>
          </div>
          <div className="paragraph2">
            <h1 className="dollar-value">$6795.25</h1>
            <img src={percentage} className="image-percentage" alt="percentage" />
          </div>
          <div className="paragraph2">
            <div className="percentage1 "><img src={uparrow}/> 3%<span>*The Value here has been rounded off</span>
        </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div>
          <ChartComponent />
        </div>
        <div className="card-section1">
          <div className="text">
            <span className="text-content">
              <img src={goals} alt="Goals" style={{ width: "70px", height: "55px" }}/>
              <p>Goals</p>
            </span>
            <img src={circleArrow} alt="circleArrow" style={{ width: "70px", height: "65px" }} />
          </div>
          <div className="text">
          <span className="text-content" >
          <img src={netbowl} alt="Goals" style={{ width: "70px", height: "55px" }}/>
            <p>Popular Dishes</p>
            </span>
            <img src={circleArrow} alt="circleArrow" style={{ width: "70px", height: "55px" }} />
          </div>
          <div className="text">
          <span className="text-content" style={{paddingLeft:"10px"}}>
          <img src={populardish} alt="Goals" style={{ width: "60px", height: "55px" }}/>
            <p>Menus</p>
            </span>
            <img src={circleArrow} alt="circleArrow" style={{ width: "70px", height: "65px" }} />
          </div>
        </div>
      </div>

      <div className="card-container">
    
          <div className="card-section2">
  <p className="para3">Recent Orders</p>
  <table className="order-table">
    <thead>
      <tr>
        <th>Customer</th>
        <th>Order No</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      
        <td> <img src={jenny} alt="Goals" style={{ width: "24px" }}/>Wade Waren</td>
        <td>15478256</td>
        <td>$124.0</td>
        <td><button className="success-button">Delivered</button></td>
      </tr>
      <tr>
        <td><img src={devone} alt="diane" style={{ width: "24px" }}/>Jane Cooper</td>
        <td>48965788</td>
        <td>$365.02</td>
        <td><button className="success-button">Delivered</button></td>
      </tr>
      <tr>
        <td><img src={diane} alt="diane" style={{ width: "24px" }}/>Gawy Hawkins</td>
        <td>78958215</td>
        <td>$45.88</td>
        <td><button className="pending-button">Cancelled</button></td>
      </tr>
      <tr>
        <td><img src={devone} alt="diane" style={{ width: "24px" }}/>Kristin Watson</td>
        <td>20965732</td>
        <td>$65.00</td>
        <td><button className="pending-button">Pending</button></td>
      </tr>
      <tr>
        <td><img src={diane} alt="diane" style={{ width: "24px" }}/>Cody Fisher</td>
        <td>95715620</td>
        <td>$545.00</td>
        <td><button className="success-button">Delivered</button></td>
      </tr>
      <tr>
        <td><img src={jenny} alt="Goals" style={{ width: "24px" }}/>Saravannah Nguyen</td>
        <td>78514568</td>
        <td>$128.20</td>
        <td><button className="success-button">Delivered</button></td>
      </tr>

    </tbody>
  </table>
</div>      
       <div className="card-section3">
  <p className="para3">Customer's Feedback</p>
  <table className="customer-table">
    <thead>
      <tr className='customer-table'>
        <th><img src={jenny} alt="Goals" style={{ width: "40px" }}/>Jenny Wilson
</th>
        </tr>
    
   <img src={star} alt="Goals" style={{paddingRight:"420px" }}/> 
  
  
   <p className='para6'>The food was excellent and so was the service.I had themushroom risotto  with scallops which was awesome.I had a burger over greens (gluten-free) which was also very&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; good.They were very consious about gluten allergies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
   

    </thead>
    
   
  </table>
   <hr/>
   <tr className='customer-table'>
        <th> <img src={diane} alt="diane" style={{ width: "40px" }}/>Dianne Russel</th>
        </tr>
        <img src={star} alt="Goals" style={{paddingRight:"420px" }}/> 

    <p className='para7'>We Enjoyed the Eggs Benedict served as home made foccaciabread and hot&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; coffee.Perfect Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
    <hr/>
    <tr className='customer-table'>
        <th> <img src={devone} alt="diane" style={{ width: "40px" }}/>Dianne Russel</th>
        </tr>
        <img src={star} alt="Goals" style={{paddingRight:"420px" }}/> 

    <p className='para7'>We Enjoyed the Eggs Benedict served as home made foccaciabread and hot&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; coffee.Perfect Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
    <hr/>
</div>
   
      </div>
    </div>
  );
}

export default MainContent;
