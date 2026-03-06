import ontology3d from './ontology3d.json';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState, useEffect } from 'react';

export default function Home() {
  return (

    <main style={{ maxWidth: '100%', width: 'clamp(800px, 90%, min(60%, 1000px))', margin: '0 auto', padding: '40px 20px', color: '#000', lineHeight: '1.6', fontFamily: 'serif' }}>

      <nav style={{
        fontSize: '0.9rem',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: "30px",
        gap: '6px',
      }}>
        Whitepaper<a href="https://ssccs.org/wp">PDF</a><a href="https://ssccs.org/wpw">HTML</a>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <a href="https://github.com/ssccsorg" >Repository</a>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <a href="mailto:contact@ssccs.org" >Contact</a><a href="https://keys.openpgp.org/search?q=0xF812D4374FEE96A1" >PGP Key</a>

      </nav>

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #000' }} />

      <h1 align="center">Schema–Segment Composition Computing System</h1>

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #000' }} />

      <p>
        SSCCS (Schema–Segment Composition Computing System) is a non-profit research initiative developing a reliable and energy-efficient computing infrastructure for existing hardware. It addresses the scalability, security, and energy constraints inherent in conventional instruction-based, mutable-state architectures.
      </p>

      <p>
        Instead of procedural instruction execution, SSCCS introduces a model where computation emerges from observing composed, immutable structural units. By making observation the sole computational event, the system achieves inherent parallelism, strong isolation, and predictable system behavior by design.
      </p>


      <BrowserOnly fallback={<div style={{ height: '540px' }}></div>}>
        {() => <ResponsivePlot />}
      </BrowserOnly>


      <p>
        The project focuses on delivering an open-source software stack, including a compiler and runtime environment, that operates on conventional processors while supporting high-concurrency and distributed execution. Execution is constrained through policy-based sandboxes enforced at the binary level, enabling secure and verifiable processing without dependence on proprietary platforms.
      </p>

      <p>
        Due to its observation-centric nature, the system emphasizes high memory utilization and low operational energy, making it suitable for energy-aware and AI-adjacent computing workloads. Expected outcomes include a public reference implementation, technical documentation, and demonstrable prototypes validating the approach.
      </p>

      <p>
        Beyond software, SSCCS maintains a long-term research objective of providing architectural insights that may inform future computing hardware design, grounded in empirical validation on existing systems. The project aims to contribute foundational building blocks for trustworthy, open, and sustainable digital infrastructure in the public interest.
      </p>

      <h2>Key Technical Advantages</h2>
      <ul>
        <li>
          <strong>Inherent Parallelism & Isolation:</strong> Observation as the sole computational event enables predictable system behavior by design, eliminating traditional synchronization overhead.
        </li>
        <li>
          <strong>Binary-Level Security:</strong> Policy-based sandboxing enforced at the binary level ensures secure processing without proprietary platform dependence.
        </li>
        <li>
          <strong>Resource Efficiency:</strong> High memory utilization and low operational energy consumption, optimized for AI-adjacent and distributed workloads.
        </li>
        <li>
          <strong>Open-Source Foundation:</strong> Production-ready compiler and runtime environment for conventional processors, contributing to the digital commons.
        </li>
        <li>
          <strong>Architectural Insights:</strong> Empirical data to inform future energy-aware hardware designs based on real-world validation.
        </li>
      </ul>

      <p></p>
      <h2>Collaboration</h2>

      <p>
        SSCCS invites partnerships from academia, industry, and public institutions. Opportunities include research collaboration, software toolchain development, and strategic guidance for non-profit deep-tech initiatives.
      </p>

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #000' }} />

      <footer style={{
        fontSize: '0.85rem',
      }}>
        <section>
          <p>
            © 2026 SSCCS Foundation — A non-profit research initiative, formalized through global standards and substantiated by its cryptographic authenticity.
          </p>
          <ul>
            <li>
              Whitepaper: <a href="https://ssccs.org/wp">PDF</a> / <a href="https://ssccs.org/wpw">HTML</a> Licensed under <i>CC BY-NC-ND 4.0</i>. DOI: <a href="https://doi.org/10.5281/zenodo.18759106">10.5281/zenodo.18759106</a>) via CERN/Zenodo, indexed by OpenAIRE.
            </li>
            <li>
              Official repository: <a href="https://github.com/ssccsorg">GitHub</a>. Licensed under <i>Apache 2.0</i>. Authenticated via GPG: <a href="https://keys.openpgp.org/search?q=BCCB196BADF50C99">BCCB196BADF50C99</a>.
            </li>
            <li>
              Governed by the <a href="https://ssccsorg.github.io/ssccs/legal">Foundational Charter and Statute</a> of the SSCCS Foundation (in formation).
            </li>
            <li>
              Provenance: Human-authored and AI-refined: linguistic and editorial review; full intellectual responsibility with author(s). All major outputs are <a href="https://ssccs.org/wpc2pa">C2PA-certified</a>.
            </li>
          </ul>

        </section>

        <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #000' }} />

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '15px'
        }}>
          {PARTNERS.map(logo => (
            <PartnerLogo
              key={logo.name}
              href={logo.href}
              src={logo.src}
              alt={logo.name}
              height={logo.h}
            />
          ))}
        </div>
      </footer>

    </main>
  );
}

const PARTNERS = [
  { name: "C2PA", href: "https://www.c2pa.org/", src: "https://c2pa.org/wp-content/uploads/sites/33/2025/05/c2pa_logo.svg", h: "40px" },
  { name: "Open AIRE", href: "https://www.openaire.eu/", src: "./images/openaire.svg", h: "40px" },
  { name: "CERN", href: "https://cernandsocietyfoundation.cern/projects/zenodo", src: "./images/cern.svg", h: "60px" }
];

const PartnerLogo = ({ href, src, alt, height }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} style={{ height, width: 'auto', display: 'block' }} />
  </a>
);

function ResponsivePlot() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Plot = require('react-plotly.js').default;

  const showLegend = width > 720;
  const zoomRatio = 0.97;

  return (
    <div style={{
      width: '100%',
      height: 'clamp(400px, 50vh, 600px)',
      position: 'relative'
    }}>
      <Plot
        data={ontology3d.data}
        layout={{
          ...ontology3d.layout,
          title: {
            text: '*Data is the shadow cast by the collapse of possibility.',
            font: { size: 12, color: '#343434' },
            x: 0.5,
            y: 0.06
          },
          autosize: true,
          height: undefined,
          width: undefined,
          scene: {
            ...ontology3d.layout.scene,
            dragmode: 'turntable',
            camera: {
              eye: { x: -1.2 * 1 / zoomRatio, y: 1.5 * 1 / zoomRatio, z: 0.65 * 1 / zoomRatio },
              center: { x: 0, y: 0, z: -0.2 },
            },
            aspectratio: { x: 1, y: 1, z: 0.75 },
            xaxis: { title: '', showgrid: true },
            yaxis: { title: '', showgrid: true },
            zaxis: { title: '', showgrid: true },
          },
          margin: { l: 0, r: 0, b: 0, t: 0 },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          showlegend: showLegend,
        }}
        style={{ width: "100%", height: "100%" }}
        useResizeHandler={true}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}