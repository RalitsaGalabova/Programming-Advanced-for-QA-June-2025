function racePromise() {
    const p1 = new Promise((resolve) =>{
        setTimeout(()=> resolve("1 sec"), 1000)
    }
    )
    const p2 = new Promise((resolve) =>{
        setTimeout(()=> resolve("2 sec"), 2000)
    }
    )
    const p3 = new Promise((resolve) =>{
        setTimeout(()=> resolve("3 sec"), 3000)
    }
    )

    Promise.race([p1,p2,p3]).that(console.log)
}