// Import LatestArticle Css...............
import './LatestArticle.css';

// Import Title Props.....................
import TititleTypeOne from '../UI/TititleTypeOne/TititleTypeOne';

// Import Article Data.....................
import { lettestArticleData } from '../../data/dataBookStore';

// Import From React Router Dom.................
import { Link } from 'react-router-dom';

// Import React Icon............................
import { ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

function LatestArticle() {
  return (
    <section className="letestArticle">
      <div className="container latest-article-container">
        <TititleTypeOne Title={'Latest Article'} TitleTop={'Read our articles'} />

        <div className="latest-article-content">
          {lettestArticleData.map(
            ({ titLink, title, date, instLink, fbLink, twitaLink, inspiration, image }, index) => {
              return (
                <article className="latest-article">
                  <div className="article-image">
                    <img src={image} alt="" />
                  </div>
                  <div className="article-info">
                    <h5>{date}</h5>
                    <Link to={titLink}>
                      <h3>{title}</h3>
                    </Link>
                  </div>
                  <div className="latest-article-socials">
                    <p>{inspiration}</p>
                    <div className="article-social">
                      <a href={fbLink}>
                        <ImFacebook />
                      </a>
                      <a href={instLink}>
                        <FiInstagram />
                      </a>
                      <a href={twitaLink}>
                        <RiTwitterXLine />
                      </a>
                    </div>
                  </div>
                </article>
              );
            },
          )}
        </div>

        <Link to={'*'} className="btn btn-border">
          read all articles
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default LatestArticle;
