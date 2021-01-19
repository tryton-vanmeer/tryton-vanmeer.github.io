+++
title = "Shells on the Beach 🦀 🏖️ 🐟"
date = "2021-01-13"
description = "A software spotlight of some of my terminal tools."
draft = true
+++

Here are some of the terminal tools I use, some of which share a certain ocean theme.

# [Tilix](https://gnunn1.github.io/tilix-web/)

Appropriately, the first item on the list is the terminal I use. Like GNOME's Terminal, it is GTK-based and uses the VTE library. Tilix had a nice CSD headerbar, in accordance to the GNOME HIG, before GNOME Terminal implemented one. Along with more options for tweaking, Tilix has tiling support built in with vertical and horizontal panes.

# [Fish Shell](https://fishshell.com/)

I was finally trying ZSH and had configured it to my liking. Then I decided to finally try Fish; a lot of the features I just configured ZSH to do were available in Fish out-of-the-box. So Fish has been my shell of choice since then.

Fish keeps all of it's files in `~/.config/fish`, with no such file like `.bashrc` in `~`. This helps keep `~` clean of dotfiles which I appreciate. I also love the `conf.d` and `functions` folders within `~/.config/fish` that allow for modularity.

Fish uses functions instead of aliases (The [alias](https://fishshell.com/docs/current/cmds/alias.html) command is a wrapper for the function builtin), and a neat feature of Fish is autoloading functions.

> When fish encounters a command, it attempts to autoload a function for that command, by looking for a file with the name of that command in `~/.config/fish/functions`

So, I have a file for each of my functions or "aliases".

A simple example is my `cdg` function:

```fish
function cdg -d "Change directory to root of GIT repo"
    cd (git rev-parse --show-toplevel)
end
```

And something more complex, `podrun`:

```fish
function podrun -d "Run container interactively and delete after"
    if count $argv > /dev/null
        if test $argv[2]
            podman run -it --rm $argv[1]:$argv[2]
        else
            podman run -it --rm $argv[1]
        end
    else
        echo "podrun IMAGE <TAG>"
    end
end
```

Which also has it's own completion file, `~/.config/fish/completions/podrun.fish`:

```fish
se base-devel

# First argument: DISTRO
complete -f -c podrun -n "not __fish_seen_subcommand_from $images" -a "$images"

# Optional second argument for distro version.
complete -f -c podrun -n "__fish_seen_subcommand_from fedora" -a "$fedora"
complete -f -c podrun -n "__fish_seen_subcommand_from ubuntu" -a "$ubuntu"
complete -f -c podrun -n "__fish_seen_subcommand_from centos " -a "$centos"
complete -f -c podrun -n "__fish_seen_subcommand_from archlinux" -a "$archlinux"
```

# [Starship](https://starship.rs/)

# [exa](https://the.exa.website/)

# [pydf](https://github.com/k4rtik/pydf-pypi)

# [Bat](https://github.com/sharkdp/bat)

# [micro](https://micro-editor.github.io/)
