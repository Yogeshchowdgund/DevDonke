import { ApplicationConfig, provideZoneChangeDetection,APP_INITIALIZER  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DataInitService } from './Services/data-init.service';
import { provideAnimations } from '@angular/platform-browser/animations';
export function InitialiseData(dataInitService: DataInitService) {
  return () => dataInitService.initializeData();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimations(),
    provideClientHydration(), 
    provideHttpClient(withFetch()),
    {
      provide:APP_INITIALIZER,
      useFactory:InitialiseData,
      deps:[DataInitService],
      multi:true
    }
  ]
};
