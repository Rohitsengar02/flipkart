const fs = require('fs');
const path = require('path');
const https = require('https');
const FormData = require('form-data');

const CLOUD_NAME = 'dntayojln';
const UPLOAD_PRESET = 'maeorganicsindia';

const imagesToUpload = [];
for (let i = 1; i <= 17; i++) {
    imagesToUpload.push({
        id: i,
        path: path.join(__dirname, 'client/public/images', `product_${i}.png`)
    });
}

const uploadImage = (imagePath) => {
    return new Promise((resolve, reject) => {
        const form = new FormData();
        form.append('file', fs.createReadStream(imagePath));
        form.append('upload_preset', UPLOAD_PRESET);

        const request = https.request({
            method: 'POST',
            hostname: 'api.cloudinary.com',
            path: `/v1_1/${CLOUD_NAME}/image/upload`,
            headers: form.getHeaders()
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    if (result.secure_url) {
                        resolve(result.secure_url);
                    } else {
                        reject(result.error ? result.error.message : 'Unknown error');
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });

        request.on('error', (e) => reject(e));
        form.pipe(request);
    });
};

const runUploads = async () => {
    const uploadedUrls = {};
    console.log(`Starting upload of ${imagesToUpload.length} images to Cloudinary...`);

    for (const img of imagesToUpload) {
        try {
            console.log(`Uploading product_${img.id}.png...`);
            const url = await uploadImage(img.path);
            uploadedUrls[img.id] = url;
            console.log(`✅ Uploaded product_${img.id}: ${url}`);
        } catch (error) {
            console.error(`❌ Failed to upload product_${img.id}:`, error);
        }
    }

    console.log('\n--- UPLOAD COMPLETE ---');
    console.log('Copy this JSON map for the next step:');
    console.log(JSON.stringify(uploadedUrls, null, 2));

    // Also save to a file for easy reading
    fs.writeFileSync('cloudinary_urls.json', JSON.stringify(uploadedUrls, null, 2));
};

runUploads();
