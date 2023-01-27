import Image from '../asset/image-web-3-mobile.jpg'
import './css/Body.css'
const Body = () => {
  return (
    <div className='maincontainer'>

    <div className="container"> 
    <div className='container2'>
    <div className="contaniner3"> <img src={Image} alt="" className='welcomeImg'/>
    <div className="container4">
           
           <div className="paragraph1">
            The Bright Future of Web 3.0?
         </div>
            
            <div className="paragraph2">
                We dive into the next evolution of the web that claims to put the power of the platforms back into
                the hands of the people. But is this really fulfilling its promise?<br/><br/><br/>
                <button>R E A D  M O R E</button></div></div></div></div>
             <div className="mainparagraph">
                <h1>New</h1>
                <h2>Hydrogen vs Electric cars</h2>
                <h3>Will hydrogen-fueled cars ever catch up to EVs?</h3><hr/>
                <h2>The Downsides of AI Artistry</h2>
                <h3>What are the possible adverse effects of on demand AI image generatin?</h3>
                <hr/>
                <h2>Is VC funding Drying Up?</h2>
                <h3>Private funding by VC firms is down 50% YOY. We take a look at What that means.</h3>
             </div>
             </div>
             <div className="footer">
               <div className="items-1 item">1</div>
               <div className="items-2 item">2</div>
               <div className="items-3 item">3</div>
               
               
             </div>

             </div>
  )
}

export default Body
