#!/bin/bash
# Simple script to test writing and reading a key in Redis

# Host and port of the HAProxy
HOST="haproxy"
PORT="7111"

# Function to check connectivity
check_redis() {
    echo "Pinging Redis on $HOST:$PORT..."
    if redis-cli -h "$HOST" -p "$PORT" ping; then
        echo "Successfully connected to Redis."
    else
        echo "Failed to connect to Redis."
        exit 1
    fi
}

# Function to write and read a key
test_key() {
    KEY="mytestkey"
    VALUE="Hello, Redis!"

    echo "Setting $KEY..."
    redis-cli -c -h "$HOST" -p "$PORT" SET "$KEY" "$VALUE"

    echo "Getting $KEY..."
    local result=$(redis-cli -c -h "$HOST" -p "$PORT" GET "$KEY")
    if [ "$result" == "$VALUE" ]; then
        echo "Successfully retrieved key: $result"
    else
        echo "Failed to retrieve the correct value. Result: $result"
        exit 1
    fi
}

# Run the tests
check_redis
test_key
