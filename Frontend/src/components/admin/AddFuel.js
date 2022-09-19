//import react
import React from 'react'
// import useState and useEffect hooks
import {useState,useEffecr} from 'react'
//import axios
import axios from 'axios'
//import useNavigation to navigate to another page
import { useNavigate } from 'react-router-dom';

import grp from '../../img/fuel.webp'; 


function AddFuel() {

    //to navigate to anohter page or the same page
    const navigate=useNavigate();
  
    //use state to track state in function components
    const [Date, setDate]=useState("");
    const [amount, setamount]=useState("");
    const [Fname, setFname]=useState("");
    const [Ftype, setFtype]=useState("");
    const [price, setprice]=useState("");
   
 //handle the input data 
    
    //target.value use to get an input value from keyboard
    const HandleDate = (e)=>{
        e.preventDefault();
        setDate(e.target.value);
        
      }
  
      const HandleAmount = (e)=>{
        e.preventDefault();
        setamount(e.target.value);
        
      }
  
      const HandleFname = (e)=>{
        e.preventDefault();
        setFname(e.target.value);
        
      }
  
      const HandleFtype = (e)=>{
        e.preventDefault();
        setFtype(e.target.value);
        
      }  
  
      
      const Handleprice = (e)=>{
        e.preventDefault();
        setprice(e.target.value);
        
      }
     // clear all input values
     const handleInputChange = () => {
        setDate("")
        setamount("");
        setFname("");
        setFtype("");
        setprice("");
        
      }; 
  
 //handle the submit data
 const handleSubmit = async (e)=>{
    e.preventDefault();

   
    if(Date===''|| amount===''|| Fname===''||Ftype===''|| price===''){
        alert("Fill All The Details!!")

    }else {

        let newData={
            Date:Date,
            amount:amount,
            Fname:Fname,
            Ftype:Ftype,
            price:price
          }

      console.log("Sending Leave Requesting  Details...",newData);

      let data= await axios.post('http://localhost:5000/Fuel/Save',{
        Date:Date,
            amount:amount,
            Fname:Fname,
            Ftype:Ftype,
            price:price
      });

      

      console.log("Data saved: ",data);

      if(data.status !==200){
        alert("Data not added")
      }
      else{
    
        alert("Saving data............")
        navigate('/ViewAllFuel')
      }

    }


  }







  return (
    <div>


            <div style={{height:'80px', backgroundColor:"#00bfff", marginTop:'-20px'}}>
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>Add Fuel Details</h1>
                <div style={{height:'80px', backgroundColor:"#87ceeb", marginTop:'-50px', marginBottom:'5px'}}></div>


            </div>

            <br/>

            <div className='FORM2'style={{ marginTop: '40px', backgroundColor: "", padding:'10px 20% 10px 20%' }}>

           

                <form onSubmit={(e) => handleSubmit(e)}>
                

                  <table className='tableLeave' style={{border:"1px solid black", backgroundColor: ""}} >
                  <br/>

                <tr>
                 <td>
                    <div className='form-group'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Received Amount :</label><br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type='text' 
                        value={amount} 
                        placeholder="Please Enter The Amount In Litres"
                        className='form-control' 
                        style={{ marginBottom: '20px', marginLeft:'10px', marginRight:'20px' }} 
                        onChange={(e) => HandleAmount(e)} 
                        required='true' />
                        
                    </div>
                    
                    <br/>
                   
                    <div className='form-group'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Name of Fuel: </label><br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='text'
                         value={Fname} 
                         placeholder="Diesel / Petrol"
                         className='form-control' 
                         style={{ marginBottom: '20px', marginLeft:'10px', marginRight:'20px' }}
                         onChange={(e) => HandleFname(e)} 
                         required='true' />
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                   <br/>
                    
                    <div className='form-group'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Type of Fuel </label><br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <select 
                        type='text'
                        id='Ftype' 
                        value={Ftype} 
                        className='form-control' 
                        style={{ marginBottom: '20px', marginLeft:'10px' , marginRight:'20px'}} 
                        onChange={(e) => HandleFtype(e)}
                        required='true' >
                          <option value=" ">Choose Type</option>
                                      <option value="92 Octane">92 Octane</option>
                                      <option value="95 Octane">95 Octane</option>
                                      <option value="Super Diesel">Super Diesel</option> 
                                      <option value="Auto Diesel">Auto Diesel</option> 
                          </select>
                    </div>
                
                    <br/>
                 
                    <div className='form-group'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Price per Litre : </label><br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='text'
                         value={price} 
                         placeholder="Price In Rupees"
                         className='form-control' 
                         style={{ marginBottom: '20px', marginLeft:'10px' , marginRight:'20px'}}
                         onChange={(e) => Handleprice(e)} 
                         required='true' />
                    </div>
                    </td>
                    <td>
                    <br/>
                    <div className='form-group'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Date</label><br />
                        
                        <br/>
                        <input 
                        type='date' 
                        value={Date} 
                        className='form-control' 
                        style={{ marginBottom: '20px', width:'300px', marginLeft:'200px', marginRight:'20px' }} 
                        onChange={(e) => HandleDate(e)} 
                        required='true' />
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <div><img src={grp} class="img-fluid" alt="" width="600" height="1000" marginLeft="-100px" /></div>
                    </td>
                    </tr>
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type='submit' className='btn btn-success btn-lg' style={{marginLeft:"200px"}} > 
                        <i class="fa-solid fa-circle-check"></i>
                        &nbsp; Submit</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        
                        </td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-primary" style={{padding:'9px 9px',backgroundColor:'#3895d3', marginLeft:'10px'}}>
                        <a href="/ViewAllFuel"
                        style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
                        <i class="far fa-arrow-alt-circle-left"></i>&nbsp;View All Details</a>
                        </button>


                      </tr>
                   <br/><br/>
                  </table> 

                 
                  
                </form>
            </div>


    </div>
  )
}

export default AddFuel