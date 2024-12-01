export default function handleInvalidRoutes (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>Page Note Found!</p>`);
}