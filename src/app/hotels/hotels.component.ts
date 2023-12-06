import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
city:string=""
chooseDate!:Date[]
rooms:string=""
roomsArr:string[] = ["1 Room, 1 Adult", "1 Room, 2 Adults","2 Rooms, 4 Adult"]
checkIn:any
checkOut:any

selroom(data:any){
this.rooms = data

}

dateSelect(){
  if(this.chooseDate && this.chooseDate.length == 2){
    this.checkIn = this.chooseDate[0]
    this.checkOut = this.chooseDate[1]
  }
}
searchHotels(){
  console.log("city is" , this.city)
  console.log("rooms are" , this.rooms)
  console.log("chosen date", this.checkIn)
  console.log("chosen date", this.checkOut)
}
}
