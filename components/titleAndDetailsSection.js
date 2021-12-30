import { config } from "../constants/config";

export default function TitleAndDescription() {
  return (
      <div className='flex-1 flex flex-col p-4 justify-center items-center'>
            <text className='text-center font-medium text-4xl text-gray-700 sm: text-xl md:text-4xl '>
             Welcome to {config.siteTitle}
            </text>        
            <br/>
            <text className='text-center font-semibold text-gray-500 w-3/4'>
            Styling the Image component is not
             that different from styling a normal  element, but there are a few guidelines to keep in mind:
            Pick the correct layout mode
            The image component has several different
            layout modes that define how it is sized on the page. 
            If the styling of your image isn't turning out the way you want, 
            consider experimenting with other layout modes.
            Target the image with className, not based on DOM structure
            Regardless of the layout mode used, the Image component will have
            a consistent DOM structure of one  tag wrapped by exactly one. For some modes, 
            it may also have a sibling  for spacing. These additional 
            elements are critical to allow the component to prevent layout shifts.
            The recommended way to style the inner  is to set the className 
            prop on the Image component to the value of an imported CSS Module. 
            The value of className will be automatically applied to the underlying element.  
            </text>  
            <br/>
      </div>
    )
}
