# Сайт РПЦ МП

Русская Пастафарианская Церковь Макаронного Пастриархата

Этот сайт использует статический генератор [gridsome](https://gridsome.org/) для [vue.js](https://vuejs.org/)

В основу взят шаблон [itsnwa@gridsome-forestry-starter](https://github.com/itsnwa/gridsome-forestry-starter)

## Ритуал подготовки окружения

### Инициация node.js

Установить nvm

* [Windows](https://github.com/coreybutler/nvm-windows/releases)
* [Linux и macOS](https://github.com/nvm-sh/nvm)

```bash
# установить последнюю версию
nvm install latest

# созерцать установленные версии
nvm list

# выбрать версию для использования
nvm use xx.x.x
```

### Прочие компоненты

Установить [yarn](https://classic.yarnpkg.com/en/docs/install)

Установить глобально `gridsome`:

```bash
yarn global add @gridsome/cli
```

Склонировать этот репозиторий, все дальнейшие команды выполнять из его папки

Инициировать репозиторий:

```bash
yarn
```

## Ритуал разработки

Инициация сервера разработки:

```bash
yarn develop
```

Инициация генерации статического контента - необходимо выполнять как минимум один раз перед каждым коммитом:

```bash
yarn build
```
