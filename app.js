
// Asynchronous
setTimeout(() => {
    console.log('Timer is done.');
    console.log('Asynchronous')
}, 2000);
// Synchronous
console.log('Synchronous');

// CallBacks
const posts = [
    { title: 'p1', body: 'post one' },
    { title: 'p2', body: 'post two' },
]
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output = output + `${index + 1}. ${post.title} - ${post.body}\n`;
        });
        console.log(output); 
        return output;
    }, 2000);
}
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
getPosts();
const post = {
    title: 'p3',
    body: 'post three'
};
createPost(post, getPosts);
//Promises
const comments = [
    { title: 'c1', body: 'comment one' },
    { title: 'c2', body: 'comment two' },
]
function getComments() {
    setTimeout(() => {
        let output = '';
        comments.forEach((comment, index) => {
            output = output + `${index + 1}. ${comment.title} - ${comment.body}\n`;
        });
        console.log(output); 
        return output;
    }, 2000);
}
function createComment(comment) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            comments.push(comment);
            const error = false;
            if(!error) resolve();
            else reject('Error: Somthing went wrong.')
        }, 2000);
    });
}
getComments();
const comment = {
    title: 'c3',
    body: 'comment three'
};
createComment(comment)
    .then(getComments)
    .catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello Promise One');
const promise2 = 12;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
});
// const promise4 = fetch.get('https://jsonplaceholder.typicode.com/users')
//                     .then(res => res.json() );
Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values));

// Async/Await
async function init() {
    await createComment(comment);
    await getComments();
}
init();