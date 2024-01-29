import './TititleTypeOne.css'

import victor from '../../../assets/victor.png'

function TititleTypeOne({className, Title, TitleTop}) {
  return (
    <div className={`titleTypeOne ${className}` }>
        <small>{TitleTop}</small>
        <div className="headeing-H">
            <div className="line"></div>
            <h2>{Title}</h2>
            <div className="line"></div>
        </div>
        <img src={victor} alt="" className='victor'/>
    </div>
  )
}

export default TititleTypeOne