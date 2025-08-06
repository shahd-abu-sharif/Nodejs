# Task 5 : HTTP vs HTTP2 vs HTTPS Modules in Node.js

## What is the purpose of each module?

### `http`  [Fast and simple]
- creates basic HTTP servers and clients
- uses `HTTP/1.1` protocol
- suitable for simple `REST APIs or static servers`
- runs `over Transport layer (TCP)`
- limited pipelining
- less data integrity


### `https`  [Secure data transmission]
- uses `HTTP/1.1 + encryption` 
- extends `http` with SSL/TLS support
- enables `secure communication over HTTPS`
- used when transmitting sensitive data
- runs over Transport layer (TCP) also adds `TLS layer above TCP`
- limited pipelining
- data integrity is found

### `http2`  [Better speed and efficiency]
- implements `HTTP/2 protocol`
- offers `multiplexing, header compression, and better performance`
- suitable for `high performance APIs, microservices, and web apps`
- runs over Transport layer (TCP) also adds `TLS layer above TCP`
- don’t need pipelining cause it `uses streams`
- high usage of memory but it is efficient
- data integrity is found



---

## When to use each module in a real-world application

### `http`
- Local development
- Quick prototypes
- Internal tools
- Educational projects

### `https`
- User authentication
- Production APIs
- Apps handling sensitive data
- Any system requiring secure transport (SSL/TLS)

### `http2`
- High traffic websites
- Microservices needing low latency
- Real-time or interactive applications

---

##  Use Cases

- `http`: Simple REST API for a to-do list app
- `https`: E-commerce checkout service with login
- `http2`: Video streaming platform or real-time chat app

---

## Key technical differences between HTTP/1.1 and HTTP/2

|                 | HTTP/1.1             | HTTP/2                        |
|------------------------|----------------------|--------------------------------|
| Multiplexing          | One request per connection | Multiple requests in parallel |
| Header Compression    |  No               |  Yes (HPACK compression)          |
| Server Push           |  Not supported      |  Yes  (can send assets proactively)                        |
| Format       |  Text          |  Binary                      |
| Latency               | Higher  (in https due to TLS)               | Lower cause multiplexing , header ,comprssion                  |
| Connection Efficiency | Poor  | Efficient and faster|
| Resource usage  | More connections  | Fewer connections |


