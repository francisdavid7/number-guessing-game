export default function writeHead(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
}