import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const scanDirs = [
	path.join(rootDir, "src"),
	path.join(rootDir, "scripts")
];

const extensions = [".tsx", ".ts", ".html", ".mjs"];

function getFiles(dir, fileList = []) {
	const files = fs.readdirSync(dir);
	for (const file of files) {
		const name = path.join(dir, file);
		if (fs.statSync(name).isDirectory()) {
			getFiles(name, fileList);
		} else {
			const ext = path.extname(name).toLowerCase();
			if (extensions.includes(ext)) {
				fileList.push(name);
			}
		}
	}
	return fileList;
}

const targetFiles = [];
for (const scanDir of scanDirs) {
	if (fs.existsSync(scanDir)) {
		getFiles(scanDir, targetFiles);
	}
}

console.log(`Processing ${targetFiles.length} files in src/ and scripts/ for em-dash cleanup...`);

let totalReplacements = 0;

for (const filePath of targetFiles) {
	let content = fs.readFileSync(filePath, "utf8");
	const count = (content.match(/ - /g) || []).length;
	
	if (count > 0) {
		// Replace all em-dash variations with " - "
		// If it's a standalone "-" in a pricing comparison cell, we replace it with "-"
		content = content.replace(/"-"/g, '"-"');
		content = content.replace(/\s* - \s*/g, " - ");
		content = content.replace(/ - /g, " - ");
		
		fs.writeFileSync(filePath, content, "utf8");
		console.log(`Cleaned ${path.relative(rootDir, filePath)}: Replaced ${count} em-dashes.`);
		totalReplacements += count;
	}
}

console.log(`Done! Cleaned a total of ${totalReplacements} em-dashes.`);
