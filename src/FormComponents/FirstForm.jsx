import React from 'react'
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const FirstForm = () => {

  const history = useHistory();

  const handleCreateAccount = () => {
    // Navigate to the SecondForm component
    history.push('/SecondForm');
  };

  // const handleCreateAccount = () => {
  //   <NavLink to =  "/SecondForm">
  //     to = "/SecondForm"
  //   </NavLink>
  // }
  

  return (
    <div class="flex space-x-4">
      <div>
        <img src="./001.png" alt="" class="h-full w-3/4"/>
      </div>

      <div class="flex pr-36 pt-20">
        <form>
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h1 class="text-base font-extrabold leading-7 text-left space-x-16 text-black-700 text-2xl">Sign up to Dribbble
                <li class=" text-base text-xs text-left font-medium pt-2 text-pink-500">Username has already been taken</li>
              </h1>
              <div class="mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-4">
                  <div class="flex items-center space-x-44">
                    <label for="name" class="block text-sm font-bold leading-6 text-gray-900">Name</label>
                    <label for="username" class="block text-sm font-bold leading-6 text-gray-900">Username</label>
                  </div>
                  <div class="flex space-x-12">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-min">
                      <input type="text" name="name" id="name" autocomplete="name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith"/>
                    </div>
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-min">
                      <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith"/>
                    </div>
                  </div>
                </div>

                <div class="sm:col-span-6 pt-4">
                  <label for="email" class="block text-sm font-bold leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" class="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <div>
                  <div class="sm:col-span-4 pt-4">
                    <label for="password" class="block text-sm font-bold leading-6 text-gray-900">Password</label>
                    <div class="text-sm">
                    </div>
                  </div>
                  <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="6+ characters"/>
                  </div>
                </div>

                <div class="col-span-full w-96 pt-6">
                  <label class="inline-flex items-center">
                    <input type="checkbox" checked />
                    <span class="ml-2">Creating an account means you're okay with our<a href="#" class="text-blue-500 hover:text-blue-700"> Terms of service, Privacy Policy,</a> and our default <a href="#" class="text-blue-500 hover:text-blue-700"> Notification Settings</a> </span>
                  </label>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <button onClick={handleCreateAccount} type="submit" class="rounded-md bg-pink-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> 
                  Create Account
                </button>
              </div>

              <div class="col-span-full w-72">
                <label class="inline-flex items-center text-xs">
                  <span class="ml-2">This site is protected by reCAPTCHA and the Google<a href="#" class="text-blue-500 hover:text-blue-700"> Privacy Policy</a> and<a href="#" class="text-blue-500 hover:text-blue-700"> Terms of Service</a> </span>
                </label>
              </div>

            </div>
          </div>
        </form>

      </div>
    </div>

  )
}

export default FirstForm