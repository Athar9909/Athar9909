import { config } from "../constants/config";
import {theme} from '../constants/theme'


export default function ImageAndDescription({image, alt, isOpposite, heading, desc}) {
    
    
  return (<>
  <br/>
      <div className={`mx-4 rounded   ${isOpposite? 'bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400' :'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'}  r mx-auto my-4 grid grid-cols-1 md:grid-cols-2`}>
            {!isOpposite && <div className="p-4 flex flex-row justify-center items-center">
                <br/>
              <img
                style={{maxHeight:'400px'}}
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 drop shadow-lg rounded hover:shadow-pink-400`}
                  alt={alt}
                  src={image}
                  layout='responsive' 
                  />
                <br/>

            </div>}
            <div className="p-4 text-center">
            <text key={theme.heading1} className={`text-center font-medium text-4xl text-gray-700  sm: text-xl md:text-4xl `}>
            {heading}
            </text>    
            <br/>
            <br/>
            <div className="text-left">
            <text key={theme.paragraph} className={` font-normal ${ 'text-white' } w-3/4`}>
                {desc}
            </text> 
            </div> 
          </div>
          {isOpposite && <div className="p-4 flex flex-row justify-center items-center">
          <br/>
              <img
                style={{maxHeight:'400px'}}

                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 drop shadow-lg rounded hover:shadow-pink-400`}
                  alt={alt}
                  src={image}
                  layout='responsive' />
                <br/>
            </div>}
      </div>
      <br/>
      </>
    )
}
