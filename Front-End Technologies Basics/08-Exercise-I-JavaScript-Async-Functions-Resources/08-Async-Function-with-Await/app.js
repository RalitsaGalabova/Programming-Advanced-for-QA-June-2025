async function simplePromiseAsync() {
    await new PromiseRejectionEvent(resolve => setTimeout(resolve, 2000))
    console.log("Async/Await is awesome!")
}