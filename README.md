# Movie Ratings
My 10% time project. I have demoed it on the Media Services' innovation day in April.

I used Node.js and Express for the backend, Handlebars for the frontend.


### Context
I like watching movies, but I don't want to waste my time watching something not good unless it is recommended.

So, I wrote this app to help me search movies I am interested in, calculate average ratings from multiple trusted sources for each of them, and order them from high to low ratings.

### Architecture

<img src="public/movie.png">

### Run
```
npm i
npm start
http://localhost:3000
```

On the home page, fill in the form with the keyword in the movie title, submit it, and it will pull out the results for you.

<img src="public/form.png">

<img src="public/result.png">

### To Do

- [ ] split frontend and backend into two components.

- [ ] sort by year, title, reverse sort ratings

- [ ] load top 5 films/dramas currently on iPlayer, from a report in the S3 bucket.

- [ ] cache for iPlayer, no need to call the API and recalculate for every request as the schedules don't change frequently.

- [ ] recently queried films can be retrieved from a server-side cache

- [ ] iPlayer Poller Lambda function,  run once a day, queries APPW/IBL, compute ratings, save the report in an S3 bucket.

- [ ] Messenger, Lambda function, triggered by S3 upload and send iPlayer ratings to users by emails once a day.

- [ ] user input validation ( both client and server-side). 

- [ ] limit the words/chars in comments.
