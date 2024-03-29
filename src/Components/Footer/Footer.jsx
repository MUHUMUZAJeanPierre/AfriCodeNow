import {FaLocationArrow, FaPhone, FaEnvelope, FaTwitter, FaFacebook, FaYoutube, FaLinkedin,FaChevronRight} from 'react-icons/fa'
import pic1 from '../../assets/e.jpg'
function Footer() {
  return (
    <div style={{backgroundColor:"#103741",color:"#889BA0"}}>
    <div style={{display:"flex",width:"100%",flexWrap:"wrap",justifyContent:"space-evenly",padding:30}}>
      <div style={{width:400,display:"flex",flexDirection:"column",gap:5}}>
        <h3 style={{fontFamily:"",color:"whitesmoke",fontWeight:"bold",fontSize:20,marginBlock:20}}>Get In Touch</h3>
        <div style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
          <FaLocationArrow />
          <p>123 Street, New York, USA</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
          <FaPhone  />
          <p>+ 012 345 67890</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
          <FaEnvelope />
          <p>info@example.com</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:7,paddingBlock:30}}>
          <div style={{width:40,height:40,borderWidth:1,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",borderColor:"gray"}}>
            <FaTwitter color='whitesmoke' />
          </div>
          <div style={{width:40,height:40,borderWidth:1,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",borderColor:"gray"}}>
            <FaFacebook color='whitesmoke' />
          </div>
          <div style={{width:40,height:40,borderWidth:1,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",borderColor:"gray"}}>
            <FaYoutube color='whitesmoke' />
          </div>
          <div style={{width:40,height:40,borderWidth:1,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",borderColor:"gray"}}>
            <FaLinkedin color='whitesmoke' />
          </div>
        </div>
      </div>

      <div style={{width:400,display:"flex",flexDirection:"column",gap:5,color:"#889BA0"}}>
        <h3 style={{color:"whitesmoke",fontWeight:"bold",fontSize:20,marginBlock:20}}>Quick Links</h3>
        <div style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
          <FaChevronRight />
          <p>About us</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
          <FaChevronRight />
          <p>Contact us</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
          <FaChevronRight />
          <p>Our services</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
          <FaChevronRight />
          <p>Privacy Policy</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
          <FaChevronRight />
          <p>Terms & conditions</p>
        </div>

      </div>
      <div style={{width:300}}>
        <h3 style={{color:"whitesmoke",fontWeight:"bold",fontSize:20,marginBlock:20}}>Photo Gallery</h3>
        <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
          <img src={pic1} alt="pic1" style={{width:80,height:80,borderRadius:20,borderWidth:4}}  />
          <img src={pic1} alt="pic1" style={{width:80,height:80,borderRadius:20,borderWidth:4}}  />
          <img src={pic1} alt="pic1" style={{width:80,height:80,borderRadius:20,borderWidth:4}}  />
          <img src={pic1} alt="pic1" style={{width:80,height:80,borderRadius:20,borderWidth:4}}  />
          <img src={pic1} alt="pic1" style={{width:80,height:80,borderRadius:20,borderWidth:4}}  />
          <img src={pic1} alt="pic1" style={{width:80,height:80,borderRadius:20,borderWidth:4}}  />
          {/* images */}
        </div>
      </div>
    </div>
    <hr style={{width:"90%",margin:"auto",color:"gray"}}/>
    <div style={{padding:30,display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center" ,width:"95%",margin:"auto"}}>
      <div style={{display:"flex",flexDirection:"row", color:"#889BA0",minWidth:600}}>

        <p>© </p>
        <a href='./'  style={{textDecoration:"underline"}} className='linkto'>Your site Name</a>
        <p>, All Right Reserved. Designed By</p>
        <a href='./' style={{textDecoration:"underline"}}>HTML index</a>

      </div>
      <div style={{color:"#889BA0"}}>
        <a href='' style={{borderRightWidth:1,borderColor:"gray",paddingInline:20}}>Home</a>
        <a href='' style={{borderRightWidth:1,borderColor:"gray",paddingInline:20}}>Cookies</a>
        <a href='' style={{borderRightWidth:1,borderColor:"gray",paddingInline:20}}>Help</a>
        <a href=''  style={{paddingInline:20}}>FAQs</a>

      </div>


    </div>
    </div>
  )
}

export default Footer