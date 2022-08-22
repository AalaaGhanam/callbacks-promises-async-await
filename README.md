# Callbacks, Promises, Async Await

Callbacks, Promises, Async/Await
### Asynchronous
 Asynchronous is when something is going on but you dont want to wait until that thing is
 done to continue your program, you want to continue while it's happining, so it's happining 
 asynchronously rather than asynchronous programing where something happens then u wait until it's
 completly finished until u move on to the next

```
// Asynchronous
setTimeout(() => {
    console.log('Timer is done.');
    console.log('Asynchronous')
}, 2000);
// Synchronous
console.log('Synchronous');
```

### CallBacks
 Callbacks were used for a long time until es6 was
 released where promises were introduced, callback is called
 right after the orignal function is done
 
### Promises
 Promises give you a more elegant way to hande asynchronous
 data, it looks more like synchronous programming rather
 than using the dot then()