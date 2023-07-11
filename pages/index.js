import Link from 'next/link';
import { useState } from 'react';

import Header from '../components/Header';
import LandingpageContent from '../components/LandingpageContent';
import AccordionList from '../components/AccordionList';
import Footer from '../components/Footer';


const IndexPage = () => {

  return (
    <>
    <Header />
    <LandingpageContent />
    <AccordionList />
    <Footer />
    </>

  );
};

export default IndexPage;
