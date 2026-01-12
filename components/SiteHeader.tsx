import Link from "next/link";

export default function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Secret Sauce
        </Link>

        <nav style={{ display: "flex", gap: 14, fontSize: 14, opacity: 0.85 }}>
          <Link href="/recipes" style={{ textDecoration: "none", color: "inherit" }}>
            Recipes
          </Link>
          <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>
            About
          </Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
