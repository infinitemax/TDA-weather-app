export class Day {
    constructor(day, date, summary, maxTemp, minTemp, windSpeed) {
        this.day = day,
        this.date = date,
        this.summary = summary,
        this.maxTemp = maxTemp,
        this.minTemp = minTemp,
        this.windSpeed = windSpeed
    }

    capitalise(sentence){
        let array = sentence.split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }
}