import fs from "fs";
import path from "path";
import matter from "gray-matter";

const RECIPES_DIR = path.join(process.cwd(), "content/recipes");

export type RecipeFrontmatter = {
  title: string;
  description: string;
  date: string;
  prepTime?: number;
  cookTime?: number;
  totalTime?: number;
  servings?: number;
  tags?: string[];
  hero?: string;
};

export type Recipe = {
  slug: string;
  frontmatter: RecipeFrontmatter;
  content: string;
};

export function getAllRecipes(): Recipe[] {
  const files = fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith(".mdx"));

  const recipes = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(RECIPES_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      frontmatter: data as RecipeFrontmatter,
      content,
    };
  });

  // newest first
  recipes.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
  return recipes;
}

export function getRecipeBySlug(slug: string): Recipe | null {
  const fullPath = path.join(RECIPES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as RecipeFrontmatter,
    content,
  };
}
