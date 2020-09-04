import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';

const GraySyntax = styled.span`
  color: #bfc7d5;
`;

const PurpleSyntax = styled.span`
  color: #c792ea;
`;

const GreenSyntax = styled.span`
  color: #c3e88d;
`;

const YellowSyntax = styled.span`
  color: #ffcb6b;
`;

const GoldSyntax = styled.span`
  color: gold;
`;

const OrchidSyntax = styled.span`
  color: orchid;
`;

export default function About() {
  return (
    <>
      <SEO title="about.js" />
      <pre className="code">
        <code><PurpleSyntax>import</PurpleSyntax> <GraySyntax>SoftwareDeveloper</GraySyntax> <PurpleSyntax>from</PurpleSyntax> <GreenSyntax>'ChrisRShort'</GreenSyntax><GraySyntax>;</GraySyntax></code>
        <code></code>
        <code><PurpleSyntax>class</PurpleSyntax> <YellowSyntax>Bio</YellowSyntax> <PurpleSyntax>extends</PurpleSyntax> <YellowSyntax>SoftwareDeveloper</YellowSyntax> <GoldSyntax>&#123;</GoldSyntax></code>
        <code>  <GraySyntax>name</GraySyntax>      <PurpleSyntax>=</PurpleSyntax> <GreenSyntax>'Chris Short'</GreenSyntax><GraySyntax>;</GraySyntax></code>
        <code>  <GraySyntax>title</GraySyntax>     <PurpleSyntax>=</PurpleSyntax> <GreenSyntax>'Software Developer'</GreenSyntax><GraySyntax>;</GraySyntax></code>
        <code>  <GraySyntax>company</GraySyntax>   <PurpleSyntax>=</PurpleSyntax> <GreenSyntax>'Van Doren Sales'</GreenSyntax><GraySyntax>;</GraySyntax></code>
        <code>  <GraySyntax>location</GraySyntax>  <PurpleSyntax>=</PurpleSyntax> <GreenSyntax>'Yakima, WA'</GreenSyntax><GraySyntax>;</GraySyntax></code>
        <code><GoldSyntax>&#125;</GoldSyntax></code>
        <code></code>
        <code><PurpleSyntax>class</PurpleSyntax> <GoldSyntax>Skills</GoldSyntax> <PurpleSyntax>extends</PurpleSyntax> <YellowSyntax>SoftwareDeveloper</YellowSyntax> <GoldSyntax>&#123;</GoldSyntax></code>
        <code>  <GraySyntax>languages</GraySyntax>   <PurpleSyntax>=</PurpleSyntax> <OrchidSyntax>[</OrchidSyntax><GreenSyntax>'JavaScript'</GreenSyntax><GraySyntax>,</GraySyntax> <GreenSyntax>'C#'</GreenSyntax><OrchidSyntax>]</OrchidSyntax><GraySyntax>;</GraySyntax></code>
        <code>  <GraySyntax>databases</GraySyntax>   <PurpleSyntax>=</PurpleSyntax> <OrchidSyntax>[</OrchidSyntax><GreenSyntax>'MongoDB'</GreenSyntax><GraySyntax>,</GraySyntax> <GreenSyntax>'DynamoDB'</GreenSyntax><OrchidSyntax>]</OrchidSyntax><GraySyntax>;</GraySyntax></code>
        <code>  <GraySyntax>frameworks</GraySyntax>  <PurpleSyntax>=</PurpleSyntax> <OrchidSyntax>[</OrchidSyntax><GreenSyntax>'React'</GreenSyntax><GraySyntax>,</GraySyntax> <GreenSyntax>'Vue'</GreenSyntax><GraySyntax>,</GraySyntax> <GreenSyntax>'.NET Framework/Core'</GreenSyntax><OrchidSyntax>]</OrchidSyntax><GraySyntax>;</GraySyntax></code>
        <code><GoldSyntax>&#125;</GoldSyntax></code>
        <code></code>
      </pre>
    </>
  );
}
