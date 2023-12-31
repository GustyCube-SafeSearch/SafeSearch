# SafeSearch
A project set to make the internet a safer place by adding a free database that people can browse and contribute to.
<br>
[![CodeFactor](https://www.codefactor.io/repository/github/gustycube/safesearch/badge)](https://www.codefactor.io/repository/github/gustycube/safesearch)
![GitHub stars](https://img.shields.io/github/stars/GustyCube/SafeSearch?style=social)
![GitHub forks](https://img.shields.io/github/forks/GustyCube/SafeSearch?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/GustyCube/SafeSearch)


# Use
To use, simply type in your URL in the search bar and either press enter or click the search button. 

# Add
To add your own knowledge, add a pull request with updates and I will do my best to look through it. Make sure to add proper information. To help improve, do something from the To-Do list.

## Adding to the Database
To add to the database, click the green "Code" button on the GitHub repository, and click on CodeSpaces. Add one, and open it in what you would like. You can go to the pull request icon and click the commit button. After you have finished entering your message, you can click the checkmark in the top right to continue. then hit commit changes. Follow the options below to continue. 
#### Option 1 (Beta)
Go to [safesearch.gustycube.xyz/objectCreator.html](https://safesearch.gustycube.xyz/objectCreator.html), and enter in the prompts. In the JSON file, you can add a comma to the previous entry, and then add your code below.

Once you are done, enter it into a pull request with a clear description and I will do my best to look through it and allow it.

#### Option 2
To add to the database, add the following code underneath the previous site after adding a comma to the closing bracket.
```
},
"example.com": {
    "URL": "example.com",
    "ratingImage": "https://raw.githubusercontent.com/GustyCube/SafeSearch/main/Assets/greenRating.svg",
    "ratingDisc": "This website is safe.",
    "providedDescription": "This website is an example",
    "funFact": "It's an example",
    "summary": "This website is an example."
}
```

If your entry is a social media website, please add the following code: 
```
"ratingImage": "https://raw.githubusercontent.com/GustyCube/SafeSearch/main/Assets/yellowRating.svg",
"ratingDisc": "This website is a social media platform, so you should watch for unsafe posts, and strangers.",
```

If your website is a search engine, please add the following code:
```
"ratingImage": "https://raw.githubusercontent.com/GustyCube/SafeSearch/main/Assets/greenRating.svg",
"ratingDisc": "This website is rated safe. However, since this is a search engine, the results may not all fit this rating.",
```

The three rating images are: 
* Green (Safe) rating: `https://raw.githubusercontent.com/GustyCube/SafeSearch/main/Assets/greenRating.svg`
* Yellow (Intermidiate) rating: `https://raw.githubusercontent.com/GustyCube/SafeSearch/main/Assets/yellowRating.svg`
* Red (Unsafe) rating: `https://raw.githubusercontent.com/GustyCube/SafeSearch/main/Assets/redRating.svg`

## Adding a Pull Request

When you add a pull request, please clearly state what you have done in your request. 
