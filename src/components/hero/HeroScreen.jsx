import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const heroImages = require.context('../../assets', true)

export const HeroScreen = () => {

  const {heroeId} = useParams();

  const heroe = useMemo(()=> getHeroById(heroeId), [heroeId]);
  //const heroe = getHeroById(heroeId)

  const navigate = useNavigate();
  const handleReturn = () => {
    
      navigate( -1 );
  }
  

  if (!heroe) {
    return <Navigate to='/' />
  }
  


  return (
    <div className="row mt-5">

      <div className="col-4">

        <img 
            /* src={`/assets/${heroe.id}.jpg`}  */
            src={heroImages(`./${heroe.id}.jpg`)}
            alt={heroe.superhero} 
            className="img-thumbnail animate__animated animate__fadeInLeft" 
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">

          <h3>{heroe.superhero}</h3>
          <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> {heroe.alter_ego }</li>
              <li className="list-group-item"><b>Publisher:</b> {heroe.publisher }</li>
              <li className="list-group-item"><b>First appearance:</b> {heroe.first_appearance }</li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{heroe.characters}</p>

          <button
            className="btn btn-outline-info"
            onClick={handleReturn}
          >
            Regresar
          </button>
      </div>

    </div>
  )
}
