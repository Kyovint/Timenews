/*import React, {useState} from 'react';
import Weather from './Weather';

export function Sbar(){

    const [query, setQuery] = useState('');

    const searchw = evt => {
        if (evt.key === "Enter") {
          fetch(`${Weather.api.base}weather?q=bogota&units=metric&APPID=${Weather.api.key}`)
            .then(res => res.json())
            .then(result => {
              Weather.setWeather(result);   
              Sbar.setQuery('');
              console.log(result);
            });
        }
      }

    return(
        <div>
            <div>
                <div className="row" style={{justifyContent:'center'}}>
                    <div className="form-group col-md-12">
                    <input  type="text" placeholder="Search..."
                     onChange={e => setQuery(e.target.value)} value={query} onKeyPress={searchw}/>
                    </div>
                </div>
            </div>

        </div>
        
    );
}

export default Sbar;*/