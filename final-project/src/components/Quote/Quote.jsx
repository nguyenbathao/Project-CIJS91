// Import Quote Css..........................
import './Quote.css';

// Import Props..............................
import TititleTypeTwo from '../UI/TititleTypeTwo/TititleTypeTwo';

// Import Data Props.........................
import { quoteData } from '../../data/dataBookStore';

function Quote() {
  return (
    <section className="Quote">
      <div className="container quote-container">
        <TititleTypeTwo Title={'Quote of the day'} Classname="quote-title" />
        {quoteData.map(({ quote, speaker }, index) => {
          return (
            <article key={index}>
              <p>{quote}</p>
              <h5>{speaker}</h5>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Quote;
