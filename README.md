<h1 align='center'><strong>Next Auth with SSR 🍪</strong></h1>

<p>Demo next auth using SSR not Client, save token to cookie.</p>

#### **Live Demo:** https://next-auth-with-ssr.vercel.app

## **Features 🚀**

- Back to login page if try to protected page when unauthenticated
- Back to previous page if try to login when authenticated
- Return to login page when token is invalid

## **Install 🔨**

1. Clone Project

```sh
  git clone https://github.com/igdev116/next-auth-with-ssr.git
```

2. Install Packages

```sh
  yarn install
```

4. Using

```sh
  yarn dev
```

## **Structure source 🥘**

```
├── src
│   ├── apis
│   ├── configs
│   ├── constants
│   ├── core
│   ├── layouts
│   ├── pages // include api routes (login, logout, verifyAuth)
│   ├── styles
│   ├── utils
│   └── views // define all pages
└── README.md
```
