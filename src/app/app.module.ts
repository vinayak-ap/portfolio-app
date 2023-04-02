import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* -- Pages -- */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BikesComponent } from './pages/bikes/bikes.component';
import { CarsComponent } from './pages/cars/cars.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

/* -- Components -- */
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

/* -- Layouts -- */
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,

        /* -- Pages -- */
        HomePageComponent,
        BikesComponent,
        CarsComponent,
        PageNotFoundComponent,

        /* -- Components -- */
        PersonalInfoComponent,
        ProjectsComponent,
        IntroductionComponent,
        ContactDetailsComponent,

        /* -- Layouts -- */
        HeaderComponent,
        FooterComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
