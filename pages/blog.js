import React, { useState } from 'react';
import Header from '../components/page-components/Header';
import Image from 'next/image';
import Footer from '../components/page-components/Footer';

const Blog = () => {

  return (
    <>
   <Header />
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The Power of Encryption in Messages: Safeguarding Privacy in the Digital Age</h2>
              <p class="mb-4">
      
              Discover the key benefits of encryption in messages, safeguarding privacy, security, and freedom in the digital age.

              In this digital era, encryption plays a crucial role in preserving privacy and securing our messages. By converting information into an unreadable form, encryption ensures that conversations remain confidential, protecting them from unauthorized access. Let us explore the significant advantages of encryption in messages:

              <br></br> <br></br>
              1. Privacy Protection: Encryption adds an extra layer of security, safeguarding privacy by preventing unauthorized interception and comprehension of messages. It keeps conversations confidential, inaccessible to prying eyes.

              <br>
              </br>

              2. Integrity Verification: Through digital signatures, encryption guarantees the authenticity and integrity of exchanged information. Recipients can verify that messages have not been tampered with during transit, ensuring their reliability.
              <br>
              </br>
              3. Protection Against Mass Surveillance: Encryption empowers individuals to shield their conversations and personal data from unwarranted intrusion, resisting mass surveillance. It preserves the fundamental right to privacy in an increasingly interconnected world.

              </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-8">
              <Image
                className="w-full rounded-lg"
                width={100}
                height={200}
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />

              <Image
                className="mt-4 w-full lg:mt-10 rounded-lg"
                width={100}
                height={200}
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 1"
              />  
          </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Blog;
