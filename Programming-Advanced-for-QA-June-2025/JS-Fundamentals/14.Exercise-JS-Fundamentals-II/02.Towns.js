function towns(inputArr) {
    class Town{
        constructor (name, lat=0, long=0){
            this.town = name
            this.latitude = lat
            this.longitude = long
        }
    }

    for (const element of inputArr) {
        let [name, latitudeStr, longitudeStr] = element.split(' | ')
        let latitude = Number(latitudeStr).toFixed(2)
        let longitude = Number(longitudeStr).toFixed(2)

        let city = new Town(name, latitude, longitude)
        console.log(`{ town: '${city.town}', latitude: '${city.latitude}', longitude: '${city.longitude}' }`)
    }
}