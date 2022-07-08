import './Icon.css';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import icon7 from '../images/icon7.png';
function Icon () {
    return (
        <div className="icon">
            <img src={icon1} alt="" />  
            <img src={icon2} alt="" /> 
            <img src={icon3} alt="" /> 
            <img src={icon4} alt="" /> 
            <img src={icon6} alt="" />
           
          
        </div>
    )
}
export default Icon;