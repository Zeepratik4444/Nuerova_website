import subprocess
import os
import re

blog_slugs = [
    "scoped-team-memory",
    "skill-registry",
    "agent-native-automation",
    "enterprise-ai-needs",
    "knowledge-cluster-turnover",
    "copilot-alternative",
    "fragmented-knowledge-cost",
    "cs-automation-human-touch",
    "agent-workflow-readiness",
    "setup-guide-72-hours"
]

os.makedirs("src/content/blog", exist_ok=True)
blog_posts_metadata = []

print("=== RE-MIGRATING NUEROVA BLOG POSTS FOR REACT COMPATIBILITY ===")

for idx, slug in enumerate(blog_slugs, 1):
    path = f"blog/{slug}/index.html"
    cmd = ["git", "show", f"main:{path}"]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    
    if res.returncode != 0:
        print(f"Error reading blog {slug}: {res.stderr}")
        continue
        
    html = res.stdout
    
    # Extract title
    title_match = re.search(r"<title>([^<]+)</title>", html, re.IGNORECASE)
    title = title_match.group(1).replace(" | Nuerova", "").strip() if title_match else slug.replace("-", " ").title()
    
    # Extract description
    desc_match = re.search(r'<meta\s+name="description"\s+content="([^"]+)"', html, re.IGNORECASE)
    description = desc_match.group(1).strip() if desc_match else ""
    
    # Extract meta/tag from <span class="article-meta">
    tag_match = re.search(r'<span\s+class="article-meta">([^<]+)</span>', html, re.IGNORECASE)
    tag = tag_match.group(1).strip() if tag_match else "Strategy"
    
    # Extract article shell HTML content
    article_match = re.search(r'<article[^>]*>([\s\S]+?)</article>', html, re.IGNORECASE)
    if article_match:
        article_body = article_match.group(1).strip()
    else:
        main_match = re.search(r'<main[^>]*>([\s\S]+?)</main>', html, re.IGNORECASE)
        article_body = main_match.group(1).strip() if main_match else ""
    
    # Strip meta span and h1
    clean_body = article_body
    clean_body = re.sub(r'<span\s+class="article-meta">[\s\S]+?</span>', '', clean_body, flags=re.IGNORECASE)
    clean_body = re.sub(r'<h1[^>]*>[\s\S]+?</h1>', '', clean_body, flags=re.IGNORECASE)
    clean_body = clean_body.strip()
    
    # Write fragment
    fragment_filename = f"blog-{idx}-{slug}.html"
    fragment_path = os.path.join("src", "content", "blog", fragment_filename)
    with open(fragment_path, "w", encoding="utf-8") as f:
        f.write(clean_body)
    
    blog_posts_metadata.append({
        "slug": slug,
        "title": title,
        "summary": description,
        "tags": [tag],
        "readTime": "6 min read",
        "publishedAt": "June 2026",
        "accent": "blue" if idx % 2 == 0 else "indigo",
        "variableName": f"post{idx}Html",
        "importPath": f"@/content/blog/{fragment_filename}"
    })

# Write src/lib/blogPosts.ts
blog_posts_code = ""
for post in blog_posts_metadata:
    blog_posts_code += f"import {post['variableName']} from {repr(post['importPath'] + '?raw')};\n"

blog_posts_code += """
export type BlogPost = {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	readTime: string;
	publishedAt: string;
	accent: string;
	contentHtml: string;
};

export const blogPosts: BlogPost[] = [
"""

for post in blog_posts_metadata:
    blog_posts_code += f"\t{{\n"
    blog_posts_code += f"\t\tslug: {repr(post['slug'])},\n"
    blog_posts_code += f"\t\ttitle: {repr(post['title'])},\n"
    blog_posts_code += f"\t\tsummary: {repr(post['summary'])},\n"
    blog_posts_code += f"\t\ttags: {repr(post['tags'])},\n"
    blog_posts_code += f"\t\treadTime: {repr(post['readTime'])},\n"
    blog_posts_code += f"\t\tpublishedAt: {repr(post['publishedAt'])},\n"
    blog_posts_code += f"\t\taccent: {repr(post['accent'])},\n"
    blog_posts_code += f"\t\tcontentHtml: {post['variableName']},\n"
    blog_posts_code += f"\t}},\n"

blog_posts_code += "];\n"

with open("src/lib/blogPosts.ts", "w", encoding="utf-8") as f:
    f.write(blog_posts_code)

print("Regenerated src/lib/blogPosts.ts with Vite raw imports.")
