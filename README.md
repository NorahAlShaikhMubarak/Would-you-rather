# Would You Rather

Would You Rather is a polling game that presents a list of users with a series of questions and allows the user to answer the questions.

This project represents the concept of React, Redux, Redux Thunk and React Router. 
The project applies the concept of predictability which was discussed in last part the Nanodegree by improving the application’s state, establishs the rules for listening, getting, 
and updating the store, identifies which state should live inside of Redux and which state should live inside of React components.

# Project featuers

The app will allow users to:

view polls
answer poll questions
view how other user's votes
view which polls haven’t been answered yet
view the rank of users on a leader board
create poll questions

# Project breakdown:

App: Has a route to all project pages , default is Home
Login (view): handle the login and maps over the list of users 
Nav: Navbar of the application which includes the Home, Leader board, New poll, user picture and name, and logout button
Home (view): Home page which maps over the answered and unanswered questions.
UserCard: which represents the author name and avatar.
PollTeaser: which represents the question of the author
PollQuestion (view): which represents the answers
PollResult (view): which represents the result of the poll
Poll404 (view): 404 Error page
NewPoll (view): Enables the user to create a new poll
Leaderboard (view): maps over the data from the leaderBoardData

# Installation:

$ git clone https://github.com/NorahAlShaikhMubarak/Would-you-rather.git

$ cd would-you-rather

$ npm install

# Usage

Use the following command to run the browser:
npm start

The project can be viewed in the browser at:
http://localhost:3000

# Screenshots of the project running
<img width="1039" alt="Screen Shot 2022-05-02 at 1 51 14 AM" src="https://user-images.githubusercontent.com/50755701/166168806-b18e03b1-6090-46a7-84a0-8d8b125035b0.png">

<img width="1045" alt="Screen Shot 2022-05-02 at 1 50 51 AM" src="https://user-images.githubusercontent.com/50755701/166168808-25006dd8-d171-4090-88c5-ea580baf42e5.png">

<img width="1046" alt="Screen Shot 2022-05-02 at 1 50 59 AM" src="https://user-images.githubusercontent.com/50755701/166168810-ec127870-062d-4b29-a8ad-75cc8d6eefda.png">

<img width="1035" alt="Screen Shot 2022-05-02 at 1 51 05 AM" src="https://user-images.githubusercontent.com/50755701/166168811-632bb59e-7ff2-4ae3-95e3-18022d4c4d6e.png">
