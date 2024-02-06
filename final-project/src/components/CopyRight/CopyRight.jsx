// Import CopyRight Css....................
import './CopyRight.css';

// Import Footer Social Data....................
import { FootersLinksData } from '../../data/dataBookStore';

function CopyRight() {
  return (
    <div className="footer-copyright">
      <div className="container copyright-container">
        <p>© 2024. All rights reserved </p>
        <div className="footer-socials">
          {FootersLinksData.socials.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <item.icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
