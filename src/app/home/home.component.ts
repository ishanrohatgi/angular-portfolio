import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jumped = false;

 clicked(){
  this.jumped = true;
  setTimeout(()=>{
    this.jumped = false;
  },1000);
 }
  constructor() { }

  ngOnInit(): void {
  }

}
