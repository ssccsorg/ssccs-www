export default function Home() {
  
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: '#000', lineHeight: '1.6', fontFamily: 'serif' }}>
      <h1>SSCCS – Schema Segment Composition Computing System</h1>

      <p>
        SSCCS is a non-profit research initiative (gUG i.G.) introducing a computational paradigm centered on observation rather than procedural execution. By shifting away from traditional instruction-based models, SSCCS provides a software infrastructure designed for deterministic, scalable computation on contemporary systems, while establishing a roadmap for future hardware architectures.
      </p>

      <h2>Project Overview</h2>
      <p>
        The SSCCS framework operates through the composition of immutable structural units. Computation emerges when these units interact within a dynamic environment, producing resolved projections without altering the underlying blueprints. This model ensures that execution remains consistent and reproducible across any scale.
      </p>

      <p>
        The current implementation provides a practical compiler and runtime environment engineered for industrial-scale utility. By decoupling execution logic from mutable state, the system enables inherent parallelism and secure isolation, allowing complex computations to occur independently and securely within cryptographically enforced boundaries.
      </p>

     <h2>Values and Impact</h2>
<ul>
  <li>
    Reliability and Verifiability: The use of immutable structural components enables rigorous formal verification and mitigates vulnerabilities commonly associated with mutable execution state.
  </li>
  <li>
    Energy-Efficient and Scalable Computation: Computation is activated only at defined points of resolution, reducing unnecessary processing while enabling natural parallelism and efficient scaling for AI-driven and distributed workloads.
  </li>
  <li>
    Cryptographic Security and Isolation: Execution is constrained within isolated environments governed by binary-level policies, supporting secure, auditable, and policy-compliant computation.
  </li>
  <li>
    Digital Sovereignty and Standardization: A language-agnostic, open-source architectural framework that reduces dependency on proprietary stacks and supports interoperable standards across industrial and research ecosystems.
  </li>
</ul>

      <h2>Support and Collaboration</h2>
      <p>
        We are seeking institutional partnerships to support the transition from a draft statute to an operational research organization. We welcome inquiries regarding software infrastructure development, academic partnerships, and strategic advisory for non-profit deep-tech initiatives.
      </p>

      <h2>Legal Status</h2>
      <p>
        SSCCS operates under a draft statute, pending formal notarization as a German gUG. The document is provided below for transparency. Project descriptions and contact information are shared for collaboration and support purposes.
      </p>
      <p style={{ marginTop: '20px' }}>
        <a href="/satzung_draft_v1.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'underline' }}>SSCCS Draft Statute (PDF)</a>
      </p>

      <h2>Contact</h2>
      <p>
        Inquiries: <a href="mailto:contact@ssccs.org" style={{ color: '#000', textDecoration: 'underline' }}>contact@ssccs.org</a>
      </p>

      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #000' }} />

      <footer>
        SSCCS gUG (in Gründung) – Non-profit research initiative
      </footer>
    </main>
  );
}