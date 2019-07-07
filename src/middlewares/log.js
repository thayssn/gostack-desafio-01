export default function (req, res, next) {
  next();
  console.log(`[${res.statusCode}] ${req.method} ${req.originalUrl}`);
}
