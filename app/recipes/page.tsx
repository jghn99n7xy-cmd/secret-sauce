import Link from "next/link";
import Image from "next/image";
import { getAllRecipes } from "../../lib/recipes";

export default function RecipesPage() {
  const recipes = getAllRecipes();

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "48px 20px" }}>
      <h1 style={{ fontSize: 40, marginBottom: 10 }}>Recipes</h1>
      <p style={{ marginBottom: 28, opacity: 0.8 }}>
        The good stuff. The secret stuff.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 18,
        }}
      >
        {recipes.map((r) => (
          <Link
            key={r.slug}
            href={`/recipes/${r.slug}`}
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 14,
              overflow: "hidden",
              textDecoration: "none",
              color: "inherit",
              background: "white",
            }}
          >
            {r.frontmatter.hero ? (
              <div style={{ position: "relative", width: "100%", height: 170 }}>
                <Image
                  src={r.frontmatter.hero}
                  alt={r.frontmatter.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : null}

            <div style={{ padding: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>
                {r.frontmatter.title}
              </div>
              <div style={{ opacity: 0.75, marginTop: 6, fontSize: 14 }}>
                {r.frontmatter.description}
              </div>
              {r.frontmatter.totalTime ? (
                <div style={{ marginTop: 10, fontSize: 13, opacity: 0.8 }}>
                  {r.frontmatter.totalTime} min • {r.frontmatter.servings ?? "—"} servings
                </div>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
