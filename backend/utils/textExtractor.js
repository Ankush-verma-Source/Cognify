const pdf = require('pdf-parse');
const axios = require('axios');
const fs = require('fs');

async function extractTextFromFile(filePath) {
    const fileExtension = filePath.split('.').pop().toLowerCase();

    // If it's a URL (from Cloudinary)
    if (filePath.startsWith('http')) {
        const response = await axios.get(filePath, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);

        if (fileExtension === 'pdf') {
            const data = await pdf(buffer);
            return data.text;
        } else {
            return buffer.toString('utf-8');
        }
    }

    // If it's a local file (fallback)
    const buffer = fs.readFileSync(filePath);
    if (fileExtension === 'pdf') {
        const data = await pdf(buffer);
        return data.text;
    }
    return buffer.toString('utf-8');
}

module.exports = { extractTextFromFile };
