import React,{useState} from 'react'
import './Hero.css'




const Hero = () => {

  const [show,setShow]=useState(false)

  return (
    <>
 <div className="container">
		<form>
            <h1>ENTER YOUR SQL QUERY 😃</h1>
			<textarea></textarea>
		</form>
    <button className='go' onClick={()=>{
          setShow(true)
        }}>GO</button>
    <div className="result">
      {
        show?<><h1>Result</h1><br></br><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/table1-3.png"/></>:null
      }
    </div>
      
	</div>
    </>
  )
}

export default Hero