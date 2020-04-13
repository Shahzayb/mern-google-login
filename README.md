# mern-google-login

Authentication flow for MERN stack application using google OAuth 2.0. 

This oauth flow is more secure and you don't have to reload your react app and go through multiple redirections to authenticate client.

## App flow

![Untitled Diagram](https://user-images.githubusercontent.com/29760858/65579674-a4d22c00-df91-11e9-8303-dc97e5bb0dbf.png)

And the image blow is from [google docs](https://developers.google.com/identity/sign-in/web/server-side-flow)

![server_side_code_flow](https://user-images.githubusercontent.com/29760858/65676251-fac5d300-e068-11e9-90a6-9ecdcedd0436.png)

## Installation

### 1. Clone the repository & install dependencies

```bash
git clone https://github.com/Shahzayb/mern-google-login.git

cd mern-google-login

npm install

cd client & npm install
```

### 2. Obtain OAuth 2.0 credentials from the Google API Console.

Visit the [Google API Console](https://console.developers.google.com/) to obtain OAuth 2.0 credentials such as a client ID and client secret that are known to both Google and your application. 
Don't store your client secret in your React app. You only need client id in your react app to get the authorization grant code. 
And you should store client secret in node app. 


### 3. Add Authorized JavaScript Origins

Go to [Google API Console](https://console.developers.google.com/). And select your project & then add JavaScript Origins Url
![Capture](https://user-images.githubusercontent.com/29760858/65677289-c3582600-e06a-11e9-8a69-564a89dbe522.PNG)

**This is a url of client side react app**
 
 
**You'll notice in my code that I set the `redirect_uri` to `postmessage`, its because we need the authorization grant code without any redirection**

### 4. Client Side Setup

1. execute these commands

```
cd client
touch .env.local
```

2. open `.env.local` file & enter
   `REACT_APP_GOOGLE_CLIENT_ID=your client id provided by google`

### 5. Server Side Environment Variables Setup

From the root directory of the project, type:

```bash
mkdir config

cd config

touch dev.env
```

**Note: These commands are for Mac/Linux users only. Windows users should type these commands in git bash**

Now open the dev.env file and add `GOOGLE_CLIENT_ID=value from google apis`, `GOOGLE_CLIENT_SECRET=value from google apis`

### 6. Run 'dev' script

```bash
npm run dev
```

### More information

if you want more information, then please read the [one-time-code flow implementation](https://developers.google.com/identity/sign-in/web/server-side-flow)

## Contributing

Please help me with the documentation and improve the code.
I'll appreciate that. For changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
