import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-translation-card',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="card">
      <div class="card-content">
        <h2 class="card-title">{{ 'CARD.TITLE' | translate }}</h2>
        <p class="card-text">{{ 'CARD.GREETING' | translate }}</p>
        <p class="card-text">{{ 'CARD.WELCOME' | translate }}</p>
        <p class="card-description">{{ 'CARD.DESCRIPTION' | translate }}</p>
        
        <div class="info-section">
          <h3>{{ 'CARD.INFO_TITLE' | translate }}</h3>
          <ul>
            <li>{{ 'CARD.INFO_ITEM1' | translate }}</li>
            <li>{{ 'CARD.INFO_ITEM2' | translate }}</li>
            <li>{{ 'CARD.INFO_ITEM3' | translate }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 500px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    
    .card-content {
      padding: 24px;
    }
    
    .card-title {
      color: #3B82F6;
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 1.5rem;
      font-weight: 600;
      position: relative;
    }
    
    .card-title:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 3px;
      background-color: #3B82F6;
      transition: width 0.3s ease;
    }
    
    .card:hover .card-title:after {
      width: 80px;
    }
    
    .card-text {
      color: #374151;
      font-size: 1.125rem;
      line-height: 1.5;
      margin-bottom: 16px;
    }
    
    .card-description {
      color: #6B7280;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    
    .info-section {
      background-color: #F3F4F6;
      padding: 16px;
      border-radius: 4px;
      margin-top: 16px;
      border-left: 3px solid #3B82F6;
    }
    
    .info-section h3 {
      color: #4B5563;
      margin-top: 0;
      margin-bottom: 12px;
      font-size: 1.1rem;
    }
    
    .info-section ul {
      margin: 0;
      padding-left: 24px;
    }
    
    .info-section li {
      margin-bottom: 8px;
      color: #4B5563;
      position: relative;
    }
    
    .info-section li:last-child {
      margin-bottom: 0;
    }
  `]
})
export class TranslationCardComponent {}