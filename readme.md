![Screenshot from 2025-05-18 01-39-53](https://github.com/user-attachments/assets/0f46bfb2-d9f2-4ea5-aa14-fee47123b037)

````
# 🔄✨ Bulk File Renamer CLI Tool

Effortlessly rename multiple files in bulk with options to add prefixes and suffixes!

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (>= 16.0.0 recommended)
-   [npm](https://www.npmjs.com/) (>= 8.0.0 recommended)

### Installation

1.  Clone this repository (if you have it locally):
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Tool

```bash
npm start
````

This command will execute the `index.mjs` file and start the interactive command-line interface.

## 🛠️ How to Use

The tool will guide you through the following steps:

1. **Input Folder:** Enter the path to the folder containing the files you want to rename.
2. **Output Folder:** Enter the path to the folder where the renamed files will be saved. This folder will be created if it doesn't exist.
3. **Add Prefix?** Choose `yes` if you want to add a prefix to the filenames and you'll be prompted to enter the prefix text.
4. **Add Suffix?** Choose `yes` if you want to add a suffix to the filenames (before the extension) and you'll be prompted to enter the suffix text.

The tool will then process all the files in the input folder, apply the prefix and/or suffix, and save the renamed copies to the output folder.

## ✨ Features

- Bulk renaming of files.
- Option to add a prefix to filenames.
- Option to add a suffix to filenames (before the file extension).
- Clear and interactive command-line interface.
- Creates the output directory if it doesn't exist.
- Handles various file types.

## 📝 Example Usage

Let's say you have the following files in your `input` folder:

```
image1.jpg
report.pdf
document.txt
```

And you run the tool, providing:

- Input Folder: `./input`
- Output Folder: `./renamed_files`
- Add Prefix?: `yes`, Prefix: `NEW-`
- Add Suffix?: `yes`, Suffix: `-FINAL`

The `renamed_files` folder will contain:

```
NEW-image1-FINAL.jpg
NEW-report-FINAL.pdf
NEW-document-FINAL.txt
```

## 📜 License

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).

## 🧑‍💻 Author

[chi david](https://github.com/mernking)
