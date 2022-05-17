import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';


import { useForm } from '../../hooks/useForm'
import { getHeroesByname } from '../../selectors/getHeroesByNames';
import { HeroCard } from '../hero/HeroCard';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search)

  const [value, handleInputChange]= useForm({
    searchText: q,

  })

  const {searchText} = value;
  const heroesFiltered =  useMemo(() => getHeroesByname(q), [q]);
 

  const handleSearch = (e)=>{
    e.preventDefault();
    navigate(`?q=${searchText}`)
    
  }

  return (
      <>
          <h1>Búsquedas</h1>
          <hr />

          <div className="row">
            
            <div className="col-5">
                <h4>Buscar</h4>
                <hr />

                <form onSubmit={handleSearch}>
                    <input 
                      type="text" 
                      placeholder="Buscar..."
                      className="form-control"
                      name="searchText"
                      autoComplete="off"
                      value={searchText}
                      onChange={handleInputChange}
                    />

                    <button 
                        type="submit"
                        className="btn btn-outline-primary mt-2 w-100"
                        onSubmit={handleSearch}
                    >
                        
                        Buscar...
                    </button>


                </form>
              
            </div>

            <div className="col-7">
                <h4>Resultados</h4>
                <hr />

                {
                  (q === '')
                      ? <div className="alert alert-info">Buscar un héroe </div>
                      : (heroesFiltered.length === 0)
                            && <div className="alert alert-danger">No hay resultados: {q} </div>
                }


                {
                  heroesFiltered.map( hero => (
                      <HeroCard
                          key={hero.id}
                          hero={hero}
                      />
                  ))
                }  
            </div>
          </div>

      </>
  )
}
