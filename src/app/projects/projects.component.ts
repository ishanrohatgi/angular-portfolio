import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {image:'../../assets/cattyreq.JPG',
     title:'Cat Requests',
     Description: 'You can learn about HTTP Codes with funny cat images.',
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
     Description: 'Web simulation of famous Newton\'s cradle.',
     TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png"],
     liveUrl : 'https://ishanrohatgi.github.io/newton-cradle/'
    },
    {image:'../../assets/cheems.JPG',
     title:'Catch The Cheems',
     Description: 'Never ending game to catch your fav cheem character.',
     TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png"],
     liveUrl : 'https://ishanrohatgi.github.io/catch-the-cheems/'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
