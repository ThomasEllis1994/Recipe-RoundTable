Welcome to Recipe Roundtable

Purpose:

Cooking is one of life’s most essential skills. I was horribly lacking in that category for most of my life. That all changed with my friends coming together and teaching each other some of our favorite recipes. I still remember the first class I “taught”. Frozen chicken tenderloins and some boiled broccoli. Mine was not a very popular dish. I was more of a takeout person.

The average home cooked meal costs about $4.31. The average takeout meal is $20.37. Only 60% of Americans cook at home more than 5 times per week, and over 40% of those people say they do not enjoy cooking.

Home cooking can be daunting. I know it was for me. So many choices of recipes and incredible professional level photos that leave your mouth watering. You try the same recipe, put in a ton of effort and it turns out poorly, and now you don’t want to cook anything the rest of the week. Recipe Roundtable is here to combat the fears of starting off as a home cook.

The idea of Recipe Roundtable was born during the lost years of the 2020s. The purpose was to have an easy-to-access place for friends and family to store recipes. Over this course, it has grown from a pipe dream, into a reality, and stepped past the point I thought I would be happy. I originally wanted an online cookbook that friends and families could use. But Recipe Roundtable has evolved into a site where eventually, anyone can share or store their own recipes and share them with friends.

Implementation - Use for you own recipes
Deployment:
Server is run locally - Want to implement user features before launching.
Server hosted on 3030, front-end hosted on 5173
Implementation:
Pre-Requisites:
Visual Studio Code: https://code.visualstudio.com/
MongoDB Compass: https://www.mongodb.com/try/download/shell
Docker Desktop: https://www.docker.com/products/docker-desktop/
Setup:
GitHub Repository:
https://github.com/ThomasEllis1994/Recipe-RoundTable
Clone or download as a zip file
Open repository in Visual Studios
Navigate to the front-end folder and install the packages
Npm install - will install all dependencies and dev dependencies
These include the following:
Next navigate to the server folder and do the same, Those dependencies include:

MongoDB set-up:
Open MongoDB compass and Docker Desktop
Create a docker instance to host mongoDB databases
Create a collection and change the DB_URI in your env file to link to the collection you want.
You are now ready to start storing your own recipes.
To launch the application, open two separate terminals with endpoints in the front-end and the server folders.
In the server folder, type the command, npm start.
In the front-end folder, type the command npm run dev and follow the link.
You now have your own recipe site.

Back-End Packages-
"axios": "^1.7.5",
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"mongoose": "^8.6.0"

Front-End Packages -
Dependencies
"@emotion/react": "^11.13.0",
"@emotion/styled": "^11.13.0",
"@mui/icons-material": "^5.16.4",
"@mui/material": "^5.16.4",
"axios": "^1.7.5",
"bootstrap": "^5.3.3",
"dotenv": "^16.4.5",
"react": "^18.3.1",
"react-bootstrap": "^2.10.4",
"react-dom": "^18.3.1",
"react-icons": "^5.2.1",
"react-router-dom": "^6.25.0"
Dev Dependencies
"@types/react": "^18.3.3",
"@types/react-dom": "^18.3.0",
"@vitejs/plugin-react": "^4.3.1",
"eslint": "^8.57.0",
"eslint-plugin-react": "^7.34.3",
"eslint-plugin-react-hooks": "^4.6.2",
"eslint-plugin-react-refresh": "^0.4.7",
"vite": "^5.3.4"
