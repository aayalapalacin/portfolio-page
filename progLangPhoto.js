const fs = require('fs');
const path = require('path');

const folderPath = './src/assets/img/prog-languages'; // Replace this with the actual path to your folder
  let imgArray = []
  fs.readdirSync(folderPath).forEach(file => {
    const filePath = path.join(folderPath, file);
   
    imgArray.push(filePath.replace("src","../.."));  
  });

  const jsonData = JSON.stringify(imgArray);

  fs.writeFileSync('imgArrayData.json', jsonData, 'utf8');
