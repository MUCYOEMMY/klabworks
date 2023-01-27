import Image from '../asset/images/image-web-3-desktop.jpg'
import Image1 from '../asset/images/image-retro-pcs.jpg'
import Image2 from '../asset/images/image-top-laptops.jpg'
import Image3 from '../asset/images/image-gaming-growth.jpg'
import './css/Index1.css'
const Index1 = () => {
  return (
    <div>
      <div className="container">
        <div className="items-1 item">
        <div className="subitem1 sub"><img src={Image} alt="" className='welcomeImg'/></div>
        <div className="subitem2 sub">
        <div className="xitem sub1">
        <div className="xxitem sub2"> <div className="paragraph1">
            The Bright Future of Web 3.0?
         </div></div>
         
         <div className="xxitem1 sub2">
         <div className="pic3 right"><img src={Image1} alt="" className='welcomeImg'/></div>
            <div className="text1 right ">01
            <div className="read1">Reviving Retro PCs</div>
            <div className="read2">What happens when old PCs are given modern upgrades?</div>
            </div>
         </div></div>
        <div className="xitem1 sub1">
        <div className="xxitem2 sub3"> <div className="paragraph2">
                We dive into the next evolution of the web that claims to put the power of the platforms back into
                the hands of the people. But is this really fulfilling its promise?<br/><br/><br/><br/>
                <button>R E A D &nbsp; M O R E</button></div></div>
               
                <div className="xitem sub3">
                <div className="pic3 right"><img src={Image2} alt="" className='welcomeImg'/></div>
            <div className="text1 right ">02
            <div className="read1">Top 10 Laptops of 2022</div>
            <div className="read2">Our best picks for various needs and budgets.</div>
            </div>
                </div>
                </div>

        </div>
        </div>
        <div className="items-2 item">
        <div className="xitems item1">
            {/* <div className="mainparagraph"> */}
                <h1>New</h1>
                <h2>Hydrogen vs Electric cars</h2>
                <h3>Will hydrogen-fueled cars ever catch up to EVs?</h3><hr/>
                <h2>The Downsides of AI Artistry</h2>
                <h3>What are the possible adverse effects of on-demand AI image generation?</h3>
                <hr/>
                <h2>Is VC funding Drying Up?</h2>
                <h3>Private funding by VC firms is down 50% YOY. We take a look at What that means.</h3>
             {/* </div> */}
             </div>

            <div className="xtems1 item1">  
            <div className="pic3 right"><img src={Image3} alt="" className='welcomeImg'/></div>
            <div className="text1 right ">03
            <div className="read1">The Growth of Gaming</div>
            <div className="read2">How the pandemic has sparked fresh opportunities.</div>
            </div>
            
            </div>

            
        </div>
        {/* 
        <div className="items-4 item">4</div>
        <div className="items-5 item">5</div> */}
      </div>
    </div>
  )
}

export default Index1
