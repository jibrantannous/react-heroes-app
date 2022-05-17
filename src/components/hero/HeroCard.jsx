import { Link } from 'react-router-dom';

const heroImages = require.context('../../assets', true)



export const HeroCard = ({hero}) => {

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">

                <div className="col-4">
                    <img 
                        /* src={`./assets/${hero.id}.jpg`}  */
                        src={heroImages(`./${hero.id}.jpg`)}
                        alt={hero.superhero}
                        className="card-img" 
                    /> 
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{hero.superhero}</h5>
                        <p className="card-text">{hero.alter_ego}</p>
                        {
                            (hero.alter_ego !== hero.characters)
                                && <p className="text-muted">{hero.characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{hero.first_appearance}</small>
                        </p>

                        <Link to={`/hero/${hero.id}`}>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
