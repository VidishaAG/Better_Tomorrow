import {React,useState} from 'react'
import user from '../assets/user.png'
import upvote from '../assets/upvote.png'
import {Link} from 'react-router-dom'
export const Card = (props) => {
  const [counter,setCounter] = useState(0);
  const [x,setX] = useState(0);
  const fun = () => {
    if(x===1){
      setX(0);
      console.log(x);
      setCounter( count => count - 1);
    }
    else if(x===0){
      setX(1);
      setCounter( count => count + 1);
    }

  }
  return (
    <div className="card">
      {/* TODO: 1. LINK PROFILE PHOTO AND NAME FROM DATABASE 2. MAKE STUFF CLICKABLE */}
      <div className="nameAndProfile"><img src={user} alt="user.png" width="30px" /><span>{props.name}</span></div>
      <div className="title"><h2>{props.heading}</h2></div>
      <div className="cardBody">
        <p>{props.description}</p>
      </div>
      <div className='doFlex'>
        <div className="votesAndComments">
          <input type="image" src={upvote} alt="upvote.png" className="upvoteImage" style={{width:"14px"}} onClick={fun} /><span className="upvoteCount">{counter}</span>
          <img className="comment" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-comment-chat-flatart-icons-solid-flatarticons-2.png"/>
        </div>
        
        <div className='btn'><Link to="/payment">Donate</Link></div>
      </div>
    </div>
  )
}
