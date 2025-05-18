#!/usr/bin/env node

import inquirer from "inquirer";
import path from "path";
import fs from "fs-extra";

async function main() {
  console.log("🔄 Bulk File Renamer CLI Tool (Alternative Logic)");

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "inputFolder",
      message: "📂 Enter the input folder path:",
      validate: (val) => fs.existsSync(val) || "Folder does not exist.",
    },
    {
      type: "input",
      name: "outputFolder",
      message:
        "📂 Enter the output folder path (will be created if not exists):",
    },
    {
      type: "confirm",
      name: "addPrefix",
      message: "➕ Do you want to add a prefix?",
      default: false,
    },
    {
      type: "input",
      name: "prefixText",
      message: "Enter prefix to add:",
      when: (answers) => answers.addPrefix,
    },
    {
      type: "confirm",
      name: "addSuffix",
      message: "➕ Do you want to add a suffix?",
      default: false,
    },
    {
      type: "input",
      name: "suffixText",
      message: "Enter suffix to add (before file extension):",
      when: (answers) => answers.addSuffix,
    },
  ]);

  const {
    inputFolder,
    outputFolder,
    addPrefix,
    prefixText,
    addSuffix,
    suffixText,
  } = answers;
  const prefix = addPrefix ? prefixText : "";
  const suffix = addSuffix ? suffixText : "";

  try {
    await fs.ensureDir(outputFolder);
    const files = await fs.readdir(inputFolder);

    if (files.length === 0) {
      console.log("⚠️ No files found in the input folder.");
      return;
    }

    console.log(`📁 Found ${files.length} file(s). Starting rename...`);
    let renamedCount = 0;

    for (const file of files) {
      const inputPath = path.join(inputFolder, file);
      const stats = await fs.stat(inputPath);

      if (stats.isFile()) {
        const ext = path.extname(file);
        const baseName = path.basename(file, ext);
        const newFileName = `${prefix}${baseName}${suffix}${ext}`;
        const outputPath = path.join(outputFolder, newFileName);

        await fs.copy(inputPath, outputPath);
        console.log(`✅ Renamed: ${file} -> ${newFileName}`);
        renamedCount++;
      }
    }

    console.log(`\n🎉 Completed! ${renamedCount} file(s) processed.`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
