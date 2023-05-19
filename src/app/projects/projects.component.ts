import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {image:'../../assets/cattyreq.JPG',
     title:'Catty Requests',
     Description: 'An app where you can study about all HTTP statues and codes.',
     TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png", "../../assets/react.png"],
     liveUrl : 'https://cat-requests.netlify.app/'
    },
    {image:'../../assets/ytd.JPG',
     title:'Youtube Downloader',
     Description: 'An app where you can download Youtube Videos using its URL.',
     TechStack:["../../assets/html.png","../../assets/css.png","../../assets/ts.png", "../../assets/angular.png","../../assets/node.png"],
     liveUrl : 'https://youtube-saver.netlify.app/'
    },
    {image:'../../assets/newton.JPG',
     title:'Newton\'s Cradle',
     Description: 'A simple app in which you can experience the Newton\'s cradle effect which states that demonstrates conservation of momentum and energy using a series of swinging spheres',
     TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png"],
     liveUrl : 'https://ishanrohatgi.github.io/newton-cradle/'
    },
    {image:'../../assets/cheems.JPG',
     title:'Catch The Cheems',
     Description: 'A simple game where you click on a character and squre of the number of character appears on the screen and the game goes on and score increases.',
     TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png"],
     liveUrl : 'https://ishanrohatgi.github.io/catch-the-cheems/'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
