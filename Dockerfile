FROM ubuntu:latest

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libtool \
    automake \
    git

# Clone Twemproxy repo
RUN git clone https://github.com/twitter/twemproxy.git /twemproxy

# Build Twemproxy
WORKDIR /twemproxy
RUN autoreconf -fvi && ./configure && make && make install

# Expose port (modify if needed)
EXPOSE 6379

# Run Twemproxy
CMD ["nutcracker", "-c", "/etc/nutcracker.yml"]
