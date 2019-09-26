# mern-google-login
Authentication flow for MERN stack application using google OAuth 2.0

## App flow

![Untitled Diagram](https://user-images.githubusercontent.com/29760858/65579674-a4d22c00-df91-11e9-8303-dc97e5bb0dbf.png)

And the image blow is from [google docs](https://developers.google.com/identity/sign-in/web/server-side-flow)

![server_side_code_flow](https://user-images.githubusercontent.com/29760858/65676251-fac5d300-e068-11e9-90a6-9ecdcedd0436.png)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Shahzayb/mern-google-login.git

cd mern-google-login

git install
```

### 2. Obtain OAuth 2.0 credentials from the Google API Console.
Visit the [Google API Console](https://console.developers.google.com/) to obtain OAuth 2.0 credentials such as a client ID and client secret that are known to both Google and your application. Don't store your client secret in your React app. You only need client id in your react app to get the authorization grant code. And you should store client secret in node app.
**Note: You can use authorization grant code only one time.**

### 3. Add Authorized JavaScript Origins
Go to [Google API Console](https://console.developers.google.com/). And select your project & then add JavaScript Origins Url
![Capture](https://user-images.githubusercontent.com/29760858/65677289-c3582600-e06a-11e9-8a69-564a89dbe522.PNG)

**This is a url of client side react app**

**We don't need to add redirect URIs because we are using [one-time-code flow](https://developers.google.com/identity/sign-in/web/server-side-flow)**

### 4. Client Side Setup
Store your client id in GoogleLogin's clientId prop

### 5. Server Side Environment Variables Setup
From the root directory of the project, type:
```bash
mkdir config

cd config

touch dev.env
```
**Note: These commands are for Mac/Linux users only. Windows users should type these commands in git bash**

Now open the dev.env file and add `CLIENT_ID=value from google apis`, `CLIENT_SECRET=value from google apis`, `JWT_SECRET=some secure random value` AND `DB_URL=your database url` variables in it and save.

### 6. Run 'dev' script
```bash
npm run dev
```

### More information
if you want more information, then please read the [one-time-code flow implementation](https://developers.google.com/identity/sign-in/web/server-side-flow)

## Contributing
I made this example & documentation in hurry.
Please help me with the documentation and improve the code.
I'll appreciate that. For changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
