import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() techStack: string[];
  @Input() liveUrl: string;
  constructor() { 
    this.title='';
    this.description ='';
    this.image ='';
    this.techStack=[];
    this.liveUrl='';
   }

  ngOnInit(): void {
    
  }

}
