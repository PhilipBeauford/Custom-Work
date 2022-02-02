import {React, useState} from 'react';
import { Switch } from '@headlessui/react'


const SwitchToggle = () => {
    const [enabled, setEnabled] = useState(false);


  return (
<div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex flex-col justify-center items-center">
  <h1 className= 'mb-10 text-4xl text-white font-semibold'>
      Trying Headless UI Switch!
  </h1>

  <div>
    <Switch checked={enabled} onChange={setEnabled}>
        <span className={`bg-white rounded-xl block shadow p-2 w-48 h-20 flex 
            ${enabled ? 'justify-end' 
                      : ''}`}>
            <span className={`block h-full w-20 rounded-md transform transition ease-in-out duration-200
                ${enabled ? 'bg-green-500' 
                          : 'bg-red-500'
                        }`}>

            </span>
        </span>
        {/* Either of these ways works */}
        
        {enabled ? 'I am enabled' : 'Not enabled'}

        {/* {enabled && 'I am enabled!'}
        {!enabled && 'NOT enabled'} */}
        
    </Switch>
  </div>
</div>
)

};

export default SwitchToggle;



