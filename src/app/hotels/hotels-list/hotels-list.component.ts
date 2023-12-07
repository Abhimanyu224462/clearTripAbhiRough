import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent {
  hotelListObj:any = {
city: "",
checkIn:null,
checkOut:null,
rooms:""
  }


  constructor(private ActivatedRoute:ActivatedRoute, private http:HttpService ){
    this.hotelListObj.city = this.ActivatedRoute.snapshot.queryParamMap.get("city")
    this.hotelListObj.checkIn = this.ActivatedRoute.snapshot.queryParamMap.get("checkIn")
    this.hotelListObj.checkOut = this.ActivatedRoute.snapshot.queryParamMap.get("checkOut")
    this.hotelListObj.rooms = this.ActivatedRoute.snapshot.queryParamMap.get("rooms")

    console.log("list are", this.hotelListObj)
  }

  

  

  ngOnInit(){
   let endPoint="search-hotels?city=" + this.hotelListObj.city + "&checkIn=" + this.hotelListObj.checkIn + "&checkOut=" + this.hotelListObj.checkOut + "&rooms=" + this.hotelListObj.rooms
   this.http.getDataFromServer(endPoint).subscribe((response:any)=>{
    console.log("Response we get", response)
   })
  }
  // ngOnInit(){
  //   let endPoint="search-hotels?city=" + this.hotelListObj.city + "&checkIn=" + this.hotelListObj.checkIn + "&checkOut=" + this.hotelListObj.checkOut + "&rooms=" + this.hotelListObj.rooms
  //   this.http.getDataFromServer(endPoint).subscribe((response:any)=>{
  //    console.log("Response we get", response)
  //   })
}
