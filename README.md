# Apnea Timer

## Install dependencies

```bash
git clone --repository--
cd apnea-timer
yarn
```

## Expo and EAS

https://blog.expo.dev/

### Start

Use expo to start the project locally

```bash
npx expo
```

### Manage deployments to `preview`

```bash
eas login
eas branch:list
eas update --branch preview --message "Upload app"
```
