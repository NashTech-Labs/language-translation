import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <header class="header">
      <div class="header-content">
        <h1 class="title">{{ 'APP.TITLE' | translate }}</h1>
        <div class="language-selector">
          <button 
            class="lang-btn" 
            [class.active]="currentLang === 'en'"
            (click)="changeLanguage('en')">
            EN
          </button>
          <button 
            class="lang-btn" 
            [class.active]="currentLang === 'fr'"
            (click)="changeLanguage('fr')">
            FR
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #3B82F6;
      color: white;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
      transition: transform 0.3s ease;
    }
    
    .title:hover {
      transform: translateY(-2px);
    }
    
    .language-selector {
      display: flex;
      gap: 8px;
    }
    
    .lang-btn {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
    }
    
    .lang-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    
    .lang-btn.active {
      background: white;
      color: #3B82F6;
    }
    
    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 12px;
      }
      
      .title {
        font-size: 1.25rem;
      }
    }
  `]
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}
  
  get currentLang(): string {
    return this.translate.currentLang;
  }
  
  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}