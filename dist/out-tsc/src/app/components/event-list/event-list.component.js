var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EventDataService } from '../../services/event-data.service';
import { Router } from '@angular/router';
var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventData, router) {
        this.eventData = eventData;
        this.router = router;
        this.eventsList = [];
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    EventListComponent.prototype.getList = function () {
        var _this = this;
        var myObj = {
            "ListType": "Full",
            "LatLong": "Point(-84.3879824 33.7489954)"
        };
        this.eventData.getEventList(myObj)
            .subscribe(function (result) {
            console.log(result);
            if (result.Status === true && result.MessageId === 0) {
                for (var i = 0; i < 15; i++) {
                    _this.eventsList.push(result.Results[i]);
                }
            }
            else {
                alert("Something Bad Happen can't show results");
            }
        });
    };
    EventListComponent = __decorate([
        Component({
            selector: 'app-event-list',
            templateUrl: './event-list.component.html',
            styleUrls: ['./event-list.component.css']
        }),
        __metadata("design:paramtypes", [EventDataService,
            Router])
    ], EventListComponent);
    return EventListComponent;
}());
export { EventListComponent };
//# sourceMappingURL=event-list.component.js.map