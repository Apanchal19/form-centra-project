import React from 'react'

const AdditionalInformation
= () => {
  return (
    <div>
        <div class="container mx-auto max-w-7xl border-b">
  <h2 class="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">Additional Information</h2>
  
  {/* <div class="grid grid-cols-2 gap-3 px-2">
    
    <div>
      
      <div><div class="mb-4">
        <label for="field1" class="font-bold ">Additional Instructions for Installer:</label>
        <input type="textarea" id="field1" class="w-full border border-gray-300 rounded p-2" placeholder="Enter Field 1"></input>
      </div></div>
      
      
      <div>
        <div class="mb-4">
          <label for="field2" class="font-bold">Completion Notes if needed</label>
          <input type="textarea" id="field2" class="w-full border border-gray-300 rounded p-2" placeholder="Enter Field 2"></input>
        </div>
      </div>
      
     
      
    </div>
  </div> */}

  <div class="grid grid-cols-2 gap-3 px-2">
  <div>
    
    <div class="mb-4">
      <label for="field1" class="font-bold">Additional Instructions for Installer:</label>
      <input type="textarea" id="field1" class="w-full border border-gray-300 rounded p-2" placeholder="Enter Field 1"></input>
    </div>
  </div>

  <div>
    
    <div class="mb-4">
      <label for="field2" class="font-bold">Completion Notes if needed</label>
      <input type="textarea" id="field2" class="w-full border border-gray-300 rounded p-2" placeholder="Enter Field 2"></input>
    </div>
  </div>
</div>
</div>



    </div>
  )
}

export default AdditionalInformation