+++
title = "Custom Arch Linux Image"
date = ""
description = ""
draft = true
+++

One of the tools I like to keep on my toolbelt is a USB drive with some kind of live Linux system.

This can be used to show someone Linux, troubleshooting peoples devices, or just `arch-chroot`'ing into my desktop to fix something.

Since Arch Linux is my OS of choice, it would be ideal to have an Arch USB. But, this obviously means not having a Desktop Environment to work from.

I could use a Fedora Workstation live USB, but it would be nice to have my own tweaks on top. So I decided to give customizing [Archiso](https://wiki.archlinux.org/index.php/Archiso) a try.

Following the instructions on the Archiso wiki page, after installing the `archiso` package, you can copy the `/usr/share/archiso/configs/releng` folder to get a base to work from.

I'm going to go over the various tweaks I made.

## build.sh

The releng profile has a `build.sh` script that will build you an `*.iso`. There's a few tweaks I made to this script.

I modified the script to create a loopback image with a EFI System Partition and copied the nessacary files to that. This removes the dependecy of syslinux/isolinux and makes the image simplier.

This results in a `*.img` file instead of an {{< icon disc >}} ISO, and it won't boot on legacy BIOS systems. But that's not an issue for me.

I also made sure the script passed `shellcheck`.