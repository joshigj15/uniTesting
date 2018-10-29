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
import { ActivatedRoute } from '@angular/router';
var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(route, eventData) {
        this.route = route;
        this.eventData = eventData;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    EventDetailsComponent.prototype.getDetails = function () {
        var _this = this;
        var eventId = +this.route.snapshot.paramMap.get('eventId');
        this.eventData.getEventDetails(eventId)
            .subscribe(function (event) {
            // this.Event = event
            // console.log(this.Event);
            // if(this.Event.Status===true && this.Event.MessageId===0){
            //   this.selectedEvent=this.Event.Results.Table1[0];
            //   console.log(this.selectedEvent);
            // }
            // else {
            //   alert("Error in getting event details");
            // }
            console.log(event);
            if (event.Status === true && event.MessageId === 0) {
                _this.selectedEvent = event.Results.Table1[0];
                console.log(_this.selectedEvent);
            }
            else {
                alert("Error in getting event details");
            }
        });
    };
    EventDetailsComponent = __decorate([
        Component({
            selector: 'app-event-details',
            templateUrl: './event-details.component.html',
            styleUrls: ['./event-details.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, EventDataService])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());
export { EventDetailsComponent };
//# sourceMappingURL=event-details.component.js.map