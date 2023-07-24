# SafeSearch
A project set to make the internet a safer place by adding a free database that people can browse and contribute to.

# Use
To use, simply type in your url in the search bar and either press enter or click the search button. 

# Add
To add your own knowledge, add a pull request with updates and I will do my best to look through it. To help improve, do something from the To-Do list.

## Adding to the Database
TO add to the database, add the following code underneath the previous site after adding a comma to the closing bracket before.
```
},
"example.com": {
    "URL": "example.com",
    "ratingImage": "./Assets/greenRating.svg",
    "ratingDisc": "This website is safe.",
    "providedDescription": "This website is an example",
    "funFact": "It's an example",
    "summary": "This website is an example."
}
```

If your entry is a social media website, please add the following code: 
```
"ratingImage": "./Assets/yellowRating.svg",
"ratingDisc": "This website is a social media platform, so you should watch for unsafe posts, and strangers.",
```

If your website is a search engine, please add the following code:
```
"ratingImage": "./Assets/greenRating.svg",
"ratingDisc": "This website is rated safe. However, since this is a search engine, the results may not all fit this rating.",
```

## Adding a Pull Request

When you add a pull request, please clearly state what you have done in your request. 

#To-Do

* Add an "open link" button to the results
    * This can be accomplished by having a new _div_ element with the same styling as the others and have a button's link change with the information using javascript.
* Add a "news" catagory for certain websites
    * Using API? Maybe having a "news" that is true or false. If it's true, then it could use the "newsLink" to load something in?
* Add the option for users to add reviews
    * Accomplishable by having an API? 
* More advanced ratings
* Better styling