import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const LandingpageContent = () => {
  return (
    <div>
       <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Message Encrypter</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This tool Encrypts and Decrypts your Messages</p>
              
                <a href="#howitworks" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    how it works
                </a> 
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Logo width={275} height={275} src="/images/encryption_logo.png" />
               
            </div>                
        </div>

        <div id='howitworks' className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
            <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How it works</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                To access the page, navigate to the "Encrypt Message" option in the navigation menu. 
                Fill in your first name, last name, and email address, then generate a token. Ensure that you also include the message you wish to have encrypted. 
                It is important to remember your credentials and the generated token and share them with the authorized person responsible for decrypting the message.
                  <br />
                  <br />
                  Next, the intended recipient should locate and click on the "Decrypt Message" option in the header. 
                  They will need to enter the provided credentials. It is important to remember to select the "Decrypt Message" button to initiate the decryption process and access the message. 
                  
                  <br></br> <br></br>Have fun!
                  </p>
               
            </div>
        </div>

      </section>
     
    </div>
  );
};

export default LandingpageContent;
