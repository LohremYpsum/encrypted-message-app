import React, { useState } from 'react';
import { encryptMessage } from '../utils/encryption';
import InputField from '../components/InputField';
import MessageField from '../components/MessageField';
import Link from 'next/link';
import Header from '../components/Header';
import InputfieldError from '../components/InputFieldError';

const EncryptPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');

  const [emailError, setEmailError] = useState('');

  const handleEncrypt = (e) => {
    e.preventDefault();
  
    let errors = {};
  
    // Check if any required fields are empty
    if (firstName === "") {
      errors.firstName = true;
    }
    if (lastName === "") {
      errors.lastName = true;
    }
    if (message === "") {
      errors.message = true;
    }
  
    // Update the inputErrors state object
    setInputErrors(errors);
  
    // Return if there are any input errors
    if (Object.keys(errors).length > 0) {
      return;
    }
  
    // Continue with encryption logic
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    setEmailError('');
    const encrypted = encryptMessage(firstName, lastName, email, message);
    setEncryptedMessage(encrypted);
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [inputErrors, setInputErrors] = useState({
    firstName: false,
    lastName: false,
    message: false,
  });

  return (
    <>
    <Header />
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about
            our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
            {inputErrors.firstName && firstName === "" ? (
              <InputfieldError 
              inputfield="First Name" 
              errorMsg="First Name is required" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
            ) : (
            <InputField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          )}
            </div>
            <div>

            {inputErrors.lastName && lastName === "" ? (
              <InputfieldError 
              inputfield="Last Name" 
              errorMsg="Last Name is required" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
            ) : (
            <InputField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            )}


            </div>
            <div>

              <InputField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div>
              <MessageField
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
               {inputErrors.message && message === "" && (
                <p className="text-red-500">Message is required</p>
              )}
            </div>
          </form>
          <button
            className="mt-2 mr-2 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleEncrypt}
          >
            Encrypt Message
          </button>
          <button className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <Link href="/">Back to Mainpage</Link>
          </button>
          <p>{encryptedMessage}</p>
        </div>

       {/* <div class="grid items-end gap-6 md:grid-cols-3">
    <div>
        <div class="relative">
            <input type="text" id="filled_error" aria-describedby="filled_error_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer" placeholder=" " />
            <label for="filled_error" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 text-red-600 dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Filled error</label>
        </div>
        <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Oh, snapp!</span> Some error message.</p>
    </div>
    <div>   
        <div class="relative">
            <input type="text" id="outlined_error" aria-describedby="outlined_error_help" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
            <label for="outlined_error" class="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Outlined error</label>
        </div>
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
    </div>
    <div>
        <div class="relative z-0">
            <input type="text" id="standard_error" aria-describedby="standard_error_help" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
            <label for="standard_error" class="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Standard error</label>
        </div>
        <p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Oh, snapp!</span> Some error message.</p>
    </div>
               </div> */}

      </section>
    </div>
    </>
  );
};

export default EncryptPage;
