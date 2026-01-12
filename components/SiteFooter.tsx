export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 60 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 20px", opacity: 0.75, fontSize: 14 }}>
        © {new Date().getFullYear()} Secret Sauce
      </div>
    </footer>
  );
}
