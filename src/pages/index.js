import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { isMobileSafari } from '../utils/detector';
import { ResponsivePlot } from '../components/ResponsivePlot';

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
        Whitepaper<a href={appendDateQuery("https://ssccs.org/wp")}>PDF</a><a href={appendDateQuery("https://ssccs.org/wpw")}>HTML</a>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <a href={"https://github.com/ssccsorg"} >Repository</a>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <a href={"mailto:contact@ssccs.org"} >Contact</a><a href={"https://keys.openpgp.org/search?q=0xF812D4374FEE96A1"} >PGP Key</a>

      </nav>

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #000' }} />

      <h1 align="center">Schema–Segment Composition Computing System</h1>

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #000' }} />


      <p>
        SSCCS (Schema–Segment Composition Computing System) is an observation-driven computing model that challenges the current decades-old paradigm by redefining computation as the projection of static potential under dynamic constraints, rather than sequential instruction sequencing, state mutations, and data movement between memory and processor. This model treats time as merely one axis of multi-dimensional computation rather than an absolute sequence, employing a Geometric Manifold to ensure lossless interpretation and provide inherent structural isolation against interference.
      </p>

      <BrowserOnly fallback={<div style={{ height: '540px' }}></div>}>
        {() => {
          const svgUrl = useBaseUrl('/images/ontology3d.svg');
          if (isMobileSafari()) {
            return (
              <div style={{ width: '100%', height: 'clamp(400px, 50vh, 600px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src={svgUrl} alt="SSCCS Ontology Structure" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                <p style={{ fontSize: '12px', color: '#343434' }}>*Data is the shadow cast by the collapse of possibility.</p>
              </div>
            );
          } else {
            return <ResponsivePlot />
          }
        }
        }
      </BrowserOnly>


      <p>
        Computation is formalized as the deterministic projection of immutable Segments and Schemes within dynamic Fields. Acting as mutable constraint units, Fields enable recursive composition and allow governance logic to be encrypted or sandboxed at the binary level. The compiler performs structural mapping, embedding logic directly into hardware topology to ensure stationary data (Logic-at-Rest) and minimize movement. This design innovation mitigates data movement overhead and enables inherent parallelism, targeting dramatic improvements in performance and energy efficiency. Security and cryptographic auditability are geometrically natural consequences of this immutable structure, rather than added features.
      </p>


      <p>
        As a universal substrate, SSCCS provides a verifiable foundation for systems across domains—from AI to scientific computing to embedded systems. Driven by a software-first philosophy, this specification provides a roadmap where logical design dictates physical implementation, contrasting with current hardware advances that focus primarily on physical improvements. Ultimately, SSCCS aims to evolve into an open format at the language layer, transitioning logic into a transparent, accessible, and energy-efficient Intellectual Public Commons.
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
              Whitepaper: <a href={appendDateQuery("https://ssccs.org/wp")}>PDF</a> / <a href={appendDateQuery("https://ssccs.org/wpw")}>HTML</a> Licensed under <i>CC BY-NC-ND 4.0</i>. DOI: <a href={appendDateQuery("https://doi.org/10.5281/zenodo.18759106")}>10.5281/zenodo.18759106</a>) via CERN/Zenodo, indexed by OpenAIRE.
            </li>
            <li>
              Official repository: <a href={"https://github.com/ssccsorg"}>GitHub</a>. Licensed under <i>Apache 2.0</i>. Authenticated via GPG: <a href={"https://keys.openpgp.org/search?q=BCCB196BADF50C99"}>BCCB196BADF50C99</a>.
            </li>
            <li>
              Governed by the <a href={"https://ssccsorg.github.io/ssccs/legal"}>Foundational Charter and Statute</a> of the SSCCS Foundation (in formation).
            </li>
            <li>
              Provenance: Human-authored and AI-refined: linguistic and editorial review; full intellectual responsibility with author(s). All major outputs are <a href={appendDateQuery("https://ssccs.org/wpc2pa")}>C2PA-certified</a>.
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

function appendDateQuery(url) {
  if (!url.startsWith('http')) {
    return url;
  }
  if (url.includes('?')) {
    return url;
  }
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;
  return url + '?' + dateStr;
}

const PARTNERS = [
  { name: "C2PA", href: appendDateQuery("https://www.c2pa.org/"), src: appendDateQuery("https://c2pa.org/wp-content/uploads/sites/33/2025/05/c2pa_logo.svg"), h: "40px" },
  { name: "Open AIRE", href: appendDateQuery("https://www.openaire.eu/"), src: appendDateQuery("./images/openaire.svg"), h: "40px" },
  { name: "CERN", href: appendDateQuery("https://cernandsocietyfoundation.cern/projects/zenodo"), src: appendDateQuery("./images/cern.svg"), h: "60px" }
];

const PartnerLogo = ({ href, src, alt, height }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} style={{ height, width: 'auto', display: 'block' }} />
  </a>
);
