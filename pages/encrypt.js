import React, { useState } from 'react';
import Header from '../components/page-components/Header';
import Link from 'next/link';
import { encryptMessage } from '../utils/encryption';
import InputField from '../components/input-components/InputField';
import MessageField from '../components/input-components/MessageField';
import InputfieldError from '../components/input-components/InputFieldError';
import ClipboardCopy from '../components/ui-components/ClipboardCopy';

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
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Encrypt Message
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Fill out the Form below and hit the Encrypt Message Button. This will generate a Token. 
            <br></br>The Receiver needs all Information of the Inputform aswell as the Token to decrypt the message. 
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
            className="mt-2 mr-2 mb-2 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleEncrypt}
          >
            Encrypt Message
          </button>
          <button 
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <Link href="/">Back to Mainpage</Link>
          </button>

          {encryptedMessage && <ClipboardCopy clipBoardCopy={encryptedMessage} token={encryptedMessage}/> }
        </div>    
      </section>
    </>
  );
};

export default EncryptPage;
