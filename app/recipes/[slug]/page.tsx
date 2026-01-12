import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getRecipeBySlug } from "@/lib/recipes";

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) return notFound();

  const { frontmatter, content } = recipe;

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px" }}>
      <a href="/recipes" style={{ textDecoration: "none", opacity: 0.75 }}>
        ← All recipes
      </a>

      <h1 style={{ fontSize: 44, marginTop: 14, marginBottom: 10 }}>
        {frontmatter.title}
      </h1>
      <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 18 }}>
        {frontmatter.description}
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18, opacity: 0.85 }}>
        {frontmatter.totalTime ? <span>⏱️ {frontmatter.totalTime} min</span> : null}
        {frontmatter.servings ? <span>🍽️ Serves {frontmatter.servings}</span> : null}
        {frontmatter.tags?.length ? <span>🏷️ {frontmatter.tags.join(", ")}</span> : null}
      </div>

      {frontmatter.hero ? (
        <div style={{ position: "relative", width: "100%", height: 360, borderRadius: 16, overflow: "hidden", marginBottom: 22 }}>
          <Image
            src={frontmatter.hero}
            alt={frontmatter.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ) : null}

      <article style={{ lineHeight: 1.7, fontSize: 16 }}>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
