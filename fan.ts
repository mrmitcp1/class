// @ts-ignore
// @ts-ignore

enum Speed {
    SLOW=1 ,
    MEDIUM,
    FAST
}
class Fan {
    speed:Speed = Speed.SLOW
    on
    radius
    color
    constructor() {
        this.speed = 1
        this.on = false
        this.radius = 5
        this.color= 'blue'

    }
    getterSpeed (){
        return this.speed
    }
    setterSpeed(speed : Speed){
        this.speed = speed
    }
    getterRadius(){
        return this.radius
    }
    setterRadius(radius : number){
        this.radius=radius
    }
    getterColor(){
        return this.color
    }
    setterColor(color : string){
        this.color=color
    }
    getterOn(){
        return this.on
    }
    setterOn(on : boolean){
        this.on = on
    }
    dataString() {
        if (this.on){
            return `Speed : ${this.speed}, Color : ${this.color}, Radius :${this.radius} . Fan is on`
        }
        else {
            return `Color : ${this.color}, Radius :${this.radius}, Fan is off`
        }
    }
}


const fan1=new Fan()
fan1.setterSpeed(Speed.MEDIUM)
fan1.setterColor('yellow')
fan1.setterRadius(10)
fan1.setterOn(true)
console.log(fan1.dataString())
const fan2=new Fan()
fan2.setterSpeed(Speed.FAST);
fan2.setterColor('blue')
fan2.setterRadius(5);
fan2.setterOn(false);
console.log(fan2.dataString())