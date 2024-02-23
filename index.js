import express from 'express';
import { upload } from './controller/controller.js';

const app = express();

// API endpoint for handling file uploads
//here files is the name of the field in the form
app.post('/upload', upload.array('files'), (req, res) => {
      const files = req.files.map(file => ({
            originalName: file.originalname,
            fileName: file.filename,
            path: file.path,
            size: file.size
      }));
      res.json({ files });
});

app.listen(3000,()=>{
      console.log(' You server is listening on 3000');
})