import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { isMobileSafari } from '../utils/detector';
import { ResponsivePlot } from '../components/ResponsivePlot';
import styles from './index.module.css';

export default function Home() {
  return (

    <main style={{ maxWidth: '100%', width: 'clamp(800px, 90%, min(60%, 1000px))', margin: '0 auto', padding: '40px 20px', color: '#000', lineHeight: '1.6'}}>

      <nav className={styles.nav}>

        <span className={styles.group}>
          <a href={appendDateQuery("https://docs.ssccs.org")}>Manifesto</a>
        </span>
        <span style={{ fontWeight: 'bold' }}>·</span>
        
        <span className={styles.group}>
          <a href={appendDateQuery("https://docs.ssccs.org/whitepaper.pdf")}>Whitepaper</a> / <a href={appendDateQuery("https://docs.ssccs.org/whitepaper")}>HTML</a>
        </span>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <span className={styles.group}>
          <a href={"https://github.com/ssccsorg"} >Repository</a>
        </span>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <span className={styles.group}>
          <a href={appendDateQuery("https://docs.ssccs.org/proposal")}>Proposal</a> / <a href={appendDateQuery("https://github.com/ssccsorg/ssccs/blob/main/docs/GUIDE.md")}>Guide</a>
        </span>
        <span style={{ fontWeight: 'bold' }}>·</span>

        <span className={styles.group}>
          <a href={"mailto:contact@ssccs.org"} >Contact</a> / <a href={"https://keys.openpgp.org/search?q=0xF812D4374FEE96A1"} >PGP Key</a>
        </span>

      </nav>

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #000' }} />

      <h1 align="center">Schema–Segment Composition Computing System</h1>

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #000' }} />


      <p>
          SSCCS (Schema–Segment Composition Computing System) is an observation-driven computing model that defines deterministic computation as the realization of structured potential under dynamic constraints. In an era of increasing complexity and distributed systems, this contrasts with the traditional von Neumann approach of instruction sequencing, state mutations, and data movement between memory and processor, and the compiler's role shifts from translating code to optimizing the topology of data movement. This model treats time as merely one axis of multi-dimensional computation rather than an absolute sequence, with inherent structural isolation against interference and lossless interpretation via a Geometric Manifold.

      </p>

      <BrowserOnly fallback={<div style={{ height: '540px' }}></div>}>
        {() => {
          const svgUrl = useBaseUrl('/images/ontology3d.svg');
          if (isMobileSafari()) {
            return (
              <div style={{ width: '100%', height: 'clamp(400px, 50vh, 600px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src={svgUrl} alt="SSCCS Ontology Structure" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                <p style={{ fontSize: '12px', color: '#343434' }}>*Loops disappear into layout. Data, or state, is the shadow cast by collapsed possibility.</p>
              </div>
            );
          } else {
            return <ResponsivePlot />
          }
        }
        }
      </BrowserOnly>


      <p>
        Computation in SSCCS is the deterministic projection of immutable Segments and Schemes (static geometric blueprints) under dynamic Fields (mutable constraints). The only active event is an Observation, which collapses potential into a transient result—no data travels, only results. This shift from instruction sequencing to structural revelation eliminates data movement, enables implicit parallelism without locks, and makes verifiability intrinsic: every observation is deterministic and traceable from blueprint to result. Security follows from geometry, not added checks.
      </p>

      <p></p>
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
       <h2>Target Validation Domains</h2>


      <p>
        For eighty years, computing has followed the same pattern: fetch, move data from memory to processor, execute, store. Today, data movement consumes 60–80% of energy in AI accelerators, with AI data centers projected to consume as much power as California’s entire grid by 2027. Beyond energy, opaque AI models cause unacceptable risk in critical applications—autonomous vehicle fatalities, diagnostic errors, financial flash crashes—with documented damages exceeding $100 billion. 
      </p>


      <p>
        SSCCS is not a replacement for all computing—sequential, interaction-heavy workloads may stay as they are. But for the workloads that dominate our future, the von Neumann bottleneck is the primary constraint:
      </p>

      <ul>
        <li>
          Swarm robotics demands high-dimensional environmental awareness with minimal energy consumption. SSCCS achieves this by treating each robot as an independent observer of the same structural blueprint—fields as composable program units—enabling emergent coordination without central control while drastically reducing per‑node energy overhead.
        </li>
        <li>
          Space systems face radiation-induced errors and tight power constraints. SSCCS enables each field composition to act as a standalone binary unit, providing structural reproducibility and verifiable execution that are resilient in extreme environments.
        </li>
        <li>
          AI at scale means moving terabytes of weights through limited memory bandwidth. SSCCS keeps weights stationary and observes them in place. With AI power demand projected to reach 23 GW by 2026, eliminating data movement is no longer optional—it’s essential.
        </li>
        <li>
          Climate modeling requires processing massive grids with complex dependencies. SSCCS encodes those dependencies as geometry, cutting redundant data movement.
        </li>
        <li>
          Autonomous systems need verifiable real-time decisions. SSCCS provides deterministic outputs that are auditable by design, not retroactively.
        </li>
        <li>
          Scientific computing faces the same data movement wall. As datasets grow, I/O energy and latency dominate runtime.
        </li>
      </ul>

      <p></p>
      <h2>Collaboration</h2>

      <p>
        SSCCS is a non‑profit, open‑source initiative in its pre‑incorporation phase, operating with a dual‑track model. We welcome partnerships from academia, industry, and public institutions worldwide—any nation with aligned public‑interest programs. We are currently seeking strategic funds to expand the core compiler team, complete the reference implementation, and establish legal governance. Opportunities include research collaboration, software toolchain development, and strategic guidance.
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
              Whitepaper: <a href={appendDateQuery("https://docs.ssccs.org/whitepaper.pdf")}>PDF</a> / <a href={appendDateQuery("https://docs.ssccs.org/whitepaper")}>HTML</a> Licensed under <i>CC BY-NC-ND 4.0</i>. DOI: <a href={appendDateQuery("https://doi.org/10.5281/zenodo.18759106")}>10.5281/zenodo.18759106</a> via CERN/Zenodo, indexed by OpenAIRE.
            </li>
            <li>
              Official repository: <a href={"https://github.com/ssccsorg"}>GitHub</a>. Licensed under <i>Apache 2.0</i>. Authenticated via GPG: <a href={"https://keys.openpgp.org/search?q=BCCB196BADF50C99"}>BCCB196BADF50C99</a>.
            </li>
            <li>
              Governed by the <a href={"https://docs.ssccs.org/legal"}>Foundational Charter and Statute</a> of the SSCCS Foundation (in formation).
            </li>
            <li>
              Provenance: Human-authored and AI-refined: linguistic and editorial review; full intellectual responsibility with author(s). All major outputs are <a href={appendDateQuery("https://docs.ssccs.org/whitepaper.pdfc2pa")}>C2PA-certified</a>.
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