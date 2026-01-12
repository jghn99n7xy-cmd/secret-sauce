import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "72px 20px" }}>
      <h1 style={{ fontSize: 54, marginBottom: 10 }}>Secret Sauce</h1>
      <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 620, marginBottom: 28 }}>
        A recipe-first blog for big flavor, smart shortcuts, and “how is this so good?” moments.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <Link
          href="/recipes"
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.14)",
            textDecoration: "none",
          }}
        >
          Browse recipes →
        </Link>
      </div>
    </main>
  );
}
