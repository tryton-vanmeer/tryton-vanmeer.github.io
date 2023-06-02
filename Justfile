serve:
  hugo serve \
  --baseURL https://hugo.caffeine-pc.local \
  --appendPort=false \
  --liveReloadPort=443 \
  --buildDrafts

submodules:
  git submodule update --init
