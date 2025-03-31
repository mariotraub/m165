from http.server import HTTPServer, SimpleHTTPRequestHandler
from random import randint


class MetricHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/metrics':
            self.send_response(200)
            self.send_header("Content-type", "text/plain")
            self.end_headers()
            self.wfile.write(f"cpu {randint(0, 100)}".encode())
        else:
            self.send_response(404)
            self.send_header("Content-type", "text/plain")
            self.end_headers()
            self.wfile.write(b'Not Found')

if __name__ == "__main__":
    port = 8080
    address = ("", port)
    httpd = HTTPServer(address, MetricHandler)
    print(f"Starting server at Port: {port}")
    httpd.serve_forever()
