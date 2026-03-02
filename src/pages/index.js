import ontology3d from './ontology3d.json';
import BrowserOnly from '@docusaurus/BrowserOnly';
export default function Home() {
  return (

    <main style={{ maxWidth: '100%', width: 'clamp(600px, 90%, min(60%, 1000px))', margin: '0 auto', padding: '40px 20px', color: '#000', lineHeight: '1.6', fontFamily: 'serif' }}>


      <nav style={{
        fontSize: '0.9rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: "0px",
      }}>
        <a href="https://ssccsorg.github.io/ssccs" >Whitepaper</a>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <a href="https://github.com/ssccsorg" >Github</a>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <a href="mailto:contact@ssccs.org" >Contact</a><a href="contact@ssccs.org-openpgp-public.asc" >PGP key</a>
      </nav>

      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #000' }} />

      <h1>Schema–Segment Composition Computing System</h1>

      <p>
        SSCCS (Schema–Segment Composition Computing System) is an observation-driven
computing model and infrastructure specification that redefines computation as the traceable
projection of immutable Segments within a structured Scheme. While contemporary innovation focuses on material hardware shifts, SSCCS addresses fundamental inefficiencies of the
Von Neumann bottleneck at the logical layer. By formalizing computation as the simultaneous resolution of static potential under dynamic constraints rather than a sequence of state
mutations, the architecture reframes data movement, concurrency, and verifiability.
      </p>


      <BrowserOnly fallback={<div style={{ height: '540px' }}></div>}>
        {() => {
          const Plot = require('react-plotly.js').default;
          const zoomRatio = 1
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
                }}
                style={{ width: "100%", height: "100%" }}
                useResizeHandler={true}
                config={{ displayModeBar: false }}
              />
            </div>
          );
        }}
      </BrowserOnly>


      <p>
        The framework operates through a distinct ontology: Segments serve as immutable carriers of structured information, while Schemes define bounded structural contexts. Fields constitute relational topologies governed by dynamic constraints that dictate admissible configurations. Within this layer, computation is executed through Observation, which deterministically resolves these configurations into a Projection without altering underlying Segments. This structural approach inherently minimizes data movement, eliminates synchronization overhead, and enables implicit parallelism.
      </p>

      <p>
        Driven by a software-first philosophy, this architecture ensures deterministic reproducibility by completely decoupling execution logic from mutable state through structural and cryptographic isolation. This open specification, validated across diverse domains, provides a roadmap where logical design dictates physical implementation, spanning from software emulation to hardware-level support. By integrating intrinsic energy efficiency with high interpretability, SSCCS establishes a foundation for sustainable, accountable computational infrastructures, ultimately transitioning logic into a transparent, verifiable, and accessible Intellectual Public Commons.
      </p>

      <h2>Core Values and Impact</h2>
      <ul>
        <li>
          <strong>Energy-efficient and parallel computation:</strong> Data remains stationary; only Projections move. Energy is concentrated at the moment of observation, supporting scalable AI and distributed workloads.
        </li>
        <li>
          <strong>Public accessibility and standardization:</strong> Open, language-agnostic specifications promote transparency and technological sovereignty. The open format preserves verifiability and enables long-term, interoperable standards.
        </li>
        <li>
          <strong>Determinism and auditability:</strong> Immutable Segments and deterministic Observation provide full traceability, supporting high-trust domains like finance, healthcare, and public policy.
        </li>
        <li>
          <strong>Sustainable computational infrastructure:</strong> Structure-centric design minimizes environmental impact while supporting complex, transparent decision-making.
        </li>
        <li>
          <strong>Secure isolation:</strong> Cryptographic identity of Segments and Schemes enforces boundaries, ensuring computations remain auditable and free from hidden interference.
        </li>
      </ul>

      <p></p>
      <h2>Collaboration</h2>

      <p>
        SSCCS invites partnerships from academia, industry, and public institutions. Opportunities include research collaboration, software toolchain development, and strategic guidance for non-profit deep-tech initiatives.
      </p>

      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #000' }} />

      <footer style={{ 
  fontSize: '0.85rem',
}}>
  <section>
  <p>
    © 2026 SSCCS Foundation (in formation) — A non-profit research initiative, formalized through global standards and its authenticity substantiated by immutable scientific records and cryptographic proofs:
  </p>    
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li>
      Open Source: Licensed under Apache 2.0. Repository: <a href="https://github.com/ssccsorg">GitHub</a>. Authenticated via GPG: <a href="https://keys.openpgp.org/search?q=BCCB196BADF50C99">BCCB196BADF50C99</a>.
    </li>
    <li>
      Legal: Governed by the <a href="https://ssccsorg.github.io/ssccs/legal">Foundational Charter and Statute</a> of the SSCCS Foundation.
    </li>
    <li>
      Publications: Licensed under CC BY-NC-ND 4.0. <a href="https://ssccs.org/wp">Whitepaper</a> DOI: <a href="https://doi.org/10.5281/zenodo.18759106">10.5281/zenodo.18759106</a> via CERN/Zenodo, indexed by OpenAIRE.
    </li>
  </ul>
</section>

  <div style={{ 
    display: 'flex', 
    justifyContent: 'flex-end', 
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
  { name: "Open AIRE", href: "https://www.openaire.eu/", src: "./images/openaire.svg", h: "40px" },
  { name: "CERN", href: "https://cernandsocietyfoundation.cern/projects/zenodo", src: "./images/cern.svg", h: "60px" }
];

const PartnerLogo = ({ href, src, alt, height }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} style={{ height, width: 'auto', display: 'block' }} />
  </a>
);