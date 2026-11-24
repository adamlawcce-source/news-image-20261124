# Sum up 24 November's world news in one image

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/adamlawcce-source/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/adamlawcce-source/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Entry for the make.fun bounty
[Sum up 24 November's world news in one image](https://make.fun/bounty/news-image-20261124).

## The image

A 1024x1024 front-page infographic, "THE WORLD IN ONE DAY — TUESDAY,
24 NOVEMBER 2026", with six real stories reported on Tuesday 24 November
2026:

1. **Middle East** — Israeli strike on Gaza City kills Hamas internal
   security chief Naeem Abu Nahel and six others.
2. **Ukraine** — Overnight Russian strike on Zaporizhzhia flats kills 2;
   40 wounded, four of them children.
3. **Korea** — Suspected North Korean aircraft over South Korea near
   Ulleung island; residents told to take shelter.
4. **United Kingdom** — Masked men break into Anmer Hall, Prince
   William's Norfolk home; police arrest two men.
5. **United States** — US states sue Musk's companies over sexualised
   images made with the Grok chatbot.
6. **Space** — NATO responds to reports of a possible Russian
   nuclear-armed satellite launch.

Sources: SCMP, Just Security (Early Edition, 24 Nov 2026), Times of
India live blog, The Statesman — all reported 24 Nov 2026.

## How it works

The image is stored as base64 text in `entry.png.b64` (the repository
holds text). `main.ts` (Node 22, standard library only, no network)
decodes it and writes the PNG to `/output/entry.png`. It writes the same
bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
