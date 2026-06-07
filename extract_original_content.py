import subprocess
import os

pages = [
    ("Home", "index.html"),
    ("Features", "features/index.html"),
    ("How It Works", "how-it-works/index.html"),
    ("Pricing", "pricing/index.html"),
    ("Security", "security/index.html"),
    ("FAQ", "faq/index.html"),
    ("About", "about/index.html"),
    ("Terms", "terms/index.html"),
    ("Contact", "contact/index.html"),
    ("Blog Index", "blog/index.html")
]

# Get list of blog posts from main branch
result = subprocess.run(["git", "ls-tree", "-r", "main", "--name-only"], capture_output=True, text=True, errors="ignore")
blog_files = []
if result.returncode == 0:
    for line in result.stdout.splitlines():
        if line.startswith("blog/") and line.endswith("index.html") and line != "blog/index.html":
            slug = line.split("/")[1]
            blog_files.append((f"Blog: {slug}", line))

all_files = pages + blog_files

with open("nuerova_original_content.md", "w", encoding="utf-8") as out:
    out.write("# Original Nuerova Website Content (from main branch)\n\n")
    for name, path in all_files:
        out.write(f"## PAGE: {name} ({path})\n\n")
        cmd = ["git", "show", f"main:{path}"]
        res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
        if res.returncode == 0:
            lines = res.stdout.splitlines()
            body_start = -1
            body_end = -1
            for i, line in enumerate(lines):
                if "<main" in line:
                    body_start = i
                if "</main>" in line:
                    body_end = i
                    break
            if body_start != -1 and body_end != -1:
                body_content = "\n".join(lines[body_start:body_end+1])
                out.write("```html\n")
                out.write(body_content)
                out.write("\n```\n\n")
            else:
                out.write("Could not find <main> block in file.\n\n")
        else:
            out.write(f"Error reading file from git: {res.stderr}\n\n")

print("Original content successfully extracted to nuerova_original_content.md")
