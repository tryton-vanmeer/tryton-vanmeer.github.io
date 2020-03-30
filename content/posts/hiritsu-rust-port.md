+++
title = "Porting Hiritsu to Rust"
date = ""
description = "As an example project to learn Rust, I decided to port Hiritsu, a Python project of mine, to Rust."
draft = true
+++

Hiritsu was a tool I developed to get the resolution and aspect ratio of images. It can also rename an input image to include those attributes in the filename.

An example of this in action:

```
$ hiritsu wallpaper.jpg
Width:  1920
Height: 1080
Ratio:  16:9

$ hiritsu --rename wallpaper.jpg
wallpaper (1920x1080) [16:9].jpg
```

The Python version can be found [here](https://github.com/tryton-vanmeer/Hiritsu/blob/python/hiritsu), and the Rust port [here](https://github.com/tryton-vanmeer/Hiritsu/blob/master/src/main.rs)

## Benchmarking

For this benchmark I used this [wallpaper](https://wallhaven.cc/w/dgzj9o) from Wallhaven.cc. I ran the commands in Bash 5.0.016-1 and used the `time` command.

The Python version ran in 0.040s while the Rust version ran in 0.001s. Still less than a second each, but faster nonetheless.

And if I'm paying really close attenction, I can see the Rust output slightly faster.

Now, obviously a simple script like this won't show the true speed benifits of using Rust.

## Rust in the Future

The language took some time to wrap (pun unintended) my head around some of the new concepts like unwrapping, matching results, and the way Rust does error handling, but the more I played with Rust, the more I liked it. 

It's sastifying to use in the same way C is, but has the comforts of a modern language like the Cargo package manager. The compile errors are clear and helpful, and editors like VSCode have great support for the language.

Of course, Python remains one of my favourite languages, but I look forward to writing more Rust in the future.