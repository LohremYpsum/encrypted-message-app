import React, { useState } from 'react';
// import { encryptMessage } from '../utils/encryption';
import { AES, enc } from 'crypto-js'; // Import AES and enc from 'crypto-js'
import InputField from '../components/InputField';
import MessageField from '../components/MessageField';
import Link from 'next/link';
import Header from '../components/Header';
import ErrorMessage from '../components/ErrorMessage';

const DecryptPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDecrypt = () => {
    const key = `${firstName}${lastName}${email}`;
    const decrypted = AES.decrypt(encryptedMessage, key).toString(enc.Utf8); // Use AES and enc namespaces
    if (decrypted) {
      setDecryptedMessage(decrypted);
      setErrorMessage('');
    } else {
      setDecryptedMessage('');
      setErrorMessage('Unable to decrypt message. Invalid key or Forminput.');
    }
  };

  return (
    <>
    <Header />
    <div>
        <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Decrypt Message</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Want to decrypt a Message? If you have the right Inputs for the Fields and a valid token, the Message will be shown. Good Luck :) 
              </p>
            <form action="#" class="space-y-8">
                <div>
                  <InputField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> 
                </div>
                <div>
                  <InputField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                  <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <MessageField label="Token" value={encryptedMessage} onChange={(e) => setEncryptedMessage(e.target.value)} rows={2} />
                </div>  
            </form>
            <button 
              onClick={handleDecrypt}
              type="button" 
              className="mt-2 mr-2 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Decrypt
        </button> 
      
        <button
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link href="/">Back to Mainpage</Link> 
      </button>
         
        </div>
      </section>


      {decryptedMessage && 
      <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">Decrypted Message</h2>
         <br></br>
          <dl>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {decryptedMessage}
                </dd>
          </dl>
      </div>
    </section>}

    {errorMessage && <p> <ErrorMessage errorMsg={errorMessage} /></p>}
    

    </div>
    </>
  );
};

export default DecryptPage;
