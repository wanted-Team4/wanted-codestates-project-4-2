# ๐ wanted-codestates-project-4-2

์นดํธ OpenAPI๋ฅผ ์ด์ฉํ ์ ์  ๊ฒ์ ๋ฐ ๋ญํน ํ์ธ ์ฌ์ดํธ๋ฅผ ๊ตฌํํ ํ๋ก์ ํธ์๋๋ค.

### ๐ &nbsp;[Team4์ ๊ณผ์  ํ์ธํ๋ฌ ๊ฐ๊ธฐ](https://team4-nexon-kartrider.netlify.app/)

### <br/>

###

## ๐ View

| ๊ฐ์ธ ์ ์  ์กฐํ ํ์ด์ง |
| :-------------------: | 
|![แแขแแตแซ แแฅแซแแฅแจ แแฅแแฌ](https://user-images.githubusercontent.com/87534763/156378137-ca9c0981-6ad6-475e-9578-4ed1be685321.gif)|

### <br/>

|  ์กฐํ ํ์ด์ง |
| :-------------------: | 
|![แแขแผแแตแผ แแฆแแตแแต](https://user-images.githubusercontent.com/87534763/156377725-af0ef90a-c5a4-4800-8178-636283f79de2.gif)|

### <br/>

###

## ๐ Implement

### Stack

`Javascript` `React` `Styled-Components`

### Features

#### โ ๊ฐ์ธ ์ ์  ์กฐํ, ๋ญํน ํ์ด์ง
- [X] ๋๋ค์ ๊ฒ์์ ํตํ ๊ฐ์ธ ์ ์  ์กฐํ
- [X] ๊ณต์ ํ๊ธฐ ํด๋ฆฝ ๋ณต์ฌ
- [X] ์์ ํ๋ง๋(์ค์๊ฐ ๋๊ธ ๋จ๊ธฐ๊ธฐ)
- [X] Loading UI
- [X] ํธ๋, ์นดํธ๋ณ ์ ์  ๋ฐ ๊ธฐ๋ก ๋ฆฌ์คํธ
- [X] ๊ฐ์ธ ์ ์  ๋ฆฌ์คํธ(๋ฑ์ ๋ฐ ๋ฆฌ์ํฐ์ด ๊ตฌ๋ถ)
- [X] ํ์ ๋ฐ ์์ ์ ๋ ฌ

#### โ ๊ทธ๋ํ
- [X] ๊ฐ์ธ ์ ์  ํ์ด์ง "์์๋ณ๋ ์ถ์ด" - Rechart ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ Line ์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํ์ฌ ๊ตฌํ
- [X] ๊ฐ์ธ ์ ์  ํ์ด์ง "์ขํฉ ์ ์ " & ๋ญํน ํ์ด์ง "1~3๋ฑ ์น๋ฅ , ๋ฆฌ์ํฐ์ด์จ" - react-minimal-pie-chart ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ์ฌ ๊ตฌํ

#### โ ์ ๋๋ฉ์ด์
- [X] ๋ค๋ธ๋ฐ "๋ง์ฐ์ค ์ค๋ฒ" - ๊ฐ์์์ ์ ํ์ ๋ฐ transition ease-in-out์ ์ด์ฉํ์ฌ ๊ตฌํ
- [X] ๋ค๋ธ๋ฐ "๊ฒ์ ๋ง์ฐ์ค ์ค๋ฒ" - hover๋ฅผ ์ด์ฉํ ์ด์ฉํ ์ ๋ณํ ๊ตฌํ
- [X] ๊ฐ์ธ ์ ์  ํ์ด์ง "๋งค์นญ ๋ฐฐ๋" - keyframes๋ฅผ ์ด์ฉํ ๋ฐฐ๊ฒฝ์ ๋ณํ ๊ตฌํ
- [X] ๊ฐ์ธ ์ ์  ํ์ด์ง "์ ๊ณ ํ๊ธฐ ๋ฒํผ" - hover๋ฅผ ์ด์ฉํ ์ ๋ณํ ๊ตฌํ
- [X] ๋ญํน ํ์ด์ง "๋์ฌ๋ณด๋ ํ๋" - keyframes์ background-position-x ์์ฑ์ ์ด์ฉํ์ฌ ๋์ผํ ์ ๋๋ฉ์ด์์ ์ค์ ๊ฐ์ ๋ณ๊ฒฝํ์ฌ ๊ตฌํ

### <br/>

###

## ๐ Directory

```
โโโ public/
โโโ src/
โ   โโโ components/              - page components
โ   โโโ data/                    - json(kart, track)
โ   โโโ hooks/                   - custom hook(toggle, input)
โ   โโโ pages/                   - routed pages
โ
โโโ App.js                       - page routing
โโโ index.js                     - entry point
โโโ README.md                    - ๋ฆฌ๋๋ฏธ(ํ๋ฆฌ๋ทฐ, ๋ฐฐํฌ๋งํฌ, ์ฝ๋์ปจ๋ฒค์)
โโโ package.json                 - ์ฌ์ฉ package ๋ชฉ๋ก
```

### <br/>

###

## ๐ Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/wanted-Team4/wanted-codestates-project-4-2.git"
```

2. `Install` dependencies,

```
$ npm install
```
3. `.env` environment variable,

```
REACT_APP_NEXON_KEY=
```

4. `start` the project,

```
$ npm start
```

5. `Setting` prettier,

```
$ npx prettier --write .
```

### Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     Start      |        ํ๋ก์ ํธ ์์        |
| :sparkles: |      Feat      |      ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ       |
|   :bug:    |      Fix       |          ๋ฒ๊ทธ ์์           |
| :recycle:  |    Refactor    |        ์ฝ๋ ๋ฆฌํฉํฐ๋ง        |
| :lipstick: |     Style      |   ์คํ์ผ ์ถ๊ฐ ๋ฐ ์๋ฐ์ดํธ   |
| :package:  |     Chore      |   ํจํค์ง ์ถ๊ฐ ๋ฐ ์๋ฐ์ดํธ   |
|  :books:   |      Docs      | ๊ทธ ์ธ ๋ฌธ์ ์ถ๊ฐ ๋ฐ ์๋ฐ์ดํธ |

### <br/>

###
