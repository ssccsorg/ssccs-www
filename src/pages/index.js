export default function Home() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', color: '#000', lineHeight: '1.6', fontFamily: 'serif' }}>
      <h1>Schema–Segment Composition Computing System</h1>

      <p>
        SSCCS is a research initiative that redefines the ontological foundation of computation, modeling it as the traceable Projection of immutable Segments within a structured Scheme. While contemporary innovation focuses predominantly on material hardware shifts, SSCCS challenges and addresses the fundamental inefficiencies of the Von Neumann bottleneck at the logical layer. By formalizing computation as the simultaneous resolution of static potential under dynamic constraints rather than a sequence of state mutations, the architecture reframes data movement, concurrency, and verifiability.
      </p>
      <p>
        The framework operates through a distinct ontology: Segments serve as immutable carriers of structured information, while Schemes define bounded structural contexts. Fields constitute relational topologies governed by dynamic constraints that dictate admissible configurations. Within this layer, computation is executed through Observation, which deterministically resolves these configurations into a Projection without altering underlying Segments. This structural approach inherently minimizes data movement, eliminates synchronization overhead, and enables implicit parallelism.
      </p><p>
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