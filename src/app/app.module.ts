import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes } from '@angular/router';
import { StockTrackerService } from './stock-tracker.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialSentimentComponent } from './social-sentiment/social-sentiment.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'sentiment/:symbol', component: SocialSentimentComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  providers: [StockTrackerService],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
