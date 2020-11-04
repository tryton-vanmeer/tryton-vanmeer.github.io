+++
title = "Running Services on Login with systemd"
date = ""
draft = true
description = ""
+++

systemd is great for managing system services, so why not extend it's capabilities to running things on login. Doing this allows you to take advantage of systemd's features like restarting on failure for long-running daemons, or using slices/cgroups for resource managment.

I'm just running oneshot commands, so my unit files are simple.

They are placed in **~/.config/systemd/user** and are activated with **systemctl --user enable \<service\>**.

The important part of my unit files is the **graphical-session.target**, since I want them to start, not just when I login, but when the desktop is ready.

A template of my unit file is as follows:

```systemd
[Unit]
Description=A 'systemd --user' unit that does something on login.
After=graphical-session.target

[Service]
ExecStart=/usr/bin/program

[Install]
WantedBy=graphical-session.target
```