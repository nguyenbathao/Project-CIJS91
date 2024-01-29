import './TititleTypeTwo.css'


import victor from '../../../assets/victor.png'

function TititleTypeTwo({Classname, Title}) {
    return (
        <div className={`titleTypeTwo ${Classname}` }>
            <h2>{Title}</h2>
            <img src={victor} alt="" className='victor'/>
        </div>
      )
    }

export default TititleTypeTwo