+++
title = "NetworkManager dnsmasq - NGINX + Localhost"
date = "2021-01-08"
description = "Using NetworkManager's dnsmasq plugin with NGINX on the localhost."
draft = true
+++

This post serves as an overview of my configs for using domains with my local NGINX instance with SSL/HTTPS.

## Forward DNS requests to localhost

Create a dnsmasq conf:

**/etc/NetworkManager/dnsmasq.d/lh.conf**

```ini
address=/lh/127.0.0.1
```

Accessing **domain**.lh will be forwarded to localhost for NGINX to handle.

## Setup a Trusted SSL Certificate

I use a self-signed cert so that my localhost pages get a nice **Connection secure** padlock.

### OpenSSL Config


**lh.cnf**
```ini
[req]
default_bits = 2048
distinguished_name = req_distinguished_name
prompt = no

[req_distinguished_name]
C = CA
ST = Ontario
L = Ottawa
O = Localhost CA
OU = Development
CN = lh

[v3_ca]
subjectAltName = @alt_names

[alt_names]
DNS.1 = hugo.lh
DNS.2 = startpage.lh
```

This alt_names contains all the subdomains you'd like to use and be valid for this cert.

### Creating Root Certification Authority

I create a RootCA for signing my cert. This RootCA can later be added to the system so that Firefox automatically trusts the cert without having to accept it manually.

```bash
# Create the private key
$ sudo openssl genrsa -out /etc/nginx/ssl/rootCA.key 2048

# Create the PEM cert
$ sudo openssl req -x509 -new -nodes -key /etc/nginx/ssl/rootCA.key -sha256 -days 3650 -out /etc/nginx/ssl/rootCA.pem
```

### Creating SSL Certificates

```bash
# Create private key and CSR key
$ sudo openssl req -new -sha256 -nodes -newkey rsa:2048 -keyout /etc/nginx/ssl/lh.key -out /etc/nginx/ssl/ lh.csr -config lh.cnf

# Create cert using rootCA
$ sudo openssl x509 -req -in /etc/nginx/ssl/lh.csr -CA /etc/nginx/ssl/rootCA.pem -CAkey /etc/nginx/ssl/rootCA.key -CAcreateserial -out /etc/nginx/ssl/lh.crt -sha256 -days 3650 -extfile lh.cnf -extensions v3_ca
```

### Adding Trusted CA to System

On Arch Linux or Fedora, p11-kit can be used to add the RootCA system-wide.

```bash
$ sudo trust anchor --store /etc/nginx/ssl/rootCA.pem
```