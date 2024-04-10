import React from 'react'

const SecondForm = () => {
  return (
    <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
      <div class="mx-40 max-w-2xl lg:text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome! Let's create your profile</p>
        <p class="pr-20 mt-6 text-lg leading-8 text-gray-600">Let others get to know you better! You can do these later</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="flex max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div class="relative pl-16">
            <dt class="text-sm text-xl font-bold leading-7 text-gray-900">
              Add an avatar
            </dt>
            <div class="col-span-full">
              <div class="mt-2 flex justify-center rounded-full border border-dashed border-gray-900/25 h-36 w-36">
                <div class="text-center">
                  <label for="file-upload" class="relative cursor-pointer">
                    <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    <svg id="upload-icon" class="mx-auto h-36 w-8 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                    </svg>                                
                  </label>
                </div>
              </div>
            </div>
            <dd class="mt-2 text-base leading-7 text-gray-600"></dd>
          </div>
          <div class="relative pt-16">
            <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Choose image</button>
            <dd class="mt-4 text-base font-bold leading-7 text-gray-400">> Or choose one of our defaults.</dd>
          </div>        
        </dl>
        <div class="relative pl-16">
          <dt class="text-sm text-xl font-bold leading-7 text-gray-900">
            Add your location
          </dt>
          <div class="mt-2">
            <input type="text" name="location" id="location" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 border-none ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter a location"/>
          </div>
          <hr/>
        </div>   
        <div class="mt-6 flex items-center pl-16">
          <button type="submit"
            class="rounded-md bg-pink-600 px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default SecondForm;