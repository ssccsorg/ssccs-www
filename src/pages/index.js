export default function Home() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', color: '#000', lineHeight: '1.6', fontFamily: 'serif' }}>
      <h1>Schema–Segment Composition Computing System</h1>

      <p>
        SSCCS is a non‑profit research initiative that redefines computation as the observation of structured potential under dynamic constraints. Moving beyond the von Neumann model, it frames computation as the deterministic Projection of immutable Segments within geometric Schemes, with Fields encoding dynamic admissibility. Logic becomes transparent and verifiable, forming an Intellectual Public Commons accessible to all. This structure-centric approach naturally reduces data movement, enables inherent parallelism, and ensures secure, auditable execution.
      </p>

      <h2>Project Overview</h2>
      <p>
        Computation occurs solely through Observation: when the structure defined by Schemes and the dynamic constraints in Fields create an admissible configuration, a deterministic Projection is produced. Segments remain immutable and stationary, while the Field tracks the evolving constraints. The compiler maps Schemes to hardware, preserving locality and enabling implicit parallelism. The process ensures reproducible, interpretable outcomes at any scale.
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

      <h2>Collaboration</h2>
      <p>
        SSCCS invites partnerships from academia, industry, and public institutions. Opportunities include research collaboration, software toolchain development, and strategic guidance for non-profit deep-tech initiatives.
      </p>

      <h2>Legal Status</h2>
      <p>
        SSCCS operates under a draft statute, pending notarization as a German gUG (non-profit limited liability company). Project details and contact information are provided for collaboration purposes.
      </p>
      <p style={{ marginTop: '20px' }}>
        <a href="/satzung_draft_v1.pdf" target="_blank" rel="noopener noreferrer">SSCCS Draft Statute (PDF)</a>
      </p>

      <h2>Contact</h2>
      <ul>
        <li><a href="mailto:contact@ssccs.org">contact@ssccs.org</a></li>
        <li><a href="https://github.com/ssccsorg" target="_blank" rel="noopener noreferrer">GitHub</a> (supporting <a href="https://radicle.xyz/">decentralized git</a>)</li>
      </ul>
      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #000' }} />

      <footer>
        SSCCS gUG (in Gründung) – Non‑profit research initiative
      </footer>
    </main>
  );
}