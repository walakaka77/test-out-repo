const express = require('express');
const path = require('path');
const uploadRoutes = require('./routes/uploadRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
app.disable('etag'); // optional in dev to avoid 304s
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(process.cwd(), 'public')));

// Mount feature routers
app.use('/upload', uploadRoutes);
app.use('/product', productRoutes);

// Health & home
app.get('/health', (_req, res) => res.send('ok'));
app.get('/', (_req, res) => res.send('Hello World! Your server is running 🚀'));

// Centralized errors (good place for logging)
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Unexpected error' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
