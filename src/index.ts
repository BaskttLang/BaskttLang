// Suggested code may be subject to a license. Learn more: ~LicenseLog:4232064853.
import express from 'express';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/public/index.html');
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});