import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
//import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: 'resume', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  {path:'**',
    redirectTo:""
  }
  // {path:'contact',component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
