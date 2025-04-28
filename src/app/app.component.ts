import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslationCardComponent } from './components/translation-card/translation-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    TranslateModule,
    HeaderComponent,
    TranslationCardComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main class="main-content">
        <app-translation-card class="fade-in"></app-translation-card>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
    }
    
    .main-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Initialize translation service
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}