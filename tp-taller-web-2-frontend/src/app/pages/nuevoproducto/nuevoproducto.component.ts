import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css'],
})
export class NuevoproductoComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    if (this.cookieService.get('rol') !== 'AdminGarlop') {
      this.router.navigate(['/home']);
    }
  }
}
