# Redis Setup with HAProxy

This project sets up a high-availability Redis environment using Redis, Redis Sentinel, and HAProxy. HAProxy is used for routing traffic to the current Redis master node, managed by Redis Sentinel for failover and high availability.

## Overview

The setup includes a Redis master-slave configuration with Sentinel for failover management and HAProxy for connection routing. Docker and Docker Compose are used for easy setup and management.

## Prerequisites

- Docker
- Docker Compose
- Node.js (for the test script)

## Components

- `redis-master`, `redis-slave`: Redis master and slave instances.
- `sentinel`: Redis Sentinel instances for monitoring Redis nodes and handling failover.
- `haproxy`: HAProxy instance for routing client requests to the Redis master node.
- `redis-test`: A containerized environment to run the test script.

## Setup and Running

1. **Clone the Repository**:

    git@github.com:ImranIsmailRehman/redis-cluster.git
  
    cd redis-cluster

2. **Build and Start Services**:

docker-compose up -d


3. **Running the Test Script**:

After the services are up and running, Docker Compose will automatically execute the test script in the `redis-test` service.

## Configuration

- Docker Compose configuration is located in `docker-compose.yml`.
- Redis configuration for the master and slave are in `redis-master.conf` and `redis-slave.conf`.
- Sentinel configuration is in `sentinel.conf`.
- HAProxy configuration is in `haproxy.cfg`.
- The test script `redis-test.sh` is used to validate the setup.

## Notes

- HAProxy is configured to route traffic to the Redis master node. It performs health checks to ensure it connects to the master.
- Redis Sentinel manages the failover process, automatically promoting a slave to master if the current master fails.
- The test script `redis-test.sh` checks the basic connectivity and functionality of the Redis setup through HAProxy.

## Contributing

Contributions to the project are welcome. Please ensure to follow the existing coding style and submit a pull request with your changes.
