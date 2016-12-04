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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var angularfire2_1 = require('angularfire2');
var HeroService = (function () {
    function HeroService(af, http) {
        this.af = af;
        this.http = http;
        this.useFire = false;
        this.angularFire = af;
    }
    HeroService.prototype.getFoods = function () {
        return this.http.get('/heroes.json').map(function (res) { return res.json(); });
    };
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        if (this.useFire === true) {
            console.log('fetching from firebase');
            return this.angularFire.list('/').map(function (response) { return response; });
        }
        else {
            console.log('fetching local json');
            this.http.get('/heroes.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { _this.heroes = data; }, function (err) { return console.error(err); }, function () { return console.log('done local fetching'); });
            console.log(this.heroes);
        }
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map