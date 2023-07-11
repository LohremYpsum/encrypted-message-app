import React, { useState } from 'react';
import Logo from './Logo';
import Modal from './Modal';


const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
      <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
        <Logo width={50} height={50} src="/images/encryption_logo_transparent.png" />
        Moe's Encrypter    
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">This project is purely a showcase and should not be used for encrypting serious or confidential messages. If you choose to use it and it works, proceed with caution at your own risk. It is not suitable for real-world production software. </p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
          <button
          className='mr-5' 
          onClick={openModal}>About</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} about='About this Project'>
            
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    
                   
                        <dl>
                            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                React: NextJS v.16
                                <br />
                                CSS: TailwindCSS with Flowbite
                                <br />

                                 </dd>
                            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Customized</dt>
                            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Accordion <br/> Modals</dd>
                        </dl>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3 sm:space-x-4">
                                            
                            
                            </div>              
                        
                        </div>
                </div>
            </Modal>
          </li>
          <li>
              <a href="/blog" class="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
  </div>
</footer>
     
    </div>
  );
};

export default Footer;
