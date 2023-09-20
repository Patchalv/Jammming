# About Jammming

Jammming is a React app which uses allows users to log into their Spotify account, and search for songs and to create playlists from those songs.

If you want to see the app in action, here is a deployed version of Netlify: https://jammming-spotifyapi.netlify.app/


## Motivation of the project

I am currently in the process of completing a full-stack development course. Through this project, I attempted to learn the following:

* Gain hands-on experience developing a React app from planning, designing, to developing
* Familiarize myself with React JSX syntax
* Learn how to set up states using hooks, especially useState()
* Learn how to pass states using props and use them through components
* Learn to update states based on user inputs through forms
* Learn to read and understand API documentations (Spotify API documentation: https://developer.spotify.com/documentation/web-api)
* Learn to update states with json objects returned from the API calls
* Learn how to handle API calls, especially GET and POST requests
* Learn to use an API token without exposing it online
* Learn to deploy a website using Netlify

## How does Jammming work?

Jammming is a React app which uses allows users to log into their Spotify account, and search for songs and to create playlists from those songs.

**Description of Use:**
1. Search songs by titles, albums, or artists in the input section.
2. If you are not logged into your Spotify account, you will be directed to a Spotify log-in page. Log into Spotify.
3. After logging in, you will be redirected back to the Jammming page. Search songs again.
4. Songs will be shown under "Results". If you have songs that you would like to add to your playlist, click on plus icons. The added songs will be displayed in the panel named "My Playlist".
5. If you change your mind and want to remove certain songs, click on the minus buttons.
6. You can change the default playlist name, "My Playlist", to any names of your choice.
7. Click on "Save to Spotify" to save your playlist to your Spotify account.

## Technologies Used

Jammming uses many technologies for it to work:

* React with function components
* useState() React hook
* Fetch API with GET and POST requests
* Spotify API
* Dealing with Restful API and Json data
* Hiding API token in an environmental variable
* Deployment with Netlify

## Special thanks to Codecademy

This project was possible thanks to the guidance provided by Codecademy course.
Codecademy provided me with detailed step-by-step guidance on how to develop this app.
Its community forum also provided me with many useful tips and examples of codes to try on for this app.

## Issues to be Ironed Out:
- [ ] API request to log into Spotify on page load, rather than after trying to search.
- [ ] First search not saving.
- [ ] When song added to playlist column, it should be removed from the results column
- [ ] When song removed from results column, it should return to the playlist column.
- [x] Hiding API token in an environmental variable