## Movie Ratings
I love watching movies, but only if they are recommended by other audiences so I don't waste too much of my time.

So, I wrote this little app to help me search movies I am interested in, calculate average ratings from multiple trusted sources for each of them, and list them from high to low ratings.

#### Run
```
npm i
npm start
http://localhost:3000
```

On the home page, fill in the form with the keyword in the movie title, submit, and it will pull out the results for you.


#### Todo

sort by year, title, reverse sort ratings

maitain a queue in memory for sending emails to users?

bot as the form?

load top 10 films/dramas on iplayer, either use bbc iplayer Nitro api, dan's link or web scrapping (may use existing npm package).

add links & thumbnails of the films/dramas on iplayer

cache for iplayer, no need to call the api and recalculate for every request as the schedue don't change too frequently

recently queried film can be retreived from a client AND server cache

cache ratings in ram and disk (sqlite)
timestamp for cached ratings for expiry after 1 day?

user input validation ( both client and server side). 

limit the words/chars in comments

deploy

better api than https://www.omdbapi.com?



