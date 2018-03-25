import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent} from './projects/projects.component';
import { MenuComponent } from './menu.component';
import { ServicesComponent } from  './services/services.component';
import { HomeComponent } from './home/home.component';


const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component:ProjectsComponent } ,
    { path: 'menu', component: MenuComponent  },
    { path: 'services', component:ServicesComponent  },
    { path: 'home', component:HomeComponent  },
   
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);