"use strict";
var Observable_1 = require('rxjs/Observable');
var NoticeService = (function () {
    function NoticeService(heroService) {
        var _this = this;
        this.heroService = heroService;
        this.notice = new Observable_1.Observable(function (observer) {
            _this.observer = observer;
        }).share();
    }
    NoticeService.prototype.create = function (value) {
        var _this = this;
        this.heroService.getHeroes().subscribe(function (translatedValue) {
            _this.observer.next(translatedValue);
        });
    };
    return NoticeService;
}());
exports.NoticeService = NoticeService;
//# sourceMappingURL=notice.service.js.map