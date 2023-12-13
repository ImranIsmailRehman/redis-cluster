# Redis Cluster with Twemproxy

This project sets up a Redis Cluster with Twemproxy (nutcracker) for connection management and load balancing. Twemproxy simplifies the client-side handling by proxying Redis commands to the appropriate cluster node.

## Overview

The setup includes multiple Redis instances forming a cluster and a Twemproxy instance that routes requests to these Redis nodes. The configuration is managed through Docker and Docker Compose for easy setup and scalability.

## Prerequisites

- Docker
- Docker Compose
- Node.js (for the test script)

## Components

- `redis1`, `redis2`, `redis3`: Redis nodes that form the cluster.
- `twemproxy`: Twemproxy instance for proxying requests to the Redis cluster.
- `redis-cluster-init`: Initialization container to set up the Redis cluster.
- `redis-test.js`: A Node.js script to test the connectivity and basic operations of the Redis cluster through Twemproxy.

## Setup and Running

1. **Clone the Repository**:

  git@github.com:ImranIsmailRehman/redis-cluster.git
  
  cd redis-cluster

2. **Build and Start Services**:

docker-compose up -d


3. **Running the Test Script**:
After the services are up and running, execute the test script:


## Configuration

- Docker Compose configuration is located in `docker-compose.yml`.
- Redis configuration templates for each node are in the `./docker-data/` directory.
- Twemproxy configuration is in `nutcracker.yml`.
- The test script `redis-test.js` is used to validate the setup.

## Notes

- Twemproxy does not support all Redis commands (e.g., `INFO`). The test script avoids using these commands.
- Direct connections to Redis nodes are recommended for commands not supported by Twemproxy.

## Contributing

Contributions to the project are welcome. Please ensure to follow the existing coding style and submit a pull request with your changes.
