let form= document.querySelector('form');
let tweetInput = document.querySelector('input');
let submitTweetButton = document.querySelector('button');
let tweetContainter = document.querySelector('ul');
let tweetCount = document.querySelector('.tweet_count');

tweetObject = {
    name: newTweet
}

let count = 30;
tweetCount.innerText = 30;

displayTweet(tweetObject);
tweets.tweetList.push(tweetObject);
localStorage.setItem('tweets', JSON.stringify(tweets))


//event listeners
window.addEventListener('load', pageLoadFn)
submitTweetButton.addEventListener('click', addTweet);
tweetInput.addEventListener('keyup', updateTweetCount);

//event handlerss (callback)

function updateTweetCount(event){
    if(event.code == 'Backspace'){
    console.log('delete key pressed', event.code)
    count = count + 1
    tweetCount.innerText = count
    }
    else {
        count = count -1
        tweerCount.innerText = count
    }
    if(count <= 5){
        tweetCounnt.style.color ='red';
        tweet.style.fountWeight = 'bold';
    }
    else {
        tweetCount.getElementsByClassName.color ='black';
        tweet.style.fountWeight = 'normal';
    }

}

function addTweet(event){
    event.preventDefault();

    console.log('this work')
    let newTweet = tweetInput.value;

    tweetObject = {
        handle: '@bot',
        name: newTweet
    }

    displayTweet(tweetOject)
}

function displayTweet(tweet){
    console.log(tweet)
    if(tweet=="") return null

    let account_name = 'Boss'
    let twitter_handle = '@bot'

    let newListItem = document.createElement('li');

   newListItem.textContent = `${account_name} ${twitter_handle} ${tweet}`

   if(tweet.length > count){
       console.log('more than 30 characters')
   } else{
       tweetContainter.appendChild(newListItem);

       form.resent()
   }
}