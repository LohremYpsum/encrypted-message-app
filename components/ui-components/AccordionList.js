import React, { useState } from 'react';
import Accordion from './Accordion';

const AccordionList = () => {
    const accordionData = [
      {
        title: 'How do I encrypt my Message?',
        content: 'Go to the Subpage "Encrypt Message" and type in your Name, E-Mail and Message',
      },
      {
        title: 'What do I need the Accesstoken for?',
        content: 'The Accesstoken is necessary to decrypt your message again.',
      },
      {
        title: 'How do I decrypt the Message again?',
        content: 'Go to the Subpage "Decrypt Message" and use the Token you got from encryption. The Message will show up underneath the Form. ',
      },
    ];
  
    return (
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          {accordionData.map((accordion, index) => (
                <Accordion key={index} title={accordion.title} content={accordion.content} />
              ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default AccordionList;