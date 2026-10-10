const capabilities = [
  { title: 'Ask in plain English', detail: 'Turn business questions into a clear analytics plan.' },
  { title: 'Work across databases', detail: 'Planned connectors for SQL databases and MongoDB.' },
  { title: 'Validate before execution', detail: 'A dedicated safety gate sits before database access.' },
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '72px 24px' }}>
      <div style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: 1.5, fontSize: 13 }}>
        BUSINESS INTELLIGENCE, REIMAGINED
      </div>
      <h1 style={{ fontSize: 'clamp(42px, 7vw, 68px)', lineHeight: 1.04, margin: '18px 0' }}>
        Your data. Your questions. <span style={{ color: 'var(--accent)' }}>Your Vichaar.</span>
      </h1>
      <p style={{ maxWidth: 680, color: 'var(--muted)', fontSize: 19, lineHeight: 1.7 }}>
        Ask business questions in everyday language and get a validated query, useful visualization,
        and a clear explanation — without needing to write SQL.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 42 }}>
        {capabilities.map((item) => (
          <section key={item.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 22 }}>
            <h2 style={{ fontSize: 18, marginTop: 0 }}>{item.title}</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: 0 }}>{item.detail}</p>
          </section>
        ))}
      </div>
      <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 42 }}>
        Phase 1 scaffold · Agent execution and live database connections are not enabled yet.
      </p>
    </main>
  );
}
