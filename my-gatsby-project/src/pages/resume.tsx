import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ContactInfo from 'components/ContactInfo';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Skills />
    <SEO title="Contact" />
     <ContactInfo />
  </Layout>
);

export default ResumePage;
