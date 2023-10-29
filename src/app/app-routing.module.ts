import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* -- Pages Import -- */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarsComponent } from './pages/cars/cars.component';
import { BikesComponent } from './pages/bikes/bikes.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

/* -- Components Import -- */
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const routes: Routes = [
    //-- Home Page
    { path: '', component: IntroductionComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'bikes', component: BikesComponent },

    //-- Components
    { path: 'personal-info', component: PersonalInfoComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact-details', component: ContactDetailsComponent },

    //-- Page Not Found
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
