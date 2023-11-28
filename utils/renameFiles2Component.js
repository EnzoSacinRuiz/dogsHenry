const fs = require('fs');
const path = require('path');

// Function to process subfolders inside a directory
const processSubfolders = (directoryPath) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // Filter out subfolders
        const subfolders = files.filter((file) =>
            fs.statSync(path.join(directoryPath, file)).isDirectory()
        );

        // Loop through each subfolder
        subfolders.forEach((subfolder) => {
            const folderPath = path.join(directoryPath, subfolder);
            console.log('Processing subfolder:', subfolder);

            // Perform an operation inside each subfolder
            const fileName = `${subfolder}.component.jsx`;
            const filePath = path.join(folderPath, fileName);

            fs.writeFile(filePath, '', (err) => {
                if (err) {
                    console.error(`Error creating file in "${subfolder}" folder:`, err);
                } else {
                    console.log(`File "${fileName}" created inside "${subfolder}" folder.`);
                }
            });
        });
    });
};

// Specify the directory path you want to process
const directoryPath = 'C:\\Users\\Enzo Sacin Ruiz\\OneDrive\\Documentos\\henry\\fullStack\\PI-Dogs-main\\client\\src\\components';

processSubfolders(directoryPath);
