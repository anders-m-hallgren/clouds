"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_component_1 = require('./hero.component');
var hero_service_1 = require('./hero.service');
var tooltip_1 = require('./tooltip');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.foods_error = false;
        this.message = "hi clouds.se";
        this.heroes_error = false;
        console.log('list of heroes:', this.heroes);
    }
    HeroesComponent.prototype.getFoods = function () {
        var _this = this;
        this.heroService.getFoods().subscribe(function (data) { _this.foods = data; }, function (err) { _this.foods_error = true; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        console.log('init heroComponent');
        this.getFoods();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toh-heroes',
            template: "\n  <div>This is the \"Heroes\" page</div>\n  <h2>Foods</h2>\n  <div *ngIf=\"foods_error\">An error occurred while loading the foods!</div>\n  <ul>\n    <li *ngFor=\"let food of foods\">{{food.name}}</li>\n  </ul>\n  <!--\n  <ul class='heroes'>\n    <li *ngFor=\"let hero of foods\">\n        <span class='badge'> {{hero.id}}</span>\n        {{hero.name}}\n    </li>\n</ul>\n-->\n  ",
            directives: [hero_component_1.HeroComponent, tooltip_1.Tooltip],
            providers: [hero_service_1.HeroService],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map