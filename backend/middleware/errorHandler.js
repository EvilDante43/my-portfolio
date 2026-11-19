export const notFound = (req, res) => res.status(404).json({ success: false, message: 'Route not found.' });

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  if (err.type === 'entity.parse.failed') return res.status(400).json({ success: false, message: 'Invalid JSON body.' });
  if (err.type === 'entity.too.large') return res.status(413).json({ success: false, message: 'Request too large.' });
  console.error('[error]', err);
  res.status(500).json({ success: false, message: 'Internal server error.' });
}
