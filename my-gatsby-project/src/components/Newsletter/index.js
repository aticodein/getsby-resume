import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Newsletter = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "newsletter section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const newsletter = markdownRemark.frontmatter;

  return (
    <Styled.Newsletter>
      <Container section>
        <TitleSection title={newsletter.title} subtitle={newsletter.subtitle} center />
        <Styled.Form netlify-honeypot="bot-field" name="contact" method="POST">
          <input type="hidden" name="contact" value="contact" netlify></input>
          <Styled.Input type="text" placeholder={newsletter.namePlaceholder} />
          <Styled.Input type="email" placeholder={newsletter.emailPlaceholder} />
          <Button primary block>
            {newsletter.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
