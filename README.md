<h1 align="center">Welcome to AI.Gram👋</h1>

> Full stack social media-like web app which generates images via a user prompt using the Dall-E AI from OpenAI

### ✨ [Visit Live Site](https://aigram.vercel.app/)

![image](https://github.com/musaab03/ai.gram/assets/103457332/ef96488d-7ef9-4c43-9991-4b99d442e2be)

## Install

1. First, fork the repo to your own account
2. Clone the repo on to your local machine with the following line </br>
```
git clone https://github.com/musaab03/ai.gram
```
3. Then cd into the server directory
4. Create an .env file and add in the following lines </br>
```
OPENAI_API_KEY=""
MONGO_URI=""

CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```
5. Now head over to [OpenAI](https://platform.openai.com/account/api-keys), create an account and generate an API key
6. Place this API key into the corresponding variable in .env
7. Go to [MongoDB](https://cloud.mongodb.com/), create an account
8. Create a cluster and edit the region closest to you
9. Go to database access and create a new user, then go to network access and add the IP <b>0.0.0.0/0</b>
10. Now, go to deployment and press connect, drivers
11. Copy and paste the URI into the corresponding .env variable, it should looks something like this </br>
```
mongodb+srv://<USERNAME>:<PASSWORD>@<DATABASE_NAME>.aemrjwv.mongodb.net/?retryWrites=true&w=majority
```
12. Lastly, head over to [Cloudinary](https://console.cloudinary.com/), and create an account
13. Copy the Cloud Name, API Key, and API Secret found in your Dashboard, and paste them into the corresponding .env file variables
14. Before use, excecute the following line in both the server and client directories to import all the needed modules </br>
```
npm install
```
   Done!

## Usage
To run the server, cd into the server directory and run the following line
```
npm start
```
To run the client, cd into the client directory and run the following line
```
npm run dev
```

The API itself can be accessed through using a REST client such as [Insomnia](https://insomnia.rest/download) or through the [hosted link](https://ai-gram-api.onrender.com/) </br>
Currently the API has 3 routes to access:
- GET /api/v1/post
- GET /api/v1/post
- POST /api/v1/dalle

# Tools and Technologies Used
- TypeScript
- Node.js
- Express.js
- MongoDB
- OpenAI API
- React & Vite
- Tailwind CSS
- Vercel
- Cloudinary
- Render

## Author

👤 **Musaab Uppal**

* Github: [@musaab03](https://github.com/musaab03)
* LinkedIn: [@musaab-uppal](https://linkedin.com/in/musaab-uppal)
