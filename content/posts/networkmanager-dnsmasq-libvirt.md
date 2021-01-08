+++
title = "NetworkManager dnsmasq - libvirtd"
date = "2021-01-08"
description = "Using NetworkManager's dnsmasq plugin with libvirtd."
draft = true
+++

Once configured, you'll be able to talk to libvirtd VM's using their hostname, rather than having to know the IP address.

## Forward DNS requests to libvirts Domain

Libvirt uses it's own built-in dnsmasq instance for serving DHCP and DNS to the VM's in the virtual network.

We'll configure NetworkManager's dnsmasq to forward requests to the libvirt instance.

**/etc/NetworkManager/dnsmasq.d/libvirt.conf**
```ini
server=/vm/192.168.122.1
```

Now when we try to access **hostname**.vm, we'll be forwarded to `192.168.122.1` (the IP for libvirt's default virtual network DHCP server).

When testing with terraform, usign the libvirt provider, I create a terraform specific virtual network. So I have `server=/terraform.vm/10.0.100.1` included in this config file (**hostname**.terraform.vm).