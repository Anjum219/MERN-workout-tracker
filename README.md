Video Tutorial [link](https://youtu.be/7CqJlxBYj-M)

Start by creating a react app
```bash
npx create-react-app mern-workout-tracker
```
Inside the folder create another folder where back-end codes will reside.
```bash
cd mern-workout-app
npm init -y
```
Install required dependencies with
```bash
npm install express cors mongoose dotenv
```

Another thing we need to install is **nodemon**. It automatically restarts the server whenever the serever code changes. We need to install nodemon globally.
```bash
sudo npm install -g nodemon
```
To run the code from your terminal-
```bash
nodemon server
```

Create a `.env` file inside `back-end`. To connect MongoDB database with the back-end, log in to **MongoDB Atlas** and at a cluster click `connect`. Then click `connect your application`. Copy the connection string and paste it in back-end/.env file, put it as follows-
```
ATLAS_URI=<connection_string>
```
In place of password, place the password of the database user.
