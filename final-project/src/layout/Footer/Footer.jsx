import './Footer.css';

import { FootersLinksData} from '../../data/dataBookStore'


import {Link} from 'react-router-dom'
import product from '../../common/product'

import CopyRight from '../../components/CopyRight/CopyRight'


const Footer = (props) =>{

    const productList = product()

    console.log(productList)


    return(
        <footer>
            <div className="container footer-container">
                <div>
                    <h4>About Us</h4>
                    <ul className="about-params param-links">
                        {
                            FootersLinksData.Aboutus.map(({link, linkname}, index)=>{
                                return(
                                    <li key={index}><Link to={link}>{linkname}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>

        <div>
          <h4>Discover Us</h4>
          <ul className="discover-params param-links">
            {FootersLinksData.Discover.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4>About Us</h4>
          <ul className="myAccount-params param-links">
            {FootersLinksData.Myaccount.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>

                <div>
                    <h4>Helps</h4>
                    <ul className="help-params param-links">
                        {
                            FootersLinksData.Help.map(({link, linkname}, index)=>{
                                return(
                                    <li key={index}><Link to={link}>{linkname}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <CopyRight/>
        </footer>
    )
}

export default Footer;
