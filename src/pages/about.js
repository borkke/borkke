/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Header, Button } from 'components';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
        margin-top: 0.5rem;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
  }
`;

const About = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`About | Borkke`} />
      <Header>
        <Link to="/">Home</Link>
      </Header>
      <Content>
        <h1>About me</h1>
        <p>I am Aleksandar Borkovac, software engineer with a 
          demonstrated history of working with enterprise distributed systems in the cloud using Java and .NET platform.</p>
        <p>A few of my current interests are:</p>
        <ul>
          <li>Building high performance teams</li>
          <li>Microservice best practices</li>
          <li>Automated testing</li>
          <li>DevOps & SRE practice</li>
        </ul>
        <p>Working for more than eight years in the outsourcing IT industry has given me a chance to work with many 
          different clients, mainly from Europe and the US. This has provided me with a unique experience to see and 
          evaluate many different technologies, different organization tactics and experience communication with people 
          from different parts of the world.</p>
        <h3>Give to receive</h3>
        <p>Continuous learning has always been an important part of my career. In my experience, one of the best 
          ways of learning is by teaching others. This is one of the main reasons why I started this blog.
        </p>
      </Content>
    </Wrapper>
  </Layout>
);

export default About;
