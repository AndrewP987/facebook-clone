# facebook-clone
Facebook Clone is a frontend and backend app replicating the original facebook. 

Technologies & languages used: NextAuth.js, React.js, Tailwind CSS, Node.js, JSON, and Firebase.

VIDEOS BELOW

BackEnd: 

NextAuth is used to login in users through the users Facebook client_id and client_secret. To use NextAuth in this project, make an account at "Meta for Developers" and create an app. From there, you'll receive a FACEBOOK_CLIENT_ID & FACEBOOK_CLIENT_SECRET. Store those in a .env file so they are protected. 
When a client starts a session, the Firebase is notified and any posts or changes that the user makes are sent to the database and updated in the frontend for the user. This includes: image uploading and word posts. If the user would like to sign out, simply press the logout button on the left sidebar and the client session will end. 

FrontEnd: 

Each component is made to fit the original Facebook website. Everything in the page is made responsive for all types of screens as well as having certain animations/traits such as hover, click, and other Tailwind items. 

Screenshots of the app are attached. 

![Screen Shot 2022-07-28 at 2 53 02 PM](https://user-images.githubusercontent.com/71080514/181615618-933fdf08-a520-47c6-9bef-556acde07822.png)
![Screen Shot 2022-07-28 at 2 52 53 PM](https://user-images.githubusercontent.com/71080514/181615620-4d8b92f8-b567-425b-98ef-9b2b735d3213.png)
![Screen Shot 2022-07-28 at 2 52 44 PM](https://user-images.githubusercontent.com/71080514/181615621-4fb714d4-adc4-4f12-b982-dd907f874f84.png)
Above is the responsive view for the small, medium, and large screens. 



https://user-images.githubusercontent.com/71080514/181616872-34a28176-49ab-430d-a2d7-af790ad2d400.mov

Part 1 video




https://user-images.githubusercontent.com/71080514/181617601-feee6dba-e6bd-4f35-9e18-7e69e3fbdea3.mov

Part 2 Video



PRACTICE PURPOSES ONLY 
