import { useState } from 'react'

function App() {

  const [formdata,setformdata] = useState({
    firstname:"",
    lastname:"",
    email: "",
    city:"",
    state: "",
    country:"india",
    address:"",
    pincode:"",
    phone:"",
    comments:false,
    offers:false,
    candidates:false,
  })
  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setformdata((prev) => (
      {...prev, [name]:type === "checkbox" ? checked: value}
    ))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing the data....");
    console.log(formdata);
  }
  return (
    <>
    <div className='flex flex-col items-center mt-2'>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">First name</label>
        <br />
        <input type="text" placeholder='Sohith' name='firstname'
        id='firstname'value={formdata.firstname} onChange={changeHandler} className='outline p-1 '/>
        <br />
        <label htmlFor="lasttname">Last Name</label>
        <br />
        <input type="text" placeholder='Patha' name='lastname'
        id='lastname'value={formdata.lastname} onChange={changeHandler} className='outline p-1'/>
        <br />
        <label htmlFor="email">Email address</label>
        <br />
        <input type="email" placeholder='abcd@gmail.com' name='email'
        id ='email'value={formdata.email} onChange={changeHandler} className='outline p-1'/>
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input type="text" placeholder='Hyd' name='city'
        id='city'value={formdata.city} onChange={changeHandler} className='outline p-1'/>
        <br />
        <label htmlFor="state">State</label>
        <br />
        <input type="text" placeholder='Telangana' name='state'
        id='state'value={formdata.state} onChange={changeHandler} className='outline p-1'/>
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select name="country" id="country" value={formdata.country}  onChange={changeHandler} className='outline'>
          <option value="india">India</option>
          <option value="united states">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>
        <br />
        <label htmlFor="address">Address</label>
        <br />
        <input type="text" placeholder='4-3-11/2' name='address'
        id='address'value={formdata.address} onChange={changeHandler} className='outline p-1'/>
        <br />
        <label htmlFor="pincode">Zip/Postal code</label>
        <br />
        <input type="text" placeholder='505327' name='pincode'
        id='pincode'value={formdata.pincode} onChange={changeHandler} className='outline p-1'/>
        <br />
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input type="text" placeholder='9818423256' name='phone'
        id='phone'value={formdata.phone} onChange={changeHandler} className='outline p-1'/>
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className='flex'>
          <input type="checkbox" name="comments" id="comments" checked={formdata.comments} onChange={changeHandler}/>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someone posts a comment on a posting</p>
          </div>
          </div>
          <div className='flex'>
          <input type="checkbox" name="candidates" id="candidates" checked={formdata.candidates} onChange={changeHandler}/>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job</p>
          </div>
          </div>
          <div className='flex'>
          <input type="checkbox" name="offers" id="offers" checked={formdata.offers} onChange={changeHandler}/>
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer</p>
          </div>
          </div>
        </fieldset>
        <button className='bg-blue-600 text-white font-bold rounded py-2 px-4 my-2'>Save</button>
      </form>
    </div>
    </>
  )
}

export default App
