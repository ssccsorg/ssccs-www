export default function Home() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', color: '#000', lineHeight: '1.6', fontFamily: 'serif' }}>
      <h1>Schema Segment Composition Computing System</h1>

      <p>
        SSCCS is a non‑profit research initiative redefining computation itself. Moving beyond the von Neumann model of step‑by‑step execution, we pioneer an observation‑centric paradigm where computation is the deterministic projection of immutable structures under dynamic constraints. Logic ceases to be a "black box" and becomes part of an Intellectual Public Commons—transparent, verifiable, and accessible to all. Through its intrinsic energy efficiency, inherent parallelism, and cryptographic verifiability, SSCCS lays the foundation for sustainable, accountable computational infrastructures that serve the public interest.
      </p>

      <h2>Project Overview</h2>
      <p>
        SSCCS operates through the composition of immutable Segments—atomic points in a multi‑dimensional coordinate space, each bearing a cryptographic identity. A Scheme defines their geometry and admissible relations. The only mutable layer is the Field, which holds dynamic constraints. Computation occurs solely through Observation: when structure and field together create an instability, a deterministic Projection is revealed—the result.
      </p>
      <p>
        Unlike traditional instruction‑based flows, SSCCS computation emerges as a simultaneous resolution across a spatial topology. The scheme encodes the execution path; computation is the act of observing the structure. This shift—from procedural "writing" to structural observation—ensures execution is consistent, reproducible, and inherently interpretable at any scale.
      </p>
      <p>
        The current implementation provides a practical compiler and runtime environment optimized for industrial‑scale utility. By decoupling logic from mutable state, we enable inherent parallelism and secure isolation within cryptographically enforced boundaries. The final output is not a product of hidden procedural motion but a visible, auditable manifestation of fixed architectural structures.
      </p>

      <h2>Values and Impact</h2>
      <ul>
        <li>
          Energy‑Efficient and Scalable Computation: Data remains stationary; only projections are communicated. This eliminates most data‑movement overhead, concentrating energy at the moment of observation and enabling natural parallelism for AI and distributed workloads.
        </li>
        <li>
          Digital Sovereignty and Standardization: A language‑agnostic, open‑source architectural framework minimizes reliance on proprietary stacks. SSCCS empowers public technological sovereignty and establishes interoperable standards across industrial and research ecosystems.
        </li>
        <li>
          Interpretability and Post‑Verifiability: Immutable segments and deterministic observation preserve the full interaction trajectory. Every result is auditable and traceable—a "gold standard" for high‑trust sectors such as judiciary, finance, and medicine.
        </li>
        <li>
          Sustainable Social Infrastructure: By combining extreme energy efficiency with high‑performance interpretability, SSCCS supports complex public decision‑making processes—from urban planning to resource allocation—while maintaining total transparency and minimal environmental footprint.
        </li>
        <li>
          Cryptographic Security and Isolation: Each Segment and Scheme carries a cryptographic hash identity. Execution occurs within isolated environments governed by binary‑level policies, ensuring secure, auditable, and policy‑compliant computation. Boundaries are cryptographically enforced, eliminating entire classes of vulnerabilities.
        </li>
      </ul>

      <h2>Support and Collaboration</h2>
      <p>
        We seek institutional partnerships to transition from a draft statute to a fully operational research organization. Inquiries regarding software infrastructure development, academic collaborations, and strategic advisory for non‑profit deep‑tech initiatives are welcome.
      </p>

      <h2>Legal Status</h2>
      <p>
        SSCCS operates under a draft statute, pending formal notarization as a German gUG (non‑profit limited liability company). Project descriptions and contact information are shared for collaboration and support purposes.
      </p>
      <p style={{ marginTop: '20px' }}>
        <a href="/satzung_draft_v1.pdf" target="_blank" rel="noopener noreferrer">SSCCS Draft Statute (PDF)</a>
      </p>

      <h2>Contact</h2>
      <ul>
        <li>
          <a href="mailto:contact@ssccs.org">contact@ssccs.org</a>
        </li>
        <li>
          <a href="https://github.com/ssccsorg" target="_blank" rel="noopener noreferrer">GitHub</a> (supporting <a href="https://radicle.xyz/">decentralized git</a>)
        </li>
      </ul>
      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #000' }} />

      <footer>
        SSCCS gUG (in Gründung) – Non‑profit research initiative
      </footer>
    </main>
  );
}