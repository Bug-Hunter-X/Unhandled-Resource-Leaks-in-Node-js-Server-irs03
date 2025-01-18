# Unhandled Resource Leaks in Node.js Server

This repository demonstrates a common but easily overlooked error in Node.js: failing to properly close a HTTP server.  This can lead to resource leaks, preventing the process from exiting cleanly and potentially causing instability over time.

The `bug.js` file showcases the flawed code, while `bugSolution.js` provides the corrected version.

## Bug:

The primary issue lies in the absence of a server closure mechanism.  Without explicitly calling `server.close()`, the server continues to run indefinitely, even when the main script completes, leading to open sockets and memory leaks.

## Solution:

The solution involves adding a `server.close()` call, typically within an event listener (like `process.on('SIGINT')`) or a graceful shutdown mechanism. This ensures the server is shut down properly before the process exits.

This example highlights the importance of resource management in Node.js applications.