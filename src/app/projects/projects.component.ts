import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [ 
    {image:'../../assets/felive.jpg',
  title:'Frontend Live',
  Description: 'Online live code editor for HTML, CSS and JavaScript where you can write code seamlessly and visualize the output on the go.',
  TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png", "../../assets/react.png"],
  liveUrl : 'https://frontend-live.netlify.app/'
   },
    {image:'../../assets/speachinator.jpg',
  title:'Speachinator',
  Description: 'Application which can be used to covert text to voice/speach which uses browser\'s speach syntheses utterence api.',
  TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png", "../../assets/react.png"],
  liveUrl : 'https://speachinator.netlify.app/'
   },

    {image:'../../assets/slideshow.JPG',
    title:'Pokemon Displayinator',
    Description: 'A custom made carousel component, which takes array of images and have all the basic features that are required for a carousel component.',
    TechStack:["../../assets/html.png","../../assets/css.png","../../assets/ts.png", "../../assets/angular.png"],
    liveUrl : 'https://pokemondisplayinator.netlify.app/'
     },
     {image:'../../assets/color-extractinator.JPG',
      title:'Color Extractinator',
      Description: 'Simple Tool which you can use to determine the colors present in an image.',
      TechStack:["../../assets/html.png","../../assets/css.png","../../assets/ts.png", "../../assets/angular.png"],
      liveUrl : 'https://color-extractinator.netlify.app/'
    },
    {image:'../../assets/textinator.JPG',
     title:'Audio Textinator',
     Description: 'Audio Trasncription tool with copy to clipboard freature.',
     TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png", "../../assets/react.png"],
     liveUrl : 'https://audio-textinator.netlify.app/'
    },
    {image:'../../assets/cattyreq.JPG',
     title:'Cat Requests',
     Description: 'You can learn about HTTP Codes with funny cat images.',
     TechStack:["../../assets/html.png","../../assets/css.png","../../assets/js.png", "../../assets/react.png"],
     liveUrl : 'https://cat-requests.netlify.app/'
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
