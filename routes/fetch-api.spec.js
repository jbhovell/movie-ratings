const axios = require('axios')
const { fetch } = require('./fetch-api')
jest.mock('axios')

describe('test jest setup', () => {
    test('it should pass', () => {
        expect(true).toBe(true)
    })
})

describe('test fetch api', async () => {
    const rep =
        [
            {
                status: 200,
                statusText: 'OK',
                data: {
                    Title: 'War',
                    Year: '2007',
                    Rated: 'R',
                    Released: '24 Aug 2007',
                    Runtime: '103 min',
                    Genre: 'Action, Crime, Thriller',
                    Director: 'Philip G. Atwell',
                    Writer: 'Lee Anthony Smith, Gregory J. Bradley',
                    Actors: 'Jet Li, Jason Statham, John Lone, Devon Aoki',
                    Plot: 'An FBI Agent seeks vengeance on a mysterious assassin known as "Rogue" who murdered his partner.',
                    Language: 'English, Mandarin, Japanese, Cantonese',
                    Country: 'USA, Canada',
                    Awards: 'N/A',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BNTIwMjE2Mjc1MF5BMl5BanBnXkFtZTYwNzI0OTI3._V1_SX300.jpg',
                    Ratings: [Array],
                    Metascore: '36',
                    imdbRating: '6.2',
                    imdbVotes: '85,745',
                    imdbID: 'tt0499556',
                    Type: 'movie',
                    DVD: '05 Jun 2007',
                    BoxOffice: '$22,486,409',
                    Production: 'New Glory Productions',
                    Website: 'N/A',
                    Response: 'True'
                }
            },
            {
                status: 200,
                statusText: 'OK',
                data: {
                    Title: 'Guardians of the Galaxy Vol. 2',
                    Year: '2017',
                    Rated: 'PG-13',
                    Released: '05 May 2017',
                    Runtime: '136 min',
                    Genre: 'Action, Adventure, Comedy, Sci-Fi',
                    Director: 'James Gunn',
                    Writer: 'James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)',
                    Actors: 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel',
                    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
                    Language: 'English',
                    Country: 'USA',
                    Awards: 'Nominated for 1 Oscar. Another 15 wins & 57 nominations.',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
                    Ratings: [Array],
                    Metascore: '67',
                    imdbRating: '7.6',
                    imdbVotes: '573,212',
                    imdbID: 'tt3896198',
                    Type: 'movie',
                    DVD: '10 Jul 2017',
                    BoxOffice: '$389,813,101',
                    Production: 'Marvel Studios, Walt Disney Pictures',
                    Website: 'N/A',
                    Response: 'True'
                }
            },
            {
                status: 200,
                statusText: 'OK',
                data: {
                    Title: 'Queen of Beggars',
                    Year: '2021–',
                    Rated: 'N/A',
                    Released: '06 Jan 2021',
                    Runtime: 'N/A',
                    Genre: 'Drama, Romance',
                    Director: 'N/A',
                    Writer: 'N/A',
                    Actors: 'Arman Darvish, Shabnam Ghorbani, Baran Kosari, Pantea Bahram',
                    Plot: 'N/A',
                    Language: 'Persian',
                    Country: 'Iran',
                    Awards: 'N/A',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BZWMzNzk0MTEtMTMxYi00NGFhLWE2OTMtZjQxMDMxMjVhMWY5XkEyXkFqcGdeQXVyMTEzNjc2OTI3._V1_SX300.jpg',
                    Ratings: [Array],
                    Metascore: 'N/A',
                    imdbRating: '5.6',
                    imdbVotes: '245',
                    imdbID: 'tt13767550',
                    Type: 'series',
                    totalSeasons: 'N/A',
                    Response: 'True'
                }
            }
        ]

    axios.all.mockResolvedValue(rep)
    const result = await fetch();
    expect(axios.all).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(result).toEqual([JSON.stringify(data1), JSON.stringify(data2), JSON.stringify(data3)]);
})

