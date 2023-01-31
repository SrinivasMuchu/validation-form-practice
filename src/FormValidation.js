import React,{useState} from 'react';
import './Form.css'

function Scroll() {
  const [fn,setFn]=useState('');
  const [ln,setLn]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [url,setUrl]=useState('');
  const [num,setNum]=useState('');
  const [em,setEm]=useState(false);
  const [error, setError] = useState(false);

const HandleEmail=(e)=>{
  setEmail(e.target.value)
  if(!email.includes('@') &&
  !email.includes('.') &&
  !email.indexOf('@') !== 0){
    setEm(false);
  }
  else{
    setEm(true)
  }
}

const HandleSubmit=(e)=>{
  e.preventDefault();
  if(fn.length<=3||ln.length<=3||num.length!==10||password.length<=5||!em){
    alert("check the fields you entered");
    setError(true);
  }
  
  else{
    setError(false);
    alert('Your registered succesfully')
    

  }
  console.log(fn,ln,email,num,password,url)
}
  return (
    <div className='loginform'>
      <center> 
        <h1>Validtion form</h1>
      <form className='forms' style={{display:'block',justifyContent:'space-between'}}>
        <div className='div-container' style={{padding:'10px',margin:'50px',}}>
        <div >
        <label>First Name: &nbsp;</label>
        <input type='text' placeholder='Enter your First name' value={fn} onChange={e=>{setFn(e.target.value)}} style={{margin:'15px',}} required/>
        {error && fn.length<=3 ?<p>check first name</p>:''}
        </div>
        <div>
        <label>Last Name: &nbsp;</label>
        <input type='text' placeholder='Enter your last name' value={ln} onChange={e=>{setLn(e.target.value)}} style={{margin:'15px',}} required/>
        {error && ln.length<=3?<p>check last name</p>:''}
        </div>
        <div >
        <label>Email id: &nbsp;</label>
        <input type='email' placeholder='Enter your email id' value={email} onChange={HandleEmail} style={{margin:'15px',}} required/>
        {error && !email?<p>check first email</p>:''}
        </div>
        <div >
        <label>Phone Number: &nbsp;</label>
        <input type='number' placeholder='Enter your phone number' value={num} onChange={e=>{setNum(e.target.value)}} style={{margin:'15px',}} required/>
        {error && num.length!==10?<p>check Phone number</p>:''}
        </div>
        <div >
        <label>password: &nbsp;</label>
        <input type='password' placeholder='Enter your password' value={password} onChange={e=>{setPassword(e.target.value)}} style={{margin:'15px',}} required/>
        {error && password.length<=5?<p>check password</p>:''}
        </div>
        <div >
        <label>profile url: &nbsp;</label>
        <input type='url' placeholder='Enter your Profile url' value={url} onChange={e=>{setUrl(e.target.value)}} style={{margin:'15px',}} required/>
        {error && !url ?<p>check url</p>:''}
        </div>
       
        <div >
        <button type='submit'  className="btn btn-primary" style={{width:'50%'}} onClick={HandleSubmit}> submit </button>
        </div>
</div>
      </form>
      </center>
    </div>
  );
}

export default Scroll;
