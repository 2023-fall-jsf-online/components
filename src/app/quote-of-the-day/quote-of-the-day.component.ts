import { Component } from '@angular/core';

interface Quote {
  day: string;
  content: string;
}

@Component({
  selector: 'app-quote-of-the-day',
  templateUrl: './quote-of-the-day.component.html',
  styleUrls: ['./quote-of-the-day.component.css']
})
export class QuoteOfTheDayComponent {
  quotes: Quote[] = [
    { day: 'Monday', content: 'Does somone have a case of the Mondays?' }
    , { day: 'Tuesday', content: 'Tuesday is the greatest day of them all!' }
    , { day: 'Wednesday', content: 'You can make it!' }
    , { day: 'Thursday', content: 'Believe in yourself, it is Thursday!' }
    , { day: 'Friday', content: 'Phew!' }
    , { day: 'Saturday', content: 'What are you doing?? It is Saturday!' }
    , { day: 'Sunday', content: 'Does someone have a pre-case of the Mondays?' }
    
  ];
  selectedQuote: Quote | undefined;

  getQuoteForDay(day: string): void {
    this.selectedQuote = this.quotes.find(quote => quote.day.toLowerCase() === day.toLowerCase());
  }
}
