import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import Modal from '../ui-components/Modal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
          <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <Logo width={50} height={50} src="/images/encryption_logo_transparent.png" />
            Moes Encrypter    
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            This project is purely a showcase and should not be used for encrypting serious or confidential messages. 
            If you choose to use it and it works, proceed with caution at your own risk. It is not suitable for real-world production software. 
          </p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
              <li>
                <button
                  className='mr-5' 
                  onClick={openModal}>
                  About
                </button>
                  <Modal isOpen={isModalOpen} onClose={closeModal} about='About this Project'>
                      <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <dl>
                          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                            React: NextJS v.16
                            <br />
                            CSS: TailwindCSS with Flowbite
                            <br />
                          </dd>
                          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Accordion <br/> Modals</dd>
                          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Customized</dt>
                        </dl>
                      </div>
                  </Modal>
                </li>
                <li>
                  <Link href="/blog" className="mr-4 hover:underline md:mr-6">Blog</Link>
                </li>
                <li>
                  <Link href="/#" className="mr-4 hover:underline md:mr-6">FAQs</Link>
                </li>
            </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023. All Rights Reserved.
          </span>
      </div>
    </footer>
  );
};

export default Footer;
