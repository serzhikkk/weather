import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CurrentComponent } from './components/currentWeather/currentWeather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ResolveLocationService } from './services/resolve-location.service';

const WEATHER_ROUTER: Routes = [
	{ path: '', component: CurrentComponent, resolve: { myWeather: ResolveLocationService } },//запрос для текущей погоды
	{ path: 'forecast', component: ForecastComponent }//запрос для прогноза погоды
]
export const weatherRouting: ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER);