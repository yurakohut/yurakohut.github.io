(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-archive/admin-archive.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-archive/admin-archive.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-3\">\r\n  <button *ngIf=\"archiveOrders.length>0\" mat-raised-button (click)=\"deleteAllArchive()\" class=\"btn btn-danger\">Delete\r\n    archive</button>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <input [(ngModel)]=\"search\" name=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search..\" id=\"search\">\r\n</div>\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let order of archiveOrders.sort(sortArray) | filter:search;\" class=\"mb-2\">\r\n    <mat-expansion-panel-header class=\"expansion-panel\">\r\n      <mat-panel-title class=\"panelTitle\">\r\n        <div class=\"cardHeader\">\r\n          <p><span class=\"orderName\">{{order.name}}</span>\r\n          </p>\r\n        </div>\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        <span>{{order.date | date: 'dd/MM/yy, H:mm'}}</span>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <hr>\r\n    <p class=\"card-text\">Adress: {{order.adress}}\r\n    </p>\r\n    <p class=\"card-text\">Phone: {{order.number}}\r\n    </p>\r\n    <hr>\r\n    <div class=\"orderDescription\" *ngFor=\"let product of order.product; let i=index\">\r\n      <div class=\"orderDescription-flex\">\r\n        <ul>\r\n          <li><span class=\"textBold\">Category:</span> {{product.category}}</li>\r\n          <li><span class=\"textBold\">Name:</span> {{product.name}}</li>\r\n          <li><span class=\"textBold\">Count:</span> {{product.count}}</li>\r\n          <li><span class=\"textBold\">Price:</span> {{product.price * product.count}}грн </li>\r\n        </ul>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n    <h4 class=\"orderSum\">Together: {{orderSum(order.product)}} грн</h4>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-blacklist/admin-blacklist.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-blacklist/admin-blacklist.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\r\n  <input [(ngModel)]=\"search\" name=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search..\" id=\"search\">\r\n</div>\r\n<mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let user of blockedUsers | filter:search; trackBy: trackByPackId;\" class=\"mb-2\">\r\n    <mat-expansion-panel-header class=\"expansion-panel\">\r\n      <mat-panel-title class=\"panelTitle\">\r\n        <div class=\"cardHeader\">\r\n          <p><span class=\"postUsername\">{{user.username}}</span>\r\n            <span class=\"chipList\">\r\n              <mat-chip-list class=\"chipList\">\r\n                <mat-chip color=\"primary\" (click)=\"unblockModalUser(unblockModal,user)\" selected>Unblock\r\n                </mat-chip>\r\n              </mat-chip-list>\r\n            </span>\r\n          </p>\r\n        </div>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div *ngIf=\"user.blacklist.reason\">Reason: {{user.blacklist.reason}}</div>\r\n    <div *ngIf=\"!user.blacklist.reason\">Reason: not specified</div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<ng-template #unblockModal>\r\n  <div class=\"modal-body text-center\">\r\n    <p class=\"mb-2\">Do you want to unblock this user: {{blackListUser.username}}?</p>\r\n    <button mat-raised-button color=\"warn\" class=\"mr-2\" (click)=\"confirmUnblockUser()\">Unblock</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"closeWindow()\">Cancel</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-categories/admin-categories.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-categories/admin-categories.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"categoryName\">Category name</label>\r\n      <input type=\"text\" [(ngModel)]=\"categoryName\" name=\"categoryName\" (keyup)='checkCategoryValue($event)'\r\n        class=\"form-control\" id=\"categoryName\" placeholder=\"Type here..\">\r\n    </div>\r\n    <button type=\"button\" [disabled]=\"!categoryButtonAddCheck\" class=\"btn btn-success col-2\"\r\n      (click)=\"setData()\">Add</button>\r\n  </form>\r\n  <br>\r\n  <table class=\"table table-hover table-bordered table-responsive\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\" class=\"col-md-6\">Name</th>\r\n        <th scope=\"col\">Delete</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories; let i=index\">\r\n        <th scope=\"row\">\r\n          {{i+1}}\r\n        </th>\r\n        <td class=\"col-md-6\">\r\n          {{category.name}}\r\n        </td>\r\n        <td *ngIf=\"category.name !=='pizza'\">\r\n          <button type=\"button\" class=\"btn btn-danger\"\r\n            (click)=\"deleteData(category, deleteCategoryModal)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<ng-template #deleteCategoryModal>\r\n  <div class=\"modal-body text-center\">\r\n    <p class=\"mb-2\">Do you want to delete this category?\r\n      All products in this category will be deleted</p>\r\n    <button mat-raised-button class=\"btn btn-danger mr-2\" (click)=\"confirmDeleteCategory()\">Yes</button>\r\n    <button mat-raised-button class=\"btn btn-primary\" (click)=\"decline()\">No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feedback/admin-feedback.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feedback/admin-feedback.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\r\n  <input [(ngModel)]=\"search\" name=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search..\" id=\"search\">\r\n</div>\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let post of posts.sort(sortArray)  | filter:search; trackBy: trackByPackId;\"\r\n    class=\"mb-2\">\r\n    <mat-expansion-panel-header class=\"expansion-panel\">\r\n      <mat-panel-title class=\"panelTitle\">\r\n        <div class=\"cardHeader\">\r\n          <p><span class=\"postUsername\">{{post.writtenBy.username}}</span>\r\n            <span class=\"chipList\">\r\n              <mat-chip-list class=\"chipList\">\r\n                <mat-chip color=\"warn\" (click)=\"blockModalUser(blockModal,post.writtenBy)\" selected>Block\r\n                </mat-chip>\r\n              </mat-chip-list>\r\n            </span>\r\n          </p>\r\n        </div>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <hr>\r\n    <div>{{post.text}}</div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n<ng-template #blockModal>\r\n  <div class=\"modal-body text-center\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"userReasonBlock\">Reason:</label>\r\n        <textarea rows=\"5\" [(ngModel)]=\"userReasonBlock\" name=\"userReasonBlock\" class=\"form-control\"\r\n          id=\"userReasonBlock\" placeholder=\"not necessarily\r\n          \"></textarea>\r\n        <p>Warning: all messages from this user will be deleted\r\n        </p>\r\n      </div>\r\n    </form>\r\n    <button mat-raised-button color=\"warn\" class=\"mr-2\" (click)=\"confirmBlockUser()\">Block</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"closeWindow()\">Cancel</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-guests/admin-guests.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-guests/admin-guests.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n  <div class=\"containerText\">\r\n    <h3>What do you want to show?</h3>\r\n    <input type=\"text\" [(ngModel)]=\"anotherType\" name=\"anotherType\"\r\n      class=\"form-control col-12 col-sm-6 col-lg-4 col-xl-2 mr-2 anotherType\" placeholder=\"Type here\">\r\n    <button mat-raised-button color=\"accent\" [disabled]=\"!anotherType\" (click)=\"setType()\"\r\n      class=\"col-12 col-sm-6 col-lg-4 col-xl-2\">\r\n      Set</button>\r\n  </div>\r\n\r\n  <div class=\"addButton\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"openGuestModal(guestModal)\"\r\n      class=\"col-12 col-sm-6 col-lg-4 col-xl-2\">Add\r\n      {{showButtonType}}</button>\r\n  </div>\r\n\r\n  <ng-template #guestModal>\r\n    <div class=\"modal-body text-center\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"guestName\">Name</label>\r\n          <input [(ngModel)]=\"guestName\" name=\"guestName\" type=\"text\" class=\"form-control\" id=\"guestName\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"guestName\">\r\n          <label for=\"guestQuote\">Quote</label>\r\n          <br>\r\n          <textarea class=\"form-control\" [(ngModel)]=\"guestQuote\" name=\"guestQuote\" placeholder=\"not necessary\"\r\n            id=\"guestQuote\" rows=\"3\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"guestName\">\r\n          <label for=\"guestInfo\">More info</label>\r\n          <input [(ngModel)]=\"guestInfo\" name=\"guestInfo\" type=\"text\" class=\"form-control\" placeholder=\"not necessary\"\r\n            id=\"guestInfo\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"guestName\">\r\n          <label for=\"guestFile\">Image</label>\r\n          <div class=\"custom-file\">\r\n            <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\" accept=\".png,.jpg\" id=\"guestFile\" />\r\n            <label class=\"custom-file-label\" for=\"guestFile\">Choose file..</label>\r\n            <br>\r\n            <div class=\"progress\">\r\n              <div *ngIf=\"progress\" class=\"progress-bar progress-bar-striped bg-warning\" role=\"progressbar\"\r\n                [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\"\r\n                aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"addGuestPhotoCheck\">\r\n              <div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\r\n                File uploaded: <a [href]=\"downloadSrc\" target=\"_blank\">{{downloadSrc}}</a>\r\n                <div> <img src=\"{{guestPhoto}}\" alt=\"guest image\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"buttons\">\r\n          <div class=\"setButtons\">\r\n            <button *ngIf=\"guestPhoto && guestName\" type=\"button\" class=\"btn btn-success mr-2\"\r\n              (click)=\"setData()\">Add</button>\r\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"cancelData()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <table class=\"table table-hover table-bordered table-responsive\">\r\n    <thead class=\"thead-light\">\r\n      <tr class=\"text-center\">\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\" class=\"col-md-6\">Quote</th>\r\n        <th scope=\"col\">Photo</th>\r\n        <th scope=\"col\">Details</th>\r\n        <th scope=\"col\">Delete</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let guest of guests; let i=index\" class=\"text-center\">\r\n        <th scope=\"row\" class=\"align-middle\">\r\n          {{i+1}}\r\n        </th>\r\n        <td class=\"align-middle\">\r\n          {{guest.name}}\r\n        </td>\r\n        <td class=\"align-middle\">\r\n          {{guest.quote}}\r\n        </td>\r\n        <td class=\"align-middle\">\r\n          <img src=\"{{guest.photo}}\" alt=\"Guest photo\">\r\n        </td>\r\n        <td class=\"align-middle\">\r\n          {{guest.details}}\r\n        </td>\r\n        <td class=\"align-middle\">\r\n          <button mat-raised-button color=\"warn\" (click)=\"deleteData(guest, warningModal)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <ng-template #warningModal>\r\n    <div class=\"modal-body text-center\">\r\n      <p class=\"mb-2\">Do you want to delete this guest? ({{deleteGuest.name}})</p>\r\n      <button mat-raised-button class=\"btn btn-danger mr-2\" (click)=\"confirmDeleteGuest()\">Yes</button>\r\n      <button mat-raised-button class=\"btn btn-primary\" (click)=\"decline()\">No</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <simple-notifications [options]=\"options\"></simple-notifications>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-orders/admin-orders.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-orders/admin-orders.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel *ngFor=\"let order of orders.sort(sortArray);  trackBy: trackByPackId;\" class=\"mb-2\">\r\n      <mat-expansion-panel-header class=\"expansion-panel\">\r\n        <mat-panel-title class=\"panelTitle\">\r\n          <div class=\"cardHeader\">\r\n            <p>{{order.number}}<span class=\"orderName\">{{order.name}}</span>\r\n              <mat-chip-list class=\"chipList\">\r\n                <mat-chip *ngIf=\"order.isNew\" color=\"primary\" selected (click)=\"changeOrderState(order)\">new</mat-chip>\r\n              </mat-chip-list>\r\n            </p>\r\n          </div>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span>{{order.date | date: 'dd/MM/yy, H:mm'}}</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <hr>\r\n      <p class=\"card-text\"><span class=\"textBold\">Adress:</span> {{order.adress}} <fa-icon [icon]=\"faUserEdit\"\r\n          class=\"ml-2 userEdit\" (click)=\"editUserModal(editUser, order)\"></fa-icon>\r\n      </p>\r\n      <hr>\r\n      <div class=\"orderDescription\" *ngFor=\"let product of order.product; let i=index\">\r\n        <div class=\"orderDescription-flex\">\r\n          <ul>\r\n            <li><span class=\"textBold\">Category:</span> {{product.category}}</li>\r\n            <li><span class=\"textBold\">Name:</span> {{product.name}}</li>\r\n            <li><span class=\"textBold\">Count:</span> {{product.count}}</li>\r\n            <li><span class=\"textBold\">Price:</span> {{product.price * product.count}}грн </li>\r\n          </ul>\r\n          <div class=\"orderButtons\">\r\n            <fa-icon [icon]=\"faTimes\" class=\"fa-2x deleteProduct\"\r\n              (click)=\"cancelOrderModal(deleteProductModal,order,product)\">\r\n            </fa-icon>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n      </div>\r\n      <h4 class=\"orderSum\">Together: {{orderSum(order.product)}} грн</h4>\r\n      <button mat-raised-button (click)=\"addProductModal(productModal, order)\" class=\"btn btn-success  mr-2\">Add\r\n        product</button>\r\n      <button mat-raised-button (click)=\"cancelOrderModal(deleteOrderModal, order)\" class=\"btn btn-danger\">Cancel order\r\n      </button>\r\n      <button mat-raised-button (click)=\"deliveredOrder(order)\" class=\"btn btn-primary ml-2\">Order delivered\r\n      </button>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n\r\n  <!-- Delete Product Modal -->\r\n  <ng-template #deleteProductModal>\r\n    <div class=\"modal-body text-center\">\r\n      <p class=\"mb-2\">Do you want to delete product?</p>\r\n      <button mat-raised-button color=\"warn\" class=\"mr-2\" (click)=\"confirmDeleteProduct()\">Yes</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"decline()\">No</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Delete order Modal -->\r\n  <br><br>\r\n  <ng-template #deleteOrderModal>\r\n    <div class=\"modal-body text-center\">\r\n      <p class=\"mb-2\">Do you want to delete order?</p>\r\n      <button mat-raised-button color=\"warn\" class=\"mr-2\" (click)=\"confirmDeleteOrder()\">Yes</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"decline()\">No</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Edit user Modal -->\r\n  <ng-template #editUser>\r\n    <div class=\"modal-header \">\r\n      <h4 class=\"modal-title pull-left\">Edit user</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form>\r\n        <div class=\"form-group editUserModalCss\">\r\n          <label for=\"name\">Name</label>\r\n          <input [(ngModel)]=\"regForm.name\" name=\"name\" #userName=\"ngModel\" type=\"text\" class=\"form-control\" id=\"name\"\r\n            required pattern=\"[a-zA-Z\\s]{2,}\">\r\n        </div>\r\n        <div class=\"form-group editUserModalCss\">\r\n          <label for=\"adress\">Adress</label>\r\n          <input [(ngModel)]=\"regForm.adress\" name=\"adress\" #userAdress=\"ngModel\" type=\"text\" class=\"form-control\"\r\n            id=\"adress\" required pattern=\"[a-zA-Z0-9,\\.\\s\\\\/]{6,}\">\r\n        </div>\r\n        <button [disabled]=\"userName.invalid || userAdress.invalid\" type=\"button\" class=\"btn btn-success mr-2\"\r\n          (click)=\"updateUserData()\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"decline()\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Add product Modal -->\r\n  <ng-template #productModal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Add product</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Category</label>\r\n          <select (change)=\"filterCategory()\" class=\"form-control\" id=\"productCategory\" [(ngModel)]=\"productCategory\"\r\n            name=\"productCategory\">\r\n            <option value=\"\" selected disabled hidden>Choose here</option>\r\n            <option *ngFor=\"let category of categories; let i = index\">{{category?.name}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"productCategory\">\r\n          <label for=\"name\">Name</label>\r\n          <select class=\"form-control\" id=\"productName\" [(ngModel)]=\"productName\" name=\"productName\">\r\n            <option value=\"\" selected disabled hidden>Choose here</option>\r\n            <option *ngFor=\"let newProduct of filterProducts; let i = index\">{{newProduct?.name}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"productName\">\r\n          <label for=\"name\">Count</label>\r\n          <input type=\"number\" [(ngModel)]=\"productCount\" name=\"productCount\" min=\"0\" class=\"countInput\" maxlength=\"3\">\r\n        </div>\r\n        <button *ngIf=\"productCount && productCount>0\" type=\"button\" class=\"btn btn-success mr-2\"\r\n          (click)=\"addProduct()\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"decline()\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n<div class=\"warningMessage\">\r\n  <h3>Doesn't work on this extension</h3>\r\n</div>\r\n\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-products/admin-products.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-products/admin-products.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n  <div class=\"addButton row justify-content-center\">\r\n    <button type=\"button\" class=\"btn btn-primary col-12 col-sm-6 col-lg-4 col-xl-2\"\r\n      (click)=\"openProductModal(productModal)\">Add\r\n      product</button>\r\n  </div>\r\n  <div class=\"anotherButtons row justify-content-center\">\r\n    <button type=\"button\" class=\"col-12 col-sm-6 col-lg-3 col-xl-2\" [ngClass]=\"{active: isActive(category.name)}\"\r\n      (click)=\"selectCategory(category.name)\" *ngFor=\"let category of categories; let i=index\"\r\n      [routerLink]=\"['/admin/products', category.name]\">{{category.name}}</button>\r\n  </div>\r\n\r\n  <ng-template #productModal>\r\n    <div class=\"modal-body text-center\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"productCategory\">Category</label>\r\n          <select class=\"form-control\" (change)=\"filterCategory()\" id=\"productCategory\" [disabled]=\"editDisabled\"\r\n            [(ngModel)]=\"productCategory\" name=\"productCategory\">\r\n            <option value=\"\" selected disabled hidden>Choose here</option>\r\n            <option *ngFor=\"let category of categories; let i = index\">{{category?.name}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"productCategory\">\r\n          <label for=\"productName\">Name</label>\r\n          <input [(ngModel)]=\"productName\" [disabled]=\"editDisabled\" name=\"productName\" type=\"text\" class=\"form-control\"\r\n            id=\"productName\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"productName\">\r\n          <label for=\"productDescription\">Description</label>\r\n          <input [(ngModel)]=\"productDescription\" name=\"productDescription\" type=\"text\" class=\"form-control\"\r\n            id=\"productDescription\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"productDescription\">\r\n          <label for=\"productPrice\">Price</label>\r\n          <input [(ngModel)]=\"productPrice\" name=\"productPrice\" type=\"number\" class=\"form-control\" id=\"productPrice\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"productCategory == 'pizza'\">\r\n          <label for=\"productSize\">Size (without 'inc')</label>\r\n          <input [(ngModel)]=\"productSize\" name=\"productSize\" type=\"number\" class=\"form-control\" id=\"productSize\"\r\n            placeholder=\"not necessary\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"productCategory == 'pizza'\">\r\n          <label for=\"productWeight\">Weight (without 'gr')</label>\r\n          <input [(ngModel)]=\"productWeight\" name=\"productWeight\" type=\"number\" class=\"form-control\" id=\"productWeight\"\r\n            placeholder=\"not necessary\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"productPrice>0 && productDescription && productName\">\r\n          <label for=\"productFile\">Image</label>\r\n          <div class=\"custom-file\">\r\n            <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\" accept=\".png,.jpg\" id=\"productFile\" />\r\n            <label class=\"custom-file-label\" for=\"productFile\">Choose file..</label>\r\n            <br>\r\n            <div class=\"progress\">\r\n              <div *ngIf=\"progress\" class=\"progress-bar progress-bar-striped bg-warning\" role=\"progressbar\"\r\n                [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\"\r\n                aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"addProductCheck && !editProductImgBoolean\">\r\n              <div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\r\n                File uploaded: <a [href]=\"downloadSrc\" target=\"_blank\">{{downloadSrc}}</a>\r\n                <div> <img src=\"{{productImage}}\" alt=\"product image\"></div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"editProductImgBoolean\" class=\"alert alert-info\" role=\"alert\">\r\n              <a [href]=\"editSrc\" target=\"_blank\">{{editSrc}}</a>\r\n              <div> <img src=\"{{productImage}}\" alt=\"product image\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"buttons\">\r\n          <div class=\"setButtons\">\r\n            <button *ngIf=\"addProductCheck && productDescription && productName && productPrice>0\" type=\"button\"\r\n              class=\"btn btn-success mr-2\" (click)=\"setData()\">Add</button>\r\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"cancelData()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <br>\r\n  <div class=\"form-group\">\r\n    <input [(ngModel)]=\"searchProduct\" name=\"searchProduct\" type=\"text\" class=\"form-control\" placeholder=\"Search..\"\r\n      id=\"searchProduct\">\r\n  </div>\r\n\r\n  <table class=\"table table-hover table-bordered table-responsive\">\r\n    <thead class=\"thead-light\">\r\n      <tr class=\"text-center\">\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Category</th>\r\n        <th scope=\"col\" class=\"col-md-4\">Description</th>\r\n        <th scope=\"col\">Price</th>\r\n        <th scope=\"col\" class=\"col-md-4\">Image</th>\r\n        <th scope=\"col\">Edit</th>\r\n        <th scope=\"col\">Delete</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of products | filter:searchProduct | category:searchCategory ; let i=index\"\r\n        class=\"text-center\">\r\n        <th scope=\"row\" class=\"align-middle\">{{i+1}}</th>\r\n        <td class=\"align-middle\">{{product.name}}</td>\r\n        <td class=\"align-middle\">{{product.category}}</td>\r\n        <td class=\"align-middle\">{{product.description}}</td>\r\n        <td class=\"align-middle\">{{product.price}}</td>\r\n        <td> <img src=\"{{product?.image}}\" alt=\"Product image\"></td>\r\n        <td class=\"align-middle\">\r\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"editData(product, productModal)\">Edit</button>\r\n        </td>\r\n        <td class=\"align-middle\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteData(product, warningModal)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <simple-notifications [options]=\"options\" class=\"notifications\"></simple-notifications>\r\n\r\n</div>\r\n<ng-template #warningModal>\r\n  <div class=\"modal-body text-center\">\r\n    <p class=\"mb-2\">Do you want to delete this product?</p>\r\n    <button mat-raised-button class=\"btn btn-danger mr-2\" (click)=\"confirmDeleteProduct()\">Yes</button>\r\n    <button mat-raised-button class=\"btn btn-primary\" (click)=\"decline()\">No</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"admin\">\r\n  <div class=\"container-fluid mt-2\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-xs-12 col-sm-5 col-lg-3 adminLinkBlock\">\r\n        <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n          <a class=\"nav-link  adminLink\" routerLink=\"categories\" routerLinkActive=\"activeAdminLink\">Categories</a>\r\n          <a class=\"nav-link adminLink\" [routerLink]=\"['products/pizza']\"\r\n            routerLinkActive=\"activeAdminLink\">Products</a>\r\n          <a class=\"nav-link adminLink\" routerLink=\"orders\" routerLinkActive=\"activeAdminLink\">Orders</a>\r\n          <a class=\"nav-link adminLink\" routerLink=\"guests\" routerLinkActive=\"activeAdminLink\">Guests</a>\r\n          <a class=\"nav-link adminLink\" routerLink=\"feedback\" routerLinkActive=\"activeAdminLink\">Feedback</a>\r\n          <a class=\"nav-link adminLink\" routerLink=\"blacklist\" routerLinkActive=\"activeAdminLink\">Blacklist</a>\r\n          <a class=\"nav-link adminLink\" routerLink=\"archive\" routerLinkActive=\"activeAdminLink\">Archive</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-lg-9\">\r\n        <div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-header></app-header>\r\n  <main>\r\n    <div ngxUiLoaderBlurred blur='10'>\r\n      <router-outlet (activate)='onActivate($event)'></router-outlet>\r\n    </div>\r\n    <ngx-ui-loader id=\"loading-bar-spinner\"></ngx-ui-loader>\r\n  </main>\r\n  <app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"footer-fl\">\r\n      <div class=\"footer-social\">\r\n        <div class=\"social-fl\">\r\n          <div class=\"social-twitter\">\r\n            <a href=\"https://twitter.com/?lang=uk\" target=\"_blank\">\r\n              <i class=\"fab fa-twitter-square fa-3x\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"social-facebook\">\r\n            <a href=\"https://www.facebook.com/\" target=\"_blank\">\r\n              <i class=\"fab fa-facebook-square fa-3x\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"social-instagram\">\r\n            <a href=\"https://www.instagram.com/?hl=uk\" target=\"_blank\">\r\n              <i class=\"fab fa-instagram fa-3x\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"footer-menu\">\r\n        <ul>\r\n          <li><a [routerLink]=\"['/home']\">Home</a> </li>\r\n          <li><a [routerLink]=\"['/menu/pizza']\">Menu</a></li>\r\n          <li><a [routerLink]=\"['/feedback']\">Blogs</a></li>\r\n          <li><a [routerLink]=\"['/about']\">About</a></li>\r\n          <li><a [routerLink]=\"['/contacts']\">Contacts</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"footer-contact\">\r\n\r\n        <div class=\"contacts-info contacts-info-fl\">\r\n          <div class=\"contacts-info-number\">\r\n            <div class=\"number-icon icon\">\r\n              <fa-icon [icon]=\"faPhoneAlt\"></fa-icon>\r\n            </div>\r\n            <div class=\"number-text\">\r\n              <p>+380682292861</p>\r\n              <span>A small river named Duden flows</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"contacts-info-location\">\r\n            <div class=\"location-icon icon\">\r\n              <fa-icon [icon]=\"faMapMarkerAlt\"></fa-icon>\r\n            </div>\r\n            <div class=\"location-text\">\r\n              <p> 198 West 21th Street</p>\r\n              <span> New York, USA</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"contacts-info-time\">\r\n            <div class=\"time-icon icon\">\r\n              <fa-icon [icon]=\"faClock\"></fa-icon>\r\n            </div>\r\n            <div class=\"time-text\">\r\n              <p>Open Monday-Friday</p>\r\n              <span>8:00am - 9:00pm</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"copy\">\r\n    <p>Copyright ©2019 All rights reserved</p>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"logo\">\r\n      <div class=\"logo-main\" [routerLink]=\"['/home']\">\r\n        <div class=\"logo-main-fl\">\r\n          <h5>\r\n            <fa-icon [icon]=\"faPizzaSlice\"></fa-icon><span>Pizza</span>\r\n          </h5>\r\n          <div>\r\n            <p>delicious</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <input type=\"checkbox\" id=\"chk\" [checked]=\"menuCheck\" (click)=\"menuCheck = !menuCheck\">\r\n\r\n    <label for=\"chk\" class=\"show-menu-btn ml-3\">\r\n      <fa-icon [icon]=\"faBars\"></fa-icon>\r\n    </label>\r\n    <label class=\"show-menu-btn\">\r\n      <mat-icon [matBadge]=\"orderCount\" matBadgeColor=\"warn\" [matBadgeHidden]=\"orderCount===0\">\r\n        <fa-icon [icon]=\"faShoppingBasket\" [routerLink]=\"['/basket']\"></fa-icon>\r\n      </mat-icon>\r\n\r\n    </label>\r\n    <ul class=\"menu\" (click)=\"menuCheck = !menuCheck\">\r\n      <a [routerLink]=\"['/home']\">Home</a>\r\n      <a [routerLink]=\"['/menu/pizza']\">Menu</a>\r\n      <a [routerLink]=\"['/feedback']\">Feedback</a>\r\n      <a [routerLink]=\"['/contacts']\">Contacts</a>\r\n      <a [routerLink]=\"['/admin']\">Admin</a>\r\n      <a>\r\n        <mat-icon [matBadge]=\"orderCount\" matBadgeColor=\"warn\" [matBadgeHidden]=\"orderCount===0\">\r\n          <fa-icon [icon]=\" faShoppingBasket\" [routerLink]=\"['/basket']\">\r\n          </fa-icon>\r\n        </mat-icon>\r\n      </a>\r\n      <label for=\"chk\" class=\"hide-menu-btn\">\r\n        <fa-icon [icon]=\"faTimes\"></fa-icon>\r\n      </label>\r\n    </ul>\r\n  </div>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/paginator/paginator.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/paginator/paginator.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"paginator\">\r\n  <pagination-controls class=\"my-pagination\" (pageChange)='changePage($event)' previousLabel=\"\" nextLabel=\"\"\r\n    [maxSize]=\"5\"  >\r\n  </pagination-controls>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basket/basket.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basket/basket.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"basket\">\r\n  <div class=\"basket-content container\">\r\n    <h2 *ngIf=\"!orderCheck\">To order</h2>\r\n    <div class=\"basket-order\" *ngFor=\"let product of localProducts; let i=index\">\r\n      <div class=\"basket-leftInfo\">\r\n        <fa-icon [icon]=\"faTimes\" class=\"fa-2x deletePoduct\" (click)=\"deletePoduct(product)\"></fa-icon>\r\n        <img src=\"{{product.image}}\" alt=\"productImage\">\r\n        <p>{{product.name}}</p>\r\n      </div>\r\n      <div class=\"basket-rightInfo\">\r\n        <span class=\"order\">₴<span class=\"price\">{{product.price * product.count}}</span></span>\r\n        <span class=\"countProduct\">\r\n          <button type=\"button\" (click)=\"countProductsInc(product)\">+</button>\r\n          <input type=\"text\" [value]='product.count' maxlength=\"3\" (keyup)='checkCountProduct($event, product)'>\r\n          <button type=\"button\" (click)=\"countProductsDec(product)\">-</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"together\">\r\n      <div *ngIf=\"orderCheck\">\r\n        <h2>No orders yet</h2>\r\n        <button mat-raised-button class=\"btn btn-primary\" [routerLink]=\"['/menu/pizza']\">Order now</button>\r\n      </div>\r\n      <h2 *ngIf=\"!orderCheck\">Together: ₴{{orderSum}}</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"orderStepper\" *ngIf=\"!orderCheck\">\r\n    <div class=\"container\">\r\n      <mat-vertical-stepper linear #stepper>\r\n        <mat-step [stepControl]=\"firstFormGroup\" state=\"assignment_ind\r\n            \">\r\n          <form [formGroup]=\"firstFormGroup\">\r\n            <ng-template matStepLabel>Fill out your name</ng-template>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"First name\" formControlName=\"firstCtrl\" required pattern=\"[a-zA-Z\\s]{2,}\">\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-button matStepperNext class=\"btn btn-primary\">Next</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"secondFormGroup\" state=\"home\">\r\n          <form [formGroup]=\"secondFormGroup\">\r\n            <ng-template matStepLabel>Fill out your address</ng-template>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required\r\n                pattern=\"[a-zA-Z0-9,\\.\\s\\\\/]{6,}\">\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-button matStepperNext class=\"btn btn-primary\">Next</button>\r\n              <button mat-button matStepperPrevious class=\"btn btn-dark\">Back</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"thirdFormGroup\" state=\"phone\">\r\n          <form [formGroup]=\"thirdFormGroup\">\r\n            <ng-template matStepLabel>Fill out your phone</ng-template>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Phone\" pattern=\"\\+38\\(0\\d{2}\\)\\s\\d{3}-\\d{4}\" formControlName=\"thirdCtrl\"\r\n                [textMask]=\"{mask: mask}\" required>\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-button matStepperNext class=\"btn btn-primary\">Next</button>\r\n              <button mat-button matStepperPrevious class=\"btn btn-dark\">Back</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step state=\"stars\">\r\n          <ng-template matStepLabel>Order</ng-template>\r\n          <div class=\"mt-2\">\r\n            <button mat-button class=\"btn btn-success\" (click)=\"setOrder()\">Order</button>\r\n            <button mat-button matStepperPrevious class=\"btn btn-dark\">Back</button>\r\n          </div>\r\n        </mat-step>\r\n      </mat-vertical-stepper>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contacts\">\r\n  <app-home-contacts></app-home-contacts>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"userBlog\">\r\n  <main class=\"main\">\r\n\r\n    <form class=\"formContainer\" [formGroup]='form'>\r\n      <div [@flip]=flipState class=\"{{title}}\">\r\n        <h1>{{title}}</h1>\r\n        <div *ngIf=\"signUpOrLogInCheck\">\r\n          <input type=\"email\" placeholder=\"Email\" formControlName=\"email\" (input)='existingEmail = false'>\r\n          <div class=\"validation\">\r\n            <div>\r\n              <small *ngIf='form.get(\"email\").invalid && form.get(\"email\").touched'>Invalid email </small>\r\n              <small *ngIf='existingEmail' class=\"existedSmall\">This email is already\r\n                existed</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <input type=\"text\" placeholder=\"Username\" formControlName=\"username\" [@shake]=\"userNameState\"\r\n          (input)='existingName = false'>\r\n        <div class=\"validation\">\r\n          <div *ngIf='form.get(\"username\").invalid && form.get(\"username\").touched && title === \"Sign Up\"'>\r\n            <small *ngIf='form.get(\"username\").errors.required'>Invalid username </small>\r\n            <small *ngIf='form.get(\"username\").errors.minlength'>Min\r\n              symbols {{form.get(\"username\").errors.minlength.requiredLength}}</small>\r\n          </div>\r\n          <small *ngIf='existingName' class=\"existedSmall\">This name is already existed</small>\r\n        </div>\r\n        <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" [@shake]=\"userPasswordState\">\r\n        <div class=\"validation\">\r\n          <div *ngIf='form.get(\"password\").invalid && form.get(\"password\").touched && title === \"Sign Up\"'>\r\n            <small *ngIf='form.get(\"password\").errors.minlength'>Min\r\n              symbols {{form.get(\"password\").errors.minlength.requiredLength}}\r\n            </small>\r\n            <small *ngIf='form.get(\"password\").errors.required'>Invalid password</small>\r\n          </div>\r\n          <small *ngIf='wrongData && title === \"Log In\"' class=\"wrongData\">Invalid\r\n            password or username\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"signUp\" *ngIf=\"signUpOrLogInCheck\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"signUp()\" [disabled]='form.invalid'>Sign Up</button>\r\n          <p>Have an account?<a role=\"button\" tabindex=\"0\" (click)=\"checkLog()\"> Log in</a></p>\r\n        </div>\r\n        <div class=\"logIn\" *ngIf=\"!signUpOrLogInCheck\">\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"logIn(warningModal)\">Log in</button>\r\n          <p>Don't have an account?<a role=\"button\" tabindex=\"0\" (click)=\"checkLog()\"> Sign Up</a></p>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </main>\r\n  <footer>\r\n    <div class=\"waveEffect\">\r\n      <div class=\"wave\"></div>\r\n    </div>\r\n  </footer>\r\n</div>\r\n\r\n<ng-template #warningModal >\r\n  <div class=\"modal-body text-center \">\r\n    <h6>You have been blocked. You can't send messages, but you can read messages from other users.\r\n    </h6>\r\n    <p class=\"mb-2\" *ngIf=\"reasonForBlock\">\r\n      Reason for blocking: {{reasonForBlock}}\r\n    </p>\r\n    <button mat-raised-button color=\"primary\" class=\"mt-2\" (click)=\"closeWindow()\">Ok</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback-home/feedback-home.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback-home/feedback-home.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homeBlog\">\r\n  <header>\r\n    <div class=\"container header-nav\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <h5>{{userName}}</h5>\r\n        <fa-icon *ngIf=\"!possibilityToCreate\"\r\n          matTooltip=\"You have been blocked. You can't send messages, but you can read messages from other users. Reason: {{reasonForBlock}}\"\r\n          matTooltipClass=\"example-tooltip-red\" class=\"example-button\" [icon]=\"faExclamationCircle\"\r\n          class=\"fa-2x ml-3 text-danger\">\r\n        </fa-icon>\r\n      </div>\r\n\r\n      <div>\r\n        <fa-icon *ngIf=\"possibilityToCreate\" matRipple [icon]=\"faPlus\" class=\"fa-2x\" (click)=\"openModal(PostModal)\">\r\n        </fa-icon>\r\n        <fa-icon [icon]=\"faSignOutAlt\" matRipple class=\"fa-2x ml-3\" (click)=\"logOut()\"></fa-icon>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div class=\"container content\">\r\n    <div class=\"userPost\" *ngFor=\"let post of posts.sort(sortArray); trackBy: trackByPackId; let i=index\"\r\n      data-aos=\"zoom-in-down\" data-aos-duration=\"500\">\r\n      <div class=\"dateAndUser mt-2 mb-2\">\r\n        <p class=\"mb-1\">\r\n          <fa-icon [icon]=\"faPen\" class=\"mr-1\"></fa-icon> {{post.writtenBy.username}}\r\n        </p>\r\n        <p>\r\n          <fa-icon [icon]=\"faClock\" class=\"mr-1\"></fa-icon>\r\n          {{ post.date | date: 'dd/MM/yy, H:mm'}}\r\n        </p>\r\n      </div>\r\n      <p class=\"mb-3 mt-3 userPostText\">{{post.text}}\r\n      </p>\r\n      <div *ngIf=\"userName === post.writtenBy.username\">\r\n        <button type=\"button\" class=\"btn btn-warning mr-2\" (click)=\"editPost(PostModal, post)\">Edit</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePost(deletePostModal, post)\">Delete</button>\r\n      </div>\r\n      <div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Add Post Modal -->\r\n<ng-template #PostModal>\r\n  <div class=\"modal-body text-center\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"userPostText\">Text</label>\r\n        <textarea rows=\"5\" [(ngModel)]=\"userPostText\" name=\"userPostText\" class=\"form-control\"\r\n          id=\"userPostText\"></textarea>\r\n      </div>\r\n    </form>\r\n    <div class=\"buttons\">\r\n      <button mat-raised-button color=\"primary\" class=\"mr-2\" [disabled]=\"!userPostText\"\r\n        (click)=\"addPost()\">{{postButtonName}}</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"decline()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #deletePostModal>\r\n  <div class=\"modal-body text-center\">\r\n    <p class=\"mb-2\">Do you want to delete post?</p>\r\n    <button mat-raised-button color=\"warn\" class=\"mr-2\" (click)=\"confirmDeletePost()\">Yes</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"decline()\">No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #warningModal>\r\n  <div class=\"modal-body text-center\">\r\n    <p class=\"mb-2\">Do you want to delete post?</p>\r\n    <button mat-raised-button color=\"warn\" class=\"mr-2\" (click)=\"confirmDeletePost()\">Yes</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"decline()\">No</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-contacts/home-contacts.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-contacts/home-contacts.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contactsAndAbout\">\r\n  <div class=\"about\">\r\n    <div class=\"about-image\" data-aos=\"fade-right\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"1000\">\r\n      <img src=\"assets/images/cafe.jpg\" alt=\"\">\r\n    </div>\r\n    <div class=\"about-text\">\r\n      <div class=\"text-container\" data-aos=\"fade-down\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"1000\">\r\n        <h4>welcome to <span>\r\n            <fa-icon [icon]=\"faPizzaSlice\"></fa-icon> Pizza\r\n          </span> restauraunt</h4>\r\n        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been\r\n          rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little\r\n          Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince\r\n          her\r\n          and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and\r\n          Parole\r\n          and dragged her into their agency, where they abused her for their.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"contacts\">\r\n    <div class=\"contact-info\">\r\n      <div class=\"card mailCard\" data-aos=\"fade-up\" data-aos-anchor-placement=\"center-bottom\" data-aos-duration=\"500\">\r\n        <i class=\"card-icon far fa-envelope\"></i>\r\n        <p><a href=\"mailto:yurakohut97@gmail.com\" target=\"_blank\">yurakohut97@gmail.com</a></p>\r\n      </div>\r\n\r\n      <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"center-bottom\" data-aos-duration=\"800\">\r\n        <i class=\"card-icon fas fa-phone\"></i>\r\n        <p><a href=\"tel:+380682292861\" target=\"_blank\">+380682292861</a> </p>\r\n      </div>\r\n\r\n      <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"center-bottom\" data-aos-duration=\"1100\">\r\n        <i class=\"card-icon fas fa-map-marker-alt\"></i>\r\n        <p><a\r\n            href=\"https://www.google.pt/maps/dir/New+York/38.697511,-9.334687/@41.1730375,-92.6184355,2416572m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x4ccc4bf0f123a5a9:0xddcfc6c1de189567!2m2!1d-74.2179326!2d43.2994285!1m1!4e1?hl=en\"\r\n            target=\"_blank\">198\r\n            West 21th Street, New York, USA</a> </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-feedback/home-feedback.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-feedback/home-feedback.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"feedback\">\r\n    <div class=\"feedback-fl\">\r\n      <div class=\"feedback-image\" data-aos=\"fade-up\" data-aos-anchor-placement=\"bottom-bottom\" data-aos-duration=\"500\">\r\n        <img src=\"assets/images/feedback-bg.jpg\" alt=\"\">\r\n      </div>\r\n      <div class=\"social\" data-aos=\"fade-down\" data-aos-easing=\"linear\" data-aos-duration=\"500\">\r\n        <h3>Contact Us</h3>\r\n        <div class=\"share-button\">\r\n          <span><i class=\"fas fa-share-alt\"></i> Share!</span>\r\n          <a href=\"https://www.facebook.com/\" target=\"blank\"><i class=\"fab fa-facebook-f\"></i></a>\r\n          <a href=\"https://twitter.com/?lang=uk\" target=\"blank\"><i class=\"fab fa-twitter\"></i></a>\r\n          <a href=\"https://www.instagram.com/?hl=uk\" target=\"blank\"><i class=\"fab fa-instagram\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-guests/home-guests.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-guests/home-guests.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"sliderContainer\">\r\n    <div class=\"container\">\r\n      <div class=\"guestText\">\r\n        <h1>Our {{mainTypeHTML}}</h1>\r\n      </div>\r\n      <div class=\"swiper-container\">\r\n        <div class=\"swiper-wrapper\">\r\n          <div class=\"swiper-slide\" *ngFor=\"let guest of guests.reverse(); let i=index\">\r\n            <div class=\"sliderCard\">\r\n              <div class=\"sliderPhoto\">\r\n                <img src=\"{{guest.photo}}\" alt=\"guest photo\">\r\n              </div>\r\n              <div class=\"content\">\r\n                <h5>{{guest.name}}</h5>\r\n                <p *ngIf=\"guest.quote\">\"{{guest?.quote}}\"</p>\r\n                <a *ngIf=\"guest.details\" href=\"{{guest?.details}}\" target=\"_blank\">Read more</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-main/home-main.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-main/home-main.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"intro\">\r\n  <video class=\"video__media\" src=\"assets/video/Sparks.mp4\" autoplay muted loop></video>\r\n  <div class=\"main-text\">\r\n    <p>Welcome</p>\r\n    <h1>We cooked your desired pizza recipe</h1>\r\n    <button type=\"button\" [routerLink]=\"['/menu/pizza']\">Order now</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-services/home-services.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-services/home-services.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"services\">\r\n    <div class=\"container\">\r\n      <div class=\"card\">\r\n        <div class=\"imgBx\" data-text=\"Health\">\r\n          <img src=\"assets/images/health.png\" alt=\"health\">\r\n        </div>\r\n        <div class=\"content\">\r\n          <div>\r\n            <h3>Healthy foods</h3>\r\n            <p>Our ingredients are grown by your grandmother in the garden</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"imgBx\" data-text=\"Speed\">\r\n          <img src=\"assets/images/delivery-bike.png\" alt=\"speed\">\r\n        </div>\r\n        <div class=\"content\">\r\n          <div>\r\n            <h3>Fastest delivery</h3>\r\n            <p>Our delivery is as fast as an ambulance in Europe</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"imgBx\" data-text=\"Recipes\">\r\n          <img src=\"assets/images/recipes.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"content\">\r\n          <div>\r\n            <h3>Recipes</h3>\r\n            <p>We cook according to your mom's recipes</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"imgBx\" data-text=\"Price\">\r\n          <img src=\"assets/images/money.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"content\">\r\n          <div>\r\n            <h3>Price</h3>\r\n            <p>We have such low prices that even a Ukrainian student can afford it</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-home-main></app-home-main>\r\n<app-home-contacts></app-home-contacts>\r\n<app-home-services></app-home-services>\r\n<app-home-guests></app-home-guests>\r\n<app-home-feedback></app-home-feedback>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"menu \">\r\n    <div class=\"menu-text container\">\r\n      <div class=\"categories row justify-content-around\">\r\n        <button matRipple type=\"button\" class=\"col-8 col-sm-6 col-lg-4 col-xl-2\"\r\n          [ngClass]=\"{active: isActive(category.name)}\" (click)=\"selectCategory(category.name)\"\r\n          *ngFor=\"let category of categories; let i=index\" [routerLink]=\"['/menu', category.name]\">\r\n          {{category.name}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"products container\">\r\n    <div class=\"card\" style=\"width: 320px;\"\r\n      *ngFor=\"let product of filterProducts | paginate: {itemsPerPage:productPerPage,currentPage:page}; let i=index\">\r\n      <img src=\"{{product.image}}\" class=\"card-img-top\" alt=\"product\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{product.name}}</h5>\r\n        <p class=\"card-text description\">{{product.description}}</p>\r\n        <div class=\"order\">\r\n          <span class=\"card-text\">₴<span class=\"price\">{{product.price * product.count}}</span></span>\r\n          <div><button mat-raised-button matRipple class=\"my-ripple-container\" class=\"btn btn-primary mr-2\"\r\n              [routerLink]=\"['/menu', product.category, product.name]\"\r\n              *ngIf=\"product.category === 'pizza' && product.size || product.weight\">More</button>\r\n            <button mat-raised-button class=\"btn btn-dark\" (click)=\"orderInLocalST(product, orderModal)\"\r\n              matRipple>Order</button>\r\n          </div>\r\n        </div>\r\n        <span class=\"countProduct\">\r\n          <button type=\"button\" (click)=\"countProductsInc(product)\">+</button>\r\n          <input type=\"text\" [value]='product.count' maxlength=\"3\" (keyup)='checkCountProduct($event, product)'>\r\n          <button type=\"button\" (click)=\"countProductsDec(product)\">-</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-paginator (click)=\"scrollUp()\" *ngIf=\"checkPaginator\">\r\n\r\n  </app-paginator>\r\n  <simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n  <ng-template #orderModal>\r\n    <div class=\"modal-body text-center\">\r\n      <p class=\"mb-2\">\r\n        Product successfully ordered. Do you want to go to the basket?\r\n      </p>\r\n      <button mat-raised-button color=\"warn\" class=\"mr-2\" [routerLink]=\"['/basket']\"\r\n        (click)=\"closeWindow()\">Yes</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"closeWindow()\">No</button>\r\n      <div class=\"mt-2\">\r\n        <mat-checkbox [(ngModel)]=\"isActiveCheckBox\">Don't show this message anymore</mat-checkbox>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-details/product-details.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-details/product-details.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"productDetails\">\r\n  <div class=\"card mb-3\" style=\"width: 90%; max-width: 500px;\" *ngFor=\"let product of oneProduct; let i=index\">\r\n    <img src=\"{{product.image}}\" class=\"card-img\" alt=\"{{product.name}}\">\r\n    <div class=\"card-body\">\r\n      <ul>\r\n        <li class=\"card-title\">\r\n          <span class=\"name\">{{product.name}}</span>\r\n          <span class=\"price\">{{product.price | currency: 'UAH':'symbol-narrow':'1.0'}} </span>\r\n        </li>\r\n        <li class=\"card-text\">\r\n          <span class=\"description\">{{product.description}}</span>\r\n        </li>\r\n        <li class=\"card-text\" *ngIf=\"product.size\">\r\n          <img\r\n            src=\"https://firebasestorage.googleapis.com/v0/b/myproject-c5d44.appspot.com/o/Pizza%20backdround%2Fsize.png?alt=media&token=3bdfc083-88cb-45a8-9c67-109e0f50107c\"\r\n            alt=\"size\"><span> {{product.size}} inc</span>\r\n        </li>\r\n        <li class=\"card-text\" *ngIf=\"product.weight\">\r\n          <img\r\n            src=\"https://firebasestorage.googleapis.com/v0/b/myproject-c5d44.appspot.com/o/Pizza%20backdround%2Fscale.png?alt=media&token=4fbefc95-c1ce-46bb-8437-f76bfe8eff93\"\r\n            alt=\"weight\"><span> {{product.weight}} gr</span>\r\n        </li>\r\n        <li><button mat-raised-button color='primary' (click)=\"goBack()\">Back</button></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin-archive/admin-archive.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-archive/admin-archive.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panelTitle {\r\n  width: 60%;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.orderDescription li {\r\n  list-style-type: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYXJjaGl2ZS9hZG1pbi1hcmNoaXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tYXJjaGl2ZS9hZG1pbi1hcmNoaXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWxUaXRsZSB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ub3JkZXJEZXNjcmlwdGlvbiBsaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin-archive/admin-archive.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-archive/admin-archive.component.ts ***!
  \****************************************************************/
/*! exports provided: getAccordionConfig, AdminArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccordionConfig", function() { return getAccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminArchiveComponent", function() { return AdminArchiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var src_app_shared_services_archive_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/archive.service */ "./src/app/shared/services/archive.service.ts");




function getAccordionConfig() {
    return Object.assign(new ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionConfig"](), { closeOthers: true });
}
let AdminArchiveComponent = class AdminArchiveComponent {
    constructor(archiveService) {
        this.archiveService = archiveService;
        this.archiveOrders = [];
    }
    ngOnInit() {
        this.archiveService.getData().subscribe(actionArray => {
            this.archiveOrders = actionArray.map(order => {
                return Object.assign({ id: order.payload.doc.id }, order.payload.doc.data());
            });
        });
    }
    // Сортування замовлень - нові відображаються зверху
    sortArray(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    ;
    //Загальна сума замовлення клієнта
    orderSum(product) {
        return product.reduce((accumulator, value) => accumulator + value.price * value.count, 0);
    }
    ;
    //Очищення всього архіву
    deleteAllArchive() {
        this.archiveService.deleteArray(this.archiveOrders);
    }
    ;
};
AdminArchiveComponent.ctorParameters = () => [
    { type: src_app_shared_services_archive_service__WEBPACK_IMPORTED_MODULE_3__["ArchiveService"] }
];
AdminArchiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-archive',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-archive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-archive/admin-archive.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-archive.component.css */ "./src/app/admin/admin-archive/admin-archive.component.css")).default]
    })
], AdminArchiveComponent);



/***/ }),

/***/ "./src/app/admin/admin-blacklist/admin-blacklist.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-blacklist/admin-blacklist.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panelTitle {\r\n  width: 60%;\r\n}\r\n\r\n.cardHeader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.chipList {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 2px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.panelTitle {\r\n  width: 60%;\r\n  position: relative;\r\n  height: 48px;\r\n  line-height: 48px;\r\n}\r\n\r\nmat-panel-description>span {\r\n  line-height: 48px;\r\n}\r\n\r\nlabel {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\nmat-chip {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYmxhY2tsaXN0L2FkbWluLWJsYWNrbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWJsYWNrbGlzdC9hZG1pbi1ibGFja2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbFRpdGxlIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uY2FyZEhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jaGlwTGlzdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMnB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLnBhbmVsVGl0bGUge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxufVxyXG5cclxubWF0LXBhbmVsLWRlc2NyaXB0aW9uPnNwYW4ge1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxubWF0LWNoaXAge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-blacklist/admin-blacklist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-blacklist/admin-blacklist.component.ts ***!
  \********************************************************************/
/*! exports provided: getAccordionConfig, AdminBlacklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccordionConfig", function() { return getAccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBlacklistComponent", function() { return AdminBlacklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_blacklist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/blacklist.service */ "./src/app/shared/services/blacklist.service.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");








function getAccordionConfig() {
    return Object.assign(new ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionConfig"](), { closeOthers: true });
}
let AdminBlacklistComponent = class AdminBlacklistComponent {
    constructor(blacklistService, userService, dialog, modalService, notificationsService) {
        this.blacklistService = blacklistService;
        this.userService = userService;
        this.dialog = dialog;
        this.modalService = modalService;
        this.notificationsService = notificationsService;
        this.blockedUsers = [];
        this.allUsers = [];
        this.options = {
            position: ["right", "top"],
            timeOut: 2000,
            lastOnBottom: true,
            clickToClose: true
        };
        //Після зміни даних блок  не перерендується. Застосований до головного циклу в HTML
        this.trackByPackId = (index, pack) => pack.id;
    }
    ngOnInit() {
        this.blacklistService.getData().subscribe(actionArray => {
            this.blockedUsers = actionArray.map(post => {
                return Object.assign({ id: post.payload.doc.id }, post.payload.doc.data());
            });
        });
        this.userService.getData().subscribe(actionArray => {
            this.allUsers = actionArray.map(user => {
                return Object.assign({ id: user.payload.doc.id }, user.payload.doc.data());
            });
        });
    }
    unblockModalUser(template, user) {
        this.modalRef = this.modalService.show(template);
        this.blackListUser = user;
        this.unblockUser = this.allUsers.find(chsnUser => chsnUser.username === user.username);
    }
    ;
    confirmUnblockUser() {
        this.blacklistService.deleteData(this.blackListUser);
        this.editId = this.unblockUser.id;
        this.unblockUser.blacklist.isBlackList = false;
        delete this.unblockUser.blacklist.reason;
        this.userService.updateData(this.unblockUser, this.editId);
        this.modalRef.hide();
        this.notificationsService.successNotification(`${this.unblockUser.username} successfully unblocked`);
    }
    ;
    closeWindow() {
        this.modalRef.hide();
    }
    ;
};
AdminBlacklistComponent.ctorParameters = () => [
    { type: src_app_shared_services_blacklist_service__WEBPACK_IMPORTED_MODULE_2__["BlacklistService"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
];
AdminBlacklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-blacklist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-blacklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-blacklist/admin-blacklist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-blacklist.component.css */ "./src/app/admin/admin-blacklist/admin-blacklist.component.css")).default]
    })
], AdminBlacklistComponent);



/***/ }),

/***/ "./src/app/admin/admin-categories/admin-categories.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-categories/admin-categories.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label,\r\nth,\r\ntd {\r\n  color: white\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tY2F0ZWdvcmllcy9hZG1pbi1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1jYXRlZ29yaWVzL2FkbWluLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsLFxyXG50aCxcclxudGQge1xyXG4gIGNvbG9yOiB3aGl0ZVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin-categories/admin-categories.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-categories/admin-categories.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCategoriesComponent", function() { return AdminCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_classes_category_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/classes/category.model */ "./src/app/shared/classes/category.model.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");








let AdminCategoriesComponent = class AdminCategoriesComponent {
    constructor(service, productService, firestore, modalService, notificationsService) {
        this.service = service;
        this.productService = productService;
        this.firestore = firestore;
        this.modalService = modalService;
        this.notificationsService = notificationsService;
        this.categories = [];
        this.categoryButtonAddCheck = false;
        this.allProducts = [];
        this.deleteArrayProductsThisCategory = [];
        this.options = {
            position: ["right", "top"],
            timeOut: 2000,
            lastOnBottom: true,
            clickToClose: true
        };
    }
    ngOnInit() {
        this.service.getData().subscribe(actionArray => {
            this.categories = actionArray.map(category => {
                return Object.assign({ id: category.payload.doc.id }, category.payload.doc.data());
            });
        });
        this.productService.getData().subscribe(actionArray => {
            this.allProducts = actionArray.map(product => {
                return Object.assign({ id: product.payload.doc.id }, product.payload.doc.data());
            });
        });
    }
    //Додавання нової категорії. Якщо така вже є - вискакує сповіщення.
    setData() {
        if (this.categories.find(searchCategory => searchCategory.name === this.categoryName)) {
            this.notificationsService.warningNotification(`This category already exists`);
        }
        else {
            const newCategory = new src_app_shared_classes_category_model__WEBPACK_IMPORTED_MODULE_6__["Category"](this.categoryName);
            this.service.setData(newCategory);
            this.categoryName = '';
            this.notificationsService.successNotification(`${this.categoryName} successfully added`);
        }
        this.categoryButtonAddCheck = false;
    }
    ;
    deleteData(category, template) {
        this.deleteCategory = category;
        this.modalRef = this.modalService.show(template);
        this.categoryName = '';
        this.deleteArrayProductsThisCategory = this.allProducts.filter(val => val.category === category.name);
    }
    ;
    //Видалення категорії та усіх товарів, які належать до неї
    confirmDeleteCategory() {
        this.service.deleteData(this.deleteCategory);
        if (this.deleteArrayProductsThisCategory.length > 0) {
            this.service.deleteArrayOfProducts(this.deleteArrayProductsThisCategory);
        }
        this.notificationsService.successNotification(`${this.deleteCategory.name} successfully deleted`);
        this.modalRef.hide();
    }
    ;
    decline() {
        this.modalRef.hide();
    }
    ;
    checkCategoryValue(event) {
        const regExp = /^([a-zA-Z]{1,})([\s]{1})?([a-zA-Z]{1,})?$/;
        const check = regExp.test(event.target.value);
        if (!check) {
            event.target.value = '';
            this.categoryButtonAddCheck = false;
        }
        else {
            this.categoryButtonAddCheck = true;
        }
    }
    ;
};
AdminCategoriesComponent.ctorParameters = () => [
    { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
];
AdminCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-categories/admin-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-categories.component.css */ "./src/app/admin/admin-categories/admin-categories.component.css")).default]
    })
], AdminCategoriesComponent);



/***/ }),

/***/ "./src/app/admin/admin-feedback/admin-feedback.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-feedback/admin-feedback.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panelTitle {\r\n  width: 60%;\r\n}\r\n\r\n.cardHeader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.chipList {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 2px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.panelTitle {\r\n  width: 60%;\r\n  position: relative;\r\n  height: 48px;\r\n  line-height: 48px;\r\n}\r\n\r\nmat-panel-description>span {\r\n  line-height: 48px;\r\n}\r\n\r\nlabel {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\nform p {\r\n  margin-top: 5px;\r\n  text-align: left;\r\n  font-style: italic;\r\n}\r\n\r\nmat-chip {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZmVlZGJhY2svYWRtaW4tZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWZlZWRiYWNrL2FkbWluLWZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWxUaXRsZSB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmNhcmRIZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2hpcExpc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDJweDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5wYW5lbFRpdGxlIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbm1hdC1wYW5lbC1kZXNjcmlwdGlvbj5zcGFuIHtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmZvcm0gcCB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5tYXQtY2hpcCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin-feedback/admin-feedback.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-feedback/admin-feedback.component.ts ***!
  \******************************************************************/
/*! exports provided: getAccordionConfig, AdminFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccordionConfig", function() { return getAccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFeedbackComponent", function() { return AdminFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_classes_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/classes/user.model */ "./src/app/shared/classes/user.model.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_blacklist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/blacklist.service */ "./src/app/shared/services/blacklist.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");










function getAccordionConfig() {
    return Object.assign(new ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionConfig"](), { closeOthers: true });
}
let AdminFeedbackComponent = class AdminFeedbackComponent {
    constructor(postService, dialog, modalService, userService, blackListService, notificationsService) {
        this.postService = postService;
        this.dialog = dialog;
        this.modalService = modalService;
        this.userService = userService;
        this.blackListService = blackListService;
        this.notificationsService = notificationsService;
        this.posts = [];
        this.userReasonBlock = '';
        this.options = {
            position: ["right", "top"],
            timeOut: 2000,
            lastOnBottom: true,
            clickToClose: true
        };
        //Після зміни даних блок не перерендується. Застосований до головного циклу в HTML
        this.trackByPackId = (index, pack) => pack.id;
    }
    ngOnInit() {
        this.postService.getData().subscribe(actionArray => {
            this.posts = actionArray.map(post => {
                return Object.assign({ id: post.payload.doc.id }, post.payload.doc.data());
            });
        });
    }
    // Сортування постів - нові відображаються зверху
    sortArray(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    ;
    blockModalUser(template, user) {
        this.modalRef = this.modalService.show(template);
        this.chosenUser = user;
    }
    ;
    //Змінюю статус юзеру і кидаю в blackListService
    confirmBlockUser() {
        const blockedUser = new src_app_shared_classes_user_model__WEBPACK_IMPORTED_MODULE_6__["User"](this.chosenUser.username, this.chosenUser.email, this.chosenUser.password, { isBlackList: true, reason: this.userReasonBlock });
        const userPosts = this.posts.filter(posts => posts.writtenBy.username === blockedUser.username);
        this.userService.updateData(blockedUser, this.chosenUser.id, userPosts);
        this.blackListService.setData(blockedUser);
        this.closeWindow();
        this.notificationsService.successNotification(`${blockedUser.username} got blacklisted`);
    }
    ;
    closeWindow() {
        this.modalRef.hide();
        this.userReasonBlock = '';
    }
    ;
};
AdminFeedbackComponent.ctorParameters = () => [
    { type: src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_shared_services_blacklist_service__WEBPACK_IMPORTED_MODULE_8__["BlacklistService"] },
    { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
];
AdminFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feedback/admin-feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-feedback.component.css */ "./src/app/admin/admin-feedback/admin-feedback.component.css")).default]
    })
], AdminFeedbackComponent);



/***/ }),

/***/ "./src/app/admin/admin-guests/admin-guests.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-guests/admin-guests.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  min-height: 100vh;\r\n}\r\n\r\ntable img,\r\nform img {\r\n  width: 150px;\r\n  height: 100px;\r\n}\r\n\r\ntable {\r\n  color: white;\r\n}\r\n\r\n.addButton {\r\n  margin-bottom: 40px;\r\n}\r\n\r\nlabel {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n.custom-file label,\r\ninput {\r\n  height: 100%;\r\n}\r\n\r\n.setButtons {\r\n  margin-top: 67px;\r\n}\r\n\r\n.alert-info {\r\n  text-align: left;\r\n}\r\n\r\n.containerText {\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.containerText button {\r\n  height: 34px;\r\n}\r\n\r\n.containerText h3 {\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.anotherType {\r\n  display: inline-block;\r\n  padding-top: 4px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZ3Vlc3RzL2FkbWluLWd1ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWd1ZXN0cy9hZG1pbi1ndWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG50YWJsZSBpbWcsXHJcbmZvcm0gaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkZEJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZSBsYWJlbCxcclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNldEJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDY3cHg7XHJcbn1cclxuXHJcbi5hbGVydC1pbmZvIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY29udGFpbmVyVGV4dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uY29udGFpbmVyVGV4dCBidXR0b24ge1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLmNvbnRhaW5lclRleHQgaDMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYW5vdGhlclR5cGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-guests/admin-guests.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-guests/admin-guests.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminGuestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuestsComponent", function() { return AdminGuestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_guest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/guest.service */ "./src/app/shared/services/guest.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var src_app_shared_classes_guest_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/classes/guest.model */ "./src/app/shared/classes/guest.model.ts");
/* harmony import */ var src_app_shared_classes_type_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/classes/type.model */ "./src/app/shared/classes/type.model.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");










let AdminGuestsComponent = class AdminGuestsComponent {
    constructor(service, firestore, prStorage, modalService, notificationsService) {
        this.service = service;
        this.firestore = firestore;
        this.prStorage = prStorage;
        this.modalService = modalService;
        this.notificationsService = notificationsService;
        this.guests = [];
        this.guestInfo = '';
        this.guestQuote = '';
        this.progress = false;
        this.options = {
            position: ["right", "top"],
            timeOut: 2000,
            lastOnBottom: true,
            clickToClose: true
        };
    }
    ngOnInit() {
        this.service.getData().subscribe(actionArray => {
            this.guests = actionArray.map(guests => {
                return Object.assign({ id: guests.payload.doc.id }, guests.payload.doc.data());
            });
        });
        this.service.getType().subscribe(actionArray => {
            this.mainType = actionArray.map(type => {
                return Object.assign({ id: type.payload.doc.id }, type.payload.doc.data());
            });
            this.showButtonType = this.mainType[0].name;
        });
    }
    openGuestModal(template) {
        this.resetData();
        this.modalRef = this.modalService.show(template);
    }
    ;
    // Завантаження картинки
    upload(event) {
        const id = Math.random().toString(36).substring(2);
        this.progress = true;
        this.ref = this.prStorage.ref(`images/${id}`);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadState = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(s => s.state));
        this.uploadProgress = this.task.percentageChanges();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.downloadURL = this.ref.getDownloadURL();
            this.downloadURL.subscribe(url => this.guestPhoto = url);
            this.progress = false;
            this.addGuestPhotoCheck = true;
        })).subscribe();
    }
    ;
    setData() {
        const newGuest = new src_app_shared_classes_guest_model__WEBPACK_IMPORTED_MODULE_7__["Guest"](this.guestName, this.guestPhoto, this.guestQuote, this.guestInfo);
        this.service.setData(newGuest);
        this.notificationsService.successNotification(`${newGuest.name} successfully added`);
        this.resetData();
        this.modalRef.hide();
    }
    ;
    resetData() {
        this.guestName = '';
        this.guestPhoto = '';
        this.guestQuote = '';
        this.guestInfo = '';
        this.uploadProgress = null;
        this.guestPhoto = '';
        this.addGuestPhotoCheck = false;
    }
    ;
    deleteData(guest, template) {
        this.deleteGuest = guest;
        this.modalRef = this.modalService.show(template);
    }
    ;
    confirmDeleteGuest() {
        this.service.deleteData(this.deleteGuest);
        this.modalRef.hide();
        this.notificationsService.successNotification(`Guest successfully deleted`);
    }
    ;
    decline() {
        this.modalRef.hide();
    }
    ;
    cancelData() {
        this.modalRef.hide();
        this.resetData();
    }
    ;
    //Встановлення типу, який відображається на головній сторінці
    setType() {
        const newType = new src_app_shared_classes_type_model__WEBPACK_IMPORTED_MODULE_8__["Type"](this.anotherType);
        this.service.updateType(newType, this.mainType[0].id);
        this.showButtonType = this.anotherType;
        this.anotherType = '';
        this.notificationsService.successNotification(`Type successfully edited`);
    }
    ;
};
AdminGuestsComponent.ctorParameters = () => [
    { type: src_app_shared_services_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
];
AdminGuestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-guests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-guests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-guests/admin-guests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-guests.component.css */ "./src/app/admin/admin-guests/admin-guests.component.css")).default]
    })
], AdminGuestsComponent);



/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orders {\r\n  border: 1px solid red;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.warningMessage {\r\n  display: none;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.cardHeader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.chipList {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 2px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.panelTitle {\r\n  width: 60%;\r\n  position: relative;\r\n  height: 48px;\r\n  line-height: 48px;\r\n}\r\n\r\nmat-panel-description>span {\r\n  line-height: 48px;\r\n}\r\n\r\n.cardHeader p {\r\n  font-family: 'Poppins-Regular', sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.textBold {\r\n  font-weight: bold;\r\n}\r\n\r\n.card-text {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.orderSum {\r\n  float: right;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.orderName {\r\n  color: red;\r\n  margin: 0 5px;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.orderDescription li {\r\n  list-style-type: none;\r\n}\r\n\r\n.orderDescription-flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.orderDescription-flex fa-icon,\r\n.userEdit,\r\nli>fa-icon {\r\n  cursor: pointer;\r\n  transition: .3s all;\r\n}\r\n\r\n.userEdit:hover,\r\nli>fa-icon:hover {\r\n  color: var(--main-color)\r\n}\r\n\r\n.deleteProduct:hover {\r\n  color: red\r\n}\r\n\r\n.editUserModalCss>input.ng-touched.ng-invalid {\r\n  border: 1px solid red\r\n}\r\n\r\n.editUserModalCss>input.ng-touched.ng-valid {\r\n  border: 1px solid green\r\n}\r\n\r\n.countInput {\r\n  margin: 0 5px;\r\n  width: 50px;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.countInput {\r\n  display: block;\r\n  width: 100%;\r\n  padding: .375rem .75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  border-radius: .25rem;\r\n  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n}\r\n\r\ninput[type='number'] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n@media screen and (max-width:768px) {\r\n  .container {\r\n    display: none;\r\n  }\r\n\r\n  .warningMessage {\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tb3JkZXJzL2FkbWluLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzRUFBc0U7QUFDeEU7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1vcmRlcnMvYWRtaW4tb3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi53YXJuaW5nTWVzc2FnZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZEhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jaGlwTGlzdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMnB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLnBhbmVsVGl0bGUge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxufVxyXG5cclxubWF0LXBhbmVsLWRlc2NyaXB0aW9uPnNwYW4ge1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4uY2FyZEhlYWRlciBwIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMtUmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnRleHRCb2xkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ub3JkZXJTdW0ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ub3JkZXJOYW1lIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm9yZGVyRGVzY3JpcHRpb24gbGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLm9yZGVyRGVzY3JpcHRpb24tZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm9yZGVyRGVzY3JpcHRpb24tZmxleCBmYS1pY29uLFxyXG4udXNlckVkaXQsXHJcbmxpPmZhLWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xyXG59XHJcblxyXG4udXNlckVkaXQ6aG92ZXIsXHJcbmxpPmZhLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKVxyXG59XHJcblxyXG4uZGVsZXRlUHJvZHVjdDpob3ZlciB7XHJcbiAgY29sb3I6IHJlZFxyXG59XHJcblxyXG4uZWRpdFVzZXJNb2RhbENzcz5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZFxyXG59XHJcblxyXG4uZWRpdFVzZXJNb2RhbENzcz5pbnB1dC5uZy10b3VjaGVkLm5nLXZhbGlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlblxyXG59XHJcblxyXG4uY291bnRJbnB1dCB7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmNvdW50SW5wdXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLndhcm5pbmdNZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: getAccordionConfig, AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccordionConfig", function() { return getAccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var src_app_shared_services_archive_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/archive.service */ "./src/app/shared/services/archive.service.ts");
/* harmony import */ var src_app_shared_classes_order_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/classes/order.model */ "./src/app/shared/classes/order.model.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");













function getAccordionConfig() {
    return Object.assign(new ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionConfig"](), { closeOthers: true });
}
let AdminOrdersComponent = class AdminOrdersComponent {
    constructor(orderService, productService, categoryService, firestore, dialog, modalService, archiveService, notificationsService) {
        this.orderService = orderService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.firestore = firestore;
        this.dialog = dialog;
        this.modalService = modalService;
        this.archiveService = archiveService;
        this.notificationsService = notificationsService;
        this.orders = [];
        this.categories = [];
        this.products = [];
        this.filterProducts = [];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"];
        this.faUserEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserEdit"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheck"];
        this.regForm = {
            name: '',
            adress: '',
        };
        this.options = {
            position: ["right", "top"],
            timeOut: 2000,
            lastOnBottom: true,
            clickToClose: true
        };
        //Після зміни даних блок  не перерендується. Застосований до головного циклу в HTML
        this.trackByPackId = (index, pack) => pack.id;
    }
    ngOnInit() {
        this.orderService.getData().subscribe(actionArray => {
            this.orders = actionArray.map(order => {
                return Object.assign({ id: order.payload.doc.id }, order.payload.doc.data());
            });
        });
        //Наявні категорії продуктів. Потрібно при додаванні нового продукту до замовлення
        this.categoryService.getData().subscribe(actionArray => {
            this.categories = actionArray.map(category => {
                return Object.assign({ id: category.payload.doc.id }, category.payload.doc.data());
            });
        });
        //Наявні продукти. Потрібно для додавання нового продукту до замолення
        this.productService.getData().subscribe(actionArray => {
            this.products = actionArray.map(product => {
                return Object.assign({ id: product.payload.doc.id }, product.payload.doc.data());
            });
        });
    }
    ;
    editUserModal(template, order) {
        this.modalRef = this.modalService.show(template);
        this.regForm.name = order.name;
        this.regForm.adress = order.adress;
        this.editOrder = order;
        this.editId = order.id;
    }
    ;
    cancelOrderModal(template, order, product) {
        this.modalRef = this.modalService.show(template);
        this.changeProduct = product;
        this.changeOrder = order;
        this.editId = order.id;
    }
    ;
    confirmDeleteOrder() {
        this.orderService.deleteData(this.changeOrder);
        this.modalRef.hide();
        this.notificationsService.successNotification(`Order successfully canceled`);
    }
    ;
    //Шукаю індекс продукту в замовленні по ID і видаляю його із замовлення
    confirmDeleteProduct() {
        const index = this.changeOrder.product.findIndex(findProd => findProd.id === this.changeProduct.id);
        this.changeOrder.product.splice(index, 1);
        const newOrder = new src_app_shared_classes_order_model__WEBPACK_IMPORTED_MODULE_11__["Order"](this.changeOrder.name, this.changeOrder.adress, this.changeOrder.number, this.changeOrder.date, this.changeOrder.product, false);
        this.orderService.updateData(newOrder, this.editId);
        this.editId = '';
        this.modalRef.hide();
        this.notificationsService.successNotification(`Product successfully deleted`);
    }
    ;
    addProductModal(template, order) {
        this.modalRef = this.modalService.show(template);
        this.editOrder = order;
        this.editId = order.id;
    }
    ;
    decline() {
        this.modalRef.hide();
    }
    ;
    //Загальна сума замовлення клієнта
    orderSum(product) {
        return product.reduce((accumulator, value) => accumulator + value.price * value.count, 0);
    }
    ;
    // Редагування адреси і імені користувача
    updateUserData() {
        const newOrder = new src_app_shared_classes_order_model__WEBPACK_IMPORTED_MODULE_11__["Order"](this.regForm.name, this.regForm.adress, this.editOrder.number, this.editOrder.date, this.editOrder.product, false);
        this.orderService.updateData(newOrder, this.editId);
        this.editId = '';
        this.modalRef.hide();
        this.notificationsService.successNotification(`User successfully edited`);
    }
    ;
    //При додаванні адміном нового продукту, фільтрація за категорією
    filterCategory() {
        this.filterProducts = this.products.filter(val => val.category === this.productCategory.trim());
        this.productName = '';
        this.productCount = null;
    }
    ;
    //Добавлення нового продукту в замовлення
    addProduct() {
        const product = this.filterProducts.filter(val => val.name === this.productName)[0];
        product.count = Number(this.productCount);
        //Якщо такий продукт вже є, то міняю його count
        if (this.editOrder.product.find(allProducts => allProducts.id === product.id)) {
            const index = this.editOrder.product.findIndex(elements => elements.id === product.id);
            this.editOrder.product[index].count += product.count;
            this.notificationsService.infoNotification(`Product quantity successfully changed`);
        }
        //Якщо такого продукту ще немає
        else {
            this.editOrder.product.push(product);
            this.notificationsService.infoNotification(`Product successfully added`);
        }
        ;
        const newOrder = new src_app_shared_classes_order_model__WEBPACK_IMPORTED_MODULE_11__["Order"](this.editOrder.name, this.editOrder.adress, this.editOrder.number, this.editOrder.date, this.editOrder.product, false);
        this.orderService.updateData(newOrder, this.editId);
        this.editId = '';
        this.productCategory = '';
        this.productName = '';
        this.productCount = null;
        this.modalRef.hide();
    }
    ;
    // Змінюється стан продукту, якщо він новий
    changeOrderState(order) {
        if (order.isNew) {
            const newOrder = new src_app_shared_classes_order_model__WEBPACK_IMPORTED_MODULE_11__["Order"](order.name, order.adress, order.number, order.date, order.product, false);
            this.editId = order.id;
            this.orderService.updateData(newOrder, this.editId);
            this.editId = '';
        }
    }
    ;
    deliveredOrder(order) {
        this.orderService.deleteData(order);
        delete order.id;
        this.archiveService.setData(order);
        this.notificationsService.infoNotification(`Order successfully sent to archive`);
    }
    // Сортування замовлень - нові відображаються зверху
    sortArray(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    ;
};
AdminOrdersComponent.ctorParameters = () => [
    { type: src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
    { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: src_app_shared_services_archive_service__WEBPACK_IMPORTED_MODULE_10__["ArchiveService"] },
    { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] }
];
AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-orders/admin-orders.component.html")).default,
        providers: [{ provide: ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionConfig"], useFactory: getAccordionConfig }],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/admin-orders/admin-orders.component.css")).default]
    })
], AdminOrdersComponent);



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  width: 150px;\r\n  height: 100px;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nth,\r\ntr {\r\n  color: white\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container button {\r\n  font-family: \"Poppins-Regular\", serif;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\nform button {\r\n  margin-top: 30px;\r\n}\r\n\r\n.anotherButtons {\r\n  margin-top: 50px;\r\n}\r\n\r\n.anotherButtons button {\r\n  background: none;\r\n  color: var(--main-color);\r\n  border: 1px solid var(--main-color);\r\n  outline: none;\r\n  transition: .6s all;\r\n  cursor: pointer;\r\n  border-radius: 3px;\r\n  margin: 10px;\r\n}\r\n\r\n.anotherButtons button:hover,\r\n.anotherButtons .active {\r\n  background: var(--main-color);\r\n  color: black;\r\n}\r\n\r\n.custom-file label,\r\ninput {\r\n  height: 100%;\r\n}\r\n\r\nlabel {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n.alert-info {\r\n  text-align: left;\r\n}\r\n\r\n.setButtons {\r\n  margin-top: 30px;\r\n}\r\n\r\n.modal-body p {\r\n  color: black;\r\n}\r\n\r\n.notifications {\r\n  position: relative;\r\n  z-index: 9999;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7RUFPRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXByb2R1Y3RzL2FkbWluLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5wLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxudGgsXHJcbnRyIHtcclxuICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCIsIHNlcmlmO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmFub3RoZXJCdXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uYW5vdGhlckJ1dHRvbnMgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IC42cyBhbGw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5hbm90aGVyQnV0dG9ucyBidXR0b246aG92ZXIsXHJcbi5hbm90aGVyQnV0dG9ucyAuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZSBsYWJlbCxcclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hbGVydC1pbmZvIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2V0QnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgcCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_classes_product_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/classes/product.model */ "./src/app/shared/classes/product.model.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");











let AdminProductsComponent = class AdminProductsComponent {
    constructor(service, categoryService, route, prStorage, firestore, modalService, notificationsService) {
        this.service = service;
        this.categoryService = categoryService;
        this.route = route;
        this.prStorage = prStorage;
        this.firestore = firestore;
        this.modalService = modalService;
        this.notificationsService = notificationsService;
        this.products = [];
        this.categories = [];
        this.productCategory = '';
        this.productCount = 1;
        this.productImage = '';
        this.productSize = null;
        this.productWeight = null;
        this.searchCategory = '';
        this.progress = false;
        this.editProductImgBoolean = false;
        this.searchProduct = '';
        this.options = {
            position: ["right", "top"],
            timeOut: 2000,
            lastOnBottom: true,
            clickToClose: true
        };
    }
    ngOnInit() {
        this.service.getData().subscribe(actionArray => {
            this.products = actionArray.map(product => {
                return Object.assign({ id: product.payload.doc.id }, product.payload.doc.data());
            });
        });
        this.categoryService.getData().subscribe(actionArray => {
            this.categories = actionArray.map(category => {
                return Object.assign({ id: category.payload.doc.id }, category.payload.doc.data());
            });
        });
        this.selectCategory('');
    }
    ;
    //Завантаження фото
    upload(event) {
        this.editProductImgBoolean = false;
        const id = Math.random().toString(36).substring(2);
        this.progress = true;
        this.ref = this.prStorage.ref(`images/${id}`);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadState = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(s => s.state));
        this.uploadProgress = this.task.percentageChanges();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.downloadURL = this.ref.getDownloadURL();
            this.downloadURL.subscribe(url => this.productImage = url);
            this.progress = false;
            this.addProductCheck = true;
        })).subscribe();
    }
    //Роблю кнопку категорії активною
    isActive(item) {
        return this.selected === item;
    }
    ;
    openProductModal(template) {
        this.resetData();
        this.editDisabled = false;
        this.editProductImgBoolean = false;
        this.modalRef = this.modalService.show(template);
    }
    ;
    setData() {
        const newProduct = new src_app_shared_classes_product_model__WEBPACK_IMPORTED_MODULE_9__["Product"](this.productCategory, this.productName, this.productDescription, this.productPrice, this.productCount, this.productImage, this.productSize, this.productWeight);
        //Спрацьовує, коли починаю редагувати продукт, оскільки при редагування даю ID
        if (this.productId) {
            this.service.updateData(newProduct, this.productId);
            this.productId = '';
            this.editDisabled = false;
            this.modalRef.hide();
            this.resetData();
            this.notificationsService.infoNotification(`${newProduct.name} was successfully edited`);
        }
        else {
            //Перевірка на унікальність назви продукту
            if (this.products
                .filter(product => product.category === this.productCategory)
                .some(product => product.name === this.productName)) {
                this.notificationsService.warningNotification(`This product already exists: ${this.productName}`);
            }
            else {
                this.service.setData(newProduct);
                this.notificationsService.successNotification(`${newProduct.name} successfully added`);
                this.modalRef.hide();
                this.resetData();
            }
            ;
        }
        ;
    }
    ;
    cancelData() {
        this.modalRef.hide();
        this.resetData();
    }
    ;
    filterCategory() {
        this.productSize = null;
        this.productWeight = null;
    }
    ;
    resetData() {
        this.productCategory = '';
        this.productName = '';
        this.productDescription = '';
        this.productPrice = null;
        this.productSize = null;
        this.productWeight = null;
        this.uploadProgress = null;
        this.productImage = '';
        this.addProductCheck = false;
    }
    ;
    editData(product, template) {
        this.modalRef = this.modalService.show(template);
        this.productId = product.id;
        this.productName = product.name;
        this.productCategory = product.category;
        this.productDescription = product.description;
        this.productPrice = product.price;
        this.productSize = product.size;
        this.productWeight = product.weight;
        this.productImage = product.image;
        this.addProductCheck = true;
        this.editProductImgBoolean = true;
        this.editSrc = product.image;
        this.editDisabled = true;
    }
    ;
    deleteData(product, template) {
        this.deleteProduct = product;
        this.modalRef = this.modalService.show(template);
    }
    ;
    confirmDeleteProduct() {
        this.service.deleteData(this.deleteProduct);
        this.modalRef.hide();
        this.notificationsService.successNotification(`${this.deleteProduct.name} successfully deleted`);
        this.searchProduct = '';
    }
    ;
    decline() {
        this.modalRef.hide();
    }
    ;
    cancelDeleteProduct() {
        this.modalRefWarning.hide();
    }
    ;
    selectCategory(name) {
        this.searchCategory = name || this.route.snapshot.paramMap.get('category');
        this.selected = name || this.route.snapshot.paramMap.get('category');
    }
    ;
};
AdminProductsComponent.ctorParameters = () => [
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-products/admin-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")).default]
    })
], AdminProductsComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".admin {\r\n  margin: 0 auto;\r\n  margin-top: 15vh;\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  max-width: 1400px;\r\n\r\n}\r\n\r\n.adminLinkBlock {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.adminLink {\r\n  color: var(--main-color);\r\n  background: none;\r\n  border: 1px solid var(--main-color);\r\n  margin-bottom: 5px;\r\n  font-family: \"JosefinSans-Bold\", sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.activeAdminLink {\r\n  color: black;\r\n  background: var(--main-color);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTV2aDtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG5cclxufVxyXG5cclxuLmFkbWluTGlua0Jsb2NrIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uYWRtaW5MaW5rIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpblNhbnMtQm9sZFwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZUFkbWluTGluayB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu/menu.component */ "./src/app/pages/menu/menu.component.ts");
/* harmony import */ var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contacts/contacts.component */ "./src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_categories_admin_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-categories/admin-categories.component */ "./src/app/admin/admin-categories/admin-categories.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/basket/basket.component */ "./src/app/pages/basket/basket.component.ts");
/* harmony import */ var _admin_admin_guests_admin_guests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin-guests/admin-guests.component */ "./src/app/admin/admin-guests/admin-guests.component.ts");
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _admin_admin_blacklist_admin_blacklist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-blacklist/admin-blacklist.component */ "./src/app/admin/admin-blacklist/admin-blacklist.component.ts");
/* harmony import */ var _admin_admin_feedback_admin_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-feedback/admin-feedback.component */ "./src/app/admin/admin-feedback/admin-feedback.component.ts");
/* harmony import */ var _pages_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/feedback/feedback.component */ "./src/app/pages/feedback/feedback.component.ts");
/* harmony import */ var _pages_feedback_feedback_home_feedback_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/feedback/feedback-home/feedback-home.component */ "./src/app/pages/feedback/feedback-home/feedback-home.component.ts");
/* harmony import */ var _pages_feedback_feedback_authorization_feedback_authorization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/feedback/feedback-authorization/feedback-authorization.component */ "./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.ts");
/* harmony import */ var _admin_admin_archive_admin_archive_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-archive/admin-archive.component */ "./src/app/admin/admin-archive/admin-archive.component.ts");



















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'menu/:category', component: _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
    { path: 'menu/:category/:name', component: _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailsComponent"] },
    {
        path: 'feedback', component: _pages_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__["FeedbackComponent"], children: [
            { path: '', redirectTo: 'authorization', pathMatch: 'full' },
            { path: 'authorization', component: _pages_feedback_feedback_authorization_feedback_authorization_component__WEBPACK_IMPORTED_MODULE_17__["FeedbackAuthorizationComponent"] },
            { path: 'home', component: _pages_feedback_feedback_home_feedback_home_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackHomeComponent"] },
        ]
    },
    { path: 'contacts', component: _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"] },
    { path: 'basket', component: _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_10__["BasketComponent"] },
    {
        path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], children: [
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            { path: 'categories', component: _admin_admin_categories_admin_categories_component__WEBPACK_IMPORTED_MODULE_7__["AdminCategoriesComponent"] },
            { path: 'products/:category', component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__["AdminProductsComponent"] },
            { path: 'feedback', component: _admin_admin_feedback_admin_feedback_component__WEBPACK_IMPORTED_MODULE_14__["AdminFeedbackComponent"] },
            { path: 'orders', component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_9__["AdminOrdersComponent"] },
            { path: 'blacklist', component: _admin_admin_blacklist_admin_blacklist_component__WEBPACK_IMPORTED_MODULE_13__["AdminBlacklistComponent"] },
            { path: 'guests', component: _admin_admin_guests_admin_guests_component__WEBPACK_IMPORTED_MODULE_11__["AdminGuestsComponent"] },
            { path: 'archive', component: _admin_admin_archive_admin_archive_component__WEBPACK_IMPORTED_MODULE_18__["AdminArchiveComponent"] },
        ]
    },
    { path: '**', redirectTo: '/home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Pizza Restaurant';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
            once: true
        });
    }
    onActivate(event) {
        window.scroll(0, 0);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/menu/menu.component */ "./src/app/pages/menu/menu.component.ts");
/* harmony import */ var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/contacts/contacts.component */ "./src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_categories_admin_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-categories/admin-categories.component */ "./src/app/admin/admin-categories/admin-categories.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _pages_home_home_contacts_home_contacts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home/home-contacts/home-contacts.component */ "./src/app/pages/home/home-contacts/home-contacts.component.ts");
/* harmony import */ var _pages_home_home_services_home_services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/home/home-services/home-services.component */ "./src/app/pages/home/home-services/home-services.component.ts");
/* harmony import */ var _pages_home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/home/home-main/home-main.component */ "./src/app/pages/home/home-main/home-main.component.ts");
/* harmony import */ var _pages_home_home_feedback_home_feedback_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/home/home-feedback/home-feedback.component */ "./src/app/pages/home/home-feedback/home-feedback.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _preloader_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./preloader-config */ "./src/app/preloader-config.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/basket/basket.component */ "./src/app/pages/basket/basket.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_pipes_category_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/pipes/category.pipe */ "./src/app/shared/pipes/category.pipe.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _pages_home_home_guests_home_guests_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/home/home-guests/home-guests.component */ "./src/app/pages/home/home-guests/home-guests.component.ts");
/* harmony import */ var _admin_admin_guests_admin_guests_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/admin-guests/admin-guests.component */ "./src/app/admin/admin-guests/admin-guests.component.ts");
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "./src/app/components/paginator/paginator.component.ts");
/* harmony import */ var _admin_admin_blacklist_admin_blacklist_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/admin-blacklist/admin-blacklist.component */ "./src/app/admin/admin-blacklist/admin-blacklist.component.ts");
/* harmony import */ var _admin_admin_feedback_admin_feedback_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/admin-feedback/admin-feedback.component */ "./src/app/admin/admin-feedback/admin-feedback.component.ts");
/* harmony import */ var _pages_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/feedback/feedback.component */ "./src/app/pages/feedback/feedback.component.ts");
/* harmony import */ var _pages_feedback_feedback_home_feedback_home_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/feedback/feedback-home/feedback-home.component */ "./src/app/pages/feedback/feedback-home/feedback-home.component.ts");
/* harmony import */ var _pages_feedback_feedback_authorization_feedback_authorization_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/feedback/feedback-authorization/feedback-authorization.component */ "./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _admin_admin_archive_admin_archive_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./admin/admin-archive/admin-archive.component */ "./src/app/admin/admin-archive/admin-archive.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");


























































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
            _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
            _admin_admin_categories_admin_categories_component__WEBPACK_IMPORTED_MODULE_13__["AdminCategoriesComponent"],
            _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_14__["AdminProductsComponent"],
            _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_15__["AdminOrdersComponent"],
            _pages_home_home_contacts_home_contacts_component__WEBPACK_IMPORTED_MODULE_18__["HomeContactsComponent"],
            _pages_home_home_services_home_services_component__WEBPACK_IMPORTED_MODULE_19__["HomeServicesComponent"],
            _pages_home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_20__["HomeMainComponent"],
            _pages_home_home_feedback_home_feedback_component__WEBPACK_IMPORTED_MODULE_21__["HomeFeedbackComponent"],
            _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_30__["BasketComponent"],
            _shared_pipes_category_pipe__WEBPACK_IMPORTED_MODULE_36__["CategoryPipe"],
            _pages_home_home_guests_home_guests_component__WEBPACK_IMPORTED_MODULE_40__["HomeGuestsComponent"],
            _admin_admin_guests_admin_guests_component__WEBPACK_IMPORTED_MODULE_41__["AdminGuestsComponent"],
            _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_42__["ProductDetailsComponent"],
            _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_44__["PaginatorComponent"],
            _admin_admin_blacklist_admin_blacklist_component__WEBPACK_IMPORTED_MODULE_45__["AdminBlacklistComponent"],
            _admin_admin_feedback_admin_feedback_component__WEBPACK_IMPORTED_MODULE_46__["AdminFeedbackComponent"],
            _pages_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_47__["FeedbackComponent"],
            _pages_feedback_feedback_home_feedback_home_component__WEBPACK_IMPORTED_MODULE_48__["FeedbackHomeComponent"],
            _pages_feedback_feedback_authorization_feedback_authorization_component__WEBPACK_IMPORTED_MODULE_49__["FeedbackAuthorizationComponent"],
            _admin_admin_archive_admin_archive_component__WEBPACK_IMPORTED_MODULE_54__["AdminArchiveComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderModule"].forRoot(_preloader_config__WEBPACK_IMPORTED_MODULE_23__["ngxUiLoaderConfig"]),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderRouterModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_24__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebase, 'pizza'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_27__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__["AngularFireStorageModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_33__["TextMaskModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__["ModalModule"].forRoot(),
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_37__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_38__["NgxPaginationModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_43__["PaginationModule"].forRoot(),
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["MatCheckboxModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_51__["AccordionModule"].forRoot(),
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__["MatExpansionModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltipModule"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_56__["SimpleNotificationsModule"].forRoot(),
            _angular_material_core__WEBPACK_IMPORTED_MODULE_57__["MatRippleModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n  background: rgb(16, 19, 21);\r\n  padding: 50px 0;\r\n}\r\n\r\n.footer-fl {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.social-fl {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.social-fl i {\r\n  color: white;\r\n  transition: .5s all;\r\n  cursor: pointer;\r\n}\r\n\r\n.social-fl i:hover {\r\n  color: rgb(248, 181, 0);\r\n}\r\n\r\n.footer-social,\r\n.footer-menu {\r\n  width: 25%;\r\n}\r\n\r\n.footer-contact {\r\n  width: 35%;\r\n}\r\n\r\n.footer-menu {\r\n  font-family: \"JosefinSans-Bold\", sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.footer-menu a {\r\n  text-decoration: none;\r\n  color: white;\r\n  transition: .4s;\r\n  position: relative;\r\n}\r\n\r\n.footer-menu a::before {\r\n  content: '';\r\n  bottom: -4px;\r\n  right: 0;\r\n  position: absolute;\r\n  width: 0%;\r\n  height: 2px;\r\n  background: var(--main-color);\r\n  transition: .4s;\r\n}\r\n\r\n.footer-menu a:hover:before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.footer-menu a:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.footer-menu li {\r\n  list-style-type: none;\r\n  padding: 5px 0;\r\n}\r\n\r\n.contacts-info-number,\r\n.contacts-info-location,\r\n.contacts-info-time {\r\n  display: flex;\r\n}\r\n\r\nfa-icon {\r\n  margin-right: 5px;\r\n  color: var(--main-color);\r\n}\r\n\r\n.location-icon {\r\n  margin-right: 4px;\r\n}\r\n\r\n.footer-contact p,\r\nspan {\r\n  color: white;\r\n}\r\n\r\n.footer-contact p {\r\n  font-weight: bold;\r\n}\r\n\r\n.contacts-info-location {\r\n  margin: 8px 0;\r\n}\r\n\r\n.copy {\r\n  margin-top: 40px;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n@media screen and (max-width:900px) {\r\n  .footer-fl {\r\n    justify-content: center;\r\n    height: auto;\r\n  }\r\n\r\n  .footer-social,\r\n  .footer-menu {\r\n    width: 50%;\r\n  }\r\n\r\n  .footer-contact {\r\n    width: 100%;\r\n  }\r\n\r\n  .social-twitter,\r\n  .social-facebook,\r\n  .social-instagram {\r\n    width: 100%;\r\n  }\r\n\r\n  .contacts-info-fl {\r\n    display: none;\r\n  }\r\n\r\n  .social-fl {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBR0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7OztJQUdFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTYsIDE5LCAyMSk7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWZsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uc29jaWFsLWZsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNvY2lhbC1mbCBpIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGFsbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc29jaWFsLWZsIGk6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjQ4LCAxODEsIDApO1xyXG59XHJcblxyXG4uZm9vdGVyLXNvY2lhbCxcclxuLmZvb3Rlci1tZW51IHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRhY3Qge1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5mb290ZXItbWVudSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpblNhbnMtQm9sZFwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlci1tZW51IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvb3Rlci1tZW51IGE6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYm90dG9tOiAtNHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uZm9vdGVyLW1lbnUgYTpob3ZlcjpiZWZvcmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5mb290ZXItbWVudSBhOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5mb290ZXItbWVudSBsaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcblxyXG4uY29udGFjdHMtaW5mby1udW1iZXIsXHJcbi5jb250YWN0cy1pbmZvLWxvY2F0aW9uLFxyXG4uY29udGFjdHMtaW5mby10aW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5mYS1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWN0IHAsXHJcbnNwYW4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWN0IHAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29udGFjdHMtaW5mby1sb2NhdGlvbiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLmNvcHkge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDBweCkge1xyXG4gIC5mb290ZXItZmwge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLXNvY2lhbCxcclxuICAuZm9vdGVyLW1lbnUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5mb290ZXItY29udGFjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtdHdpdHRlcixcclxuICAuc29jaWFsLWZhY2Vib29rLFxyXG4gIC5zb2NpYWwtaW5zdGFncmFtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RzLWluZm8tZmwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtZmwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let FooterComponent = class FooterComponent {
    constructor() {
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"];
        this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkerAlt"];
        this.faPhoneAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhoneAlt"];
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"JosefinSans-Bold\", sans-serif;\r\n}\r\n\r\n.header {\r\n  height: 10vh;\r\n  background: black;\r\n  padding: 0 20px;\r\n  color: #fff;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n}\r\n\r\n.logo-main {\r\n  display: flex;\r\n  height: 10vh;\r\n  width: 90px;\r\n  align-items: center;\r\n  float: left;\r\n  color: var(--main-color)\r\n}\r\n\r\n.logo-main span {\r\n  font-size: 21px;\r\n  color: #fff;\r\n  margin-left: 7px;\r\n}\r\n\r\n.logo-main p {\r\n  font-family: \"JosefinSans-Regular\", sans-serif;\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.menu {\r\n  float: right;\r\n  line-height: 10vh;\r\n}\r\n\r\n.menu a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  padding: 0 10px;\r\n  transition: .4s;\r\n  position: relative;\r\n}\r\n\r\n.menu a::before {\r\n  content: '';\r\n  bottom: -4px;\r\n  right: 0;\r\n  position: absolute;\r\n  width: 0%;\r\n  height: 2px;\r\n  background: var(--main-color);\r\n  transition: .4s;\r\n}\r\n\r\n.show-menu-btn,\r\n.hide-menu-btn {\r\n  transition: .4s;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.show-menu-btn {\r\n  float: right;\r\n  line-height: 10vh;\r\n}\r\n\r\n.show-menu-btn fa-icon {\r\n  transition: .4s;\r\n}\r\n\r\n.menu a:hover,\r\n.show-menu-btn fa-icon:hover,\r\n.hide-menu-btn:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.menu a:hover:before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n#chk {\r\n  position: absolute;\r\n  visibility: hidden;\r\n  z-index: -1;\r\n}\r\n\r\n.content {\r\n  padding: 0 20px;\r\n}\r\n\r\n.content p {\r\n  text-align: justify;\r\n}\r\n\r\nfa-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width:800px) {\r\n\r\n  .show-menu-btn,\r\n  .hide-menu-btn {\r\n    display: block;\r\n  }\r\n\r\n  .menu {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: #333;\r\n    right: -100%;\r\n    top: 0;\r\n    text-align: center;\r\n    padding: 80px 0;\r\n    line-height: normal;\r\n    transition: .7s;\r\n  }\r\n\r\n  .menu a {\r\n    display: block;\r\n    padding: 20px;\r\n  }\r\n\r\n  .hide-menu-btn {\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 40px;\r\n  }\r\n\r\n  #chk:checked~.menu {\r\n    right: 0;\r\n    z-index: 999;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5Qyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW5TYW5zLUJvbGRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxvZ28tbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcilcclxufVxyXG5cclxuLmxvZ28tbWFpbiBzcGFuIHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweDtcclxufVxyXG5cclxuLmxvZ28tbWFpbiBwIHtcclxuICBmb250LWZhbWlseTogXCJKb3NlZmluU2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBsaW5lLWhlaWdodDogMTB2aDtcclxufVxyXG5cclxuLm1lbnUgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWVudSBhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJvdHRvbTogLTRweDtcclxuICByaWdodDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNob3ctbWVudS1idG4sXHJcbi5oaWRlLW1lbnUtYnRuIHtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hvdy1tZW51LWJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG4uc2hvdy1tZW51LWJ0biBmYS1pY29uIHtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5tZW51IGE6aG92ZXIsXHJcbi5zaG93LW1lbnUtYnRuIGZhLWljb246aG92ZXIsXHJcbi5oaWRlLW1lbnUtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5tZW51IGE6aG92ZXI6YmVmb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jY2hrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudCBwIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5mYS1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcclxuXHJcbiAgLnNob3ctbWVudS1idG4sXHJcbiAgLmhpZGUtbWVudS1idG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRyYW5zaXRpb246IC43cztcclxuICB9XHJcblxyXG4gIC5tZW51IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhpZGUtbWVudS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAjY2hrOmNoZWNrZWR+Lm1lbnUge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faPizzaSlice = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPizzaSlice"];
        this.faShoppingBasket = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShoppingBasket"];
        this.getCount();
    }
    ;
    //число замовлень, яке відображаться через matBadge
    ngOnInit() {
        this.orderCount = this.localStorage.getDataLocalStorage('Products').length;
    }
    ;
    getCount() {
        this.localStorage.ordersStream.subscribe(data => this.orderCount = data.length);
    }
    ;
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/paginator/paginator.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-pagination::ng-deep .ngx-pagination {\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination .current {\r\n  background: var(--main-color);\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination li,\r\n.my-pagination::ng-deep .ngx-pagination .current,\r\n.my-pagination::ng-deep .ngx-pagination .pagination-previous,\r\n.my-pagination::ng-deep .ngx-pagination .pagination-next {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 1px solid var(--main-color);\r\n\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination .pagination-previous,\r\n.my-pagination::ng-deep .ngx-pagination .pagination-next {\r\n  color: var(--main-color);\r\n  position: relative;\r\n  padding: 0;\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination .pagination-previous::before,\r\n.my-pagination::ng-deep .ngx-pagination .pagination-previous a::before,\r\n.my-pagination::ng-deep.ngx-pagination .pagination-next a::after,\r\n.my-pagination::ng-deep .ngx-pagination .pagination-next.disabled::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  border: 6px solid transparent;\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination .pagination-previous::before,\r\n.my-pagination::ng-deep .ngx-pagination .pagination-previous a::before {\r\n  transform: translate(-75%, -50%);\r\n  border-right: 6px solid var(--main-color);\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination li {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.my-pagination::ng-deep ul {\r\n  padding: 0;\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination .small-screen li {\r\n  display: none;\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination .pagination-next.disabled::after,\r\n.my-pagination::ng-deep.ngx-pagination .pagination-next a::after {\r\n  border-left: 6px solid var(--main-color);\r\n  transform: translate(-100%, -50%);\r\n}\r\n\r\n.my-pagination::ng-deep .ngx-pagination .small-screen {\r\n  display: none;\r\n}\r\n\r\n.my-pagination::ng-deep.ngx-pagination a {\r\n  padding: 12px 22px;\r\n  text-decoration: none;\r\n  color: var(--main-color)\r\n}\r\n\r\n.my-pagination::ng-deep.ngx-pagination a:hover {\r\n  color: black\r\n}\r\n\r\n.my-pagination::ng-deep.pagination-next a,\r\n.my-pagination::ng-deep.pagination-previous a {\r\n  padding: 24px;\r\n}\r\n\r\n.paginator {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 50px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DOztBQUVyQzs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBSUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUdBOztFQUVFLHdDQUF3QztFQUN4QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGksXHJcbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCxcclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLFxyXG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xyXG5cclxufVxyXG5cclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLFxyXG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXM6OmJlZm9yZSxcclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGE6OmJlZm9yZSxcclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlcixcclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzOjpiZWZvcmUsXHJcbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUsIC01MCUpO1xyXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgdWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuc21hbGwtc2NyZWVuIGxpIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6OmFmdGVyLFxyXG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5zbWFsbC1zY3JlZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwLm5neC1wYWdpbmF0aW9uIGEge1xyXG4gIHBhZGRpbmc6IDEycHggMjJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpXHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwLm5neC1wYWdpbmF0aW9uIGE6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFja1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcC5wYWdpbmF0aW9uLW5leHQgYSxcclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAucGFnaW5hdGlvbi1wcmV2aW91cyBhIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogNTBweCAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/paginator/paginator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.ts ***!
  \*************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_paginator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/paginator.service */ "./src/app/shared/services/paginator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PaginatorComponent = class PaginatorComponent {
    constructor(paginatorService, route) {
        this.paginatorService = paginatorService;
        this.route = route;
    }
    ngOnInit() {
        this.paginatorService.currentPage.subscribe(page => this.page = page);
    }
    changePage(event) {
        this.paginatorService.changePage(event);
    }
};
PaginatorComponent.ctorParameters = () => [
    { type: src_app_shared_services_paginator_service__WEBPACK_IMPORTED_MODULE_2__["PaginatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/paginator/paginator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginator.component.css */ "./src/app/components/paginator/paginator.component.css")).default]
    })
], PaginatorComponent);



/***/ }),

/***/ "./src/app/pages/basket/basket.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/basket/basket.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basket {\r\n  margin-top: 10vh;\r\n  min-height: 90vh;\r\n}\r\n\r\n.basket-content {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 100px;\r\n}\r\n\r\n.basket-content h2 {\r\n  margin-bottom: 50px;\r\n  color: white\r\n}\r\n\r\nh2 {\r\n  font-family: \"Poppins-Regular\", sans-serif;\r\n}\r\n\r\n.basket-order {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  border: 2px solid #905527;\r\n  margin-bottom: 20px;\r\n  color: white;\r\n  align-items: center;\r\n  background: rgba(202, 138, 89, 0.3);\r\n}\r\n\r\n.basket-leftInfo,\r\n.basket-rightInfo {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 40%;\r\n  height: 100%;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n.basket-rightInfo {\r\n  background: var(--main-color);\r\n  border: 2px solid #905527;\r\n  border-right: none;\r\n}\r\n\r\n.basket-leftInfo img {\r\n  width: 180px;\r\n  height: 125px;\r\n}\r\n\r\n.basket-leftInfo p {\r\n  font-family: \"Poppins-Bold\", sans-serif;\r\n  width: 30%;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.countProduct input {\r\n  width: 35px;\r\n  height: 35px;\r\n  background: none;\r\n  outline: none;\r\n  border: 2px solid #905527;\r\n  text-align: center;\r\n  color: black;\r\n  border-radius: 50%;\r\n}\r\n\r\n.countProduct button {\r\n  border: none;\r\n  font-weight: bold;\r\n  outline: none;\r\n  background: none;\r\n  color: red;\r\n  transform: scale(1.8);\r\n  transition: .3s all;\r\n}\r\n\r\n.countProduct button:hover {\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton[mat-button] {\r\n  margin-right: 8px;\r\n}\r\n\r\n.orderStepper {\r\n  background: white;\r\n  padding: 30px 0;\r\n}\r\n\r\n.deletePoduct {\r\n  transition: .2s ease-in;\r\n  cursor: pointer;\r\n}\r\n\r\n.deletePoduct:hover {\r\n  color: red;\r\n}\r\n\r\n.order {\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n\r\n.order .price {\r\n  color: red;\r\n}\r\n\r\n@media screen and (max-width:1000px) {\r\n\r\n  .basket-leftInfo,\r\n  .basket-rightInfo {\r\n    width: 100%;\r\n  }\r\n\r\n  .basket-leftInfo {\r\n    position: relative;\r\n  }\r\n\r\n  .basket-leftInfo fa-icon {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 0px;\r\n  }\r\n\r\n  .basket-rightInfo {\r\n    border: none;\r\n    border-top: 2px solid #905527;\r\n  }\r\n}\r\n\r\n@media screen and (max-width:425px) {\r\n  .basket-leftInfo {\r\n    display: block;\r\n  }\r\n\r\n  .basket-leftInfo p {\r\n    margin: 15px auto;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFza2V0L2Jhc2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtFQUNWOztFQUVBO0lBQ0UsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYXNrZXQvYmFza2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFza2V0IHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbi5iYXNrZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYmFza2V0LWNvbnRlbnQgaDIge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhc2tldC1vcmRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MDU1Mjc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMiwgMTM4LCA4OSwgMC4zKTtcclxufVxyXG5cclxuLmJhc2tldC1sZWZ0SW5mbyxcclxuLmJhc2tldC1yaWdodEluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYmFza2V0LXJpZ2h0SW5mbyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzkwNTUyNztcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5iYXNrZXQtbGVmdEluZm8gaW1nIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxufVxyXG5cclxuLmJhc2tldC1sZWZ0SW5mbyBwIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zLUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvdW50UHJvZHVjdCBpbnB1dCB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOTA1NTI3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY291bnRQcm9kdWN0IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS44KTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xyXG59XHJcblxyXG4uY291bnRQcm9kdWN0IGJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uW21hdC1idXR0b25dIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLm9yZGVyU3RlcHBlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcblxyXG4uZGVsZXRlUG9kdWN0IHtcclxuICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGVQb2R1Y3Q6aG92ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5vcmRlciB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9yZGVyIC5wcmljZSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpIHtcclxuXHJcbiAgLmJhc2tldC1sZWZ0SW5mbyxcclxuICAuYmFza2V0LXJpZ2h0SW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5iYXNrZXQtbGVmdEluZm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmJhc2tldC1sZWZ0SW5mbyBmYS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFza2V0LXJpZ2h0SW5mbyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzkwNTUyNztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDI1cHgpIHtcclxuICAuYmFza2V0LWxlZnRJbmZvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmJhc2tldC1sZWZ0SW5mbyBwIHtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/basket/basket.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/basket/basket.component.ts ***!
  \**************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var src_app_shared_classes_order_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/classes/order.model */ "./src/app/shared/classes/order.model.ts");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













let BasketComponent = class BasketComponent {
    constructor(productService, _formBuilder, orderService, localStorageService, dialog, modalService, notificationsService, route) {
        this.productService = productService;
        this._formBuilder = _formBuilder;
        this.orderService = orderService;
        this.localStorageService = localStorageService;
        this.dialog = dialog;
        this.modalService = modalService;
        this.notificationsService = notificationsService;
        this.route = route;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.localProducts = [];
        this.options = {
            position: ["right", "top"],
            timeOut: 2000,
            lastOnBottom: true,
            clickToClose: true
        };
        this.mask = ['+', '3', '8', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: '0'
        });
        this.localProducts = this.localStorageService.getDataLocalStorage('Products');
        this.checkBasketArray();
    }
    ;
    checkBasketArray() {
        if (this.localProducts.length > 0) {
            this.orderCheck = false;
            this.reduce();
        }
        else {
            this.orderCheck = true;
        }
    }
    ;
    //Сума замовлення
    reduce() {
        this.orderSum = this.localProducts.reduce((accumulator, value) => accumulator + value.price * value.count, 0);
    }
    ;
    countProductsInc(product) {
        product.count++;
        this.changeCountInLocalStorage(product);
        this.reduce();
    }
    ;
    countProductsDec(product) {
        if (product.count > 1) {
            product.count--;
            this.changeCountInLocalStorage(product);
            this.reduce();
        }
    }
    ;
    changeCountInLocalStorage(chosenProduct) {
        const localStorageArray = this.localStorageService.getDataLocalStorage('Products');
        const index = localStorageArray.findIndex(elem => elem.id === chosenProduct.id);
        localStorageArray.splice(index, 1, chosenProduct);
        this.localStorageService.setProductLocalStorage(localStorageArray);
    }
    ;
    checkCountProduct(event, product) {
        const regExp = /^[1-9]{1}([0-9]{1})?([0-9]{1})?$/;
        const check = regExp.test(event.target.value);
        if (check) {
            product.count = Number(event.target.value);
        }
        else {
            event.target.value = 1;
            product.count = Number(event.target.value);
        }
        this.changeCountInLocalStorage(product);
        this.reduce();
    }
    ;
    deletePoduct(product) {
        const products = this.localStorageService.getDataLocalStorage('Products');
        const index = products.findIndex(findProduct => findProduct.id === product.id);
        this.localProducts.splice(index, 1);
        products.splice(index, 1);
        this.localStorageService.setProductLocalStorage(products);
        this.checkBasketArray();
        this.notificationsService.successNotification(`${product.name} successfully canceled`);
    }
    ;
    setOrder() {
        const newOrder = new src_app_shared_classes_order_model__WEBPACK_IMPORTED_MODULE_7__["Order"](this.userName.value, this.userAdress.value, this.userNumber.value, new Date(), this.localProducts, true);
        this.orderService.setData(newOrder);
        this.firstFormGroup.reset();
        this.secondFormGroup.reset();
        this.thirdFormGroup.reset();
        this.localProducts = [];
        this.localStorageService.setProductLocalStorage(this.localProducts);
        this.checkBasketArray();
        window.scroll(0, 0);
        this.notificationsService.successNotification(`Order accepted!`);
    }
    ;
    closeWindow() {
        this.modalRef.hide();
    }
    ;
    get userName() {
        return this.firstFormGroup.get('firstCtrl');
    }
    ;
    get userAdress() {
        return this.secondFormGroup.get('secondCtrl');
    }
    ;
    get userNumber() {
        return this.thirdFormGroup.get('thirdCtrl');
    }
    ;
};
BasketComponent.ctorParameters = () => [
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] },
    { type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] },
    { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
];
BasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basket',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basket/basket.component.html")).default,
        providers: [{
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false }
            }],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basket.component.css */ "./src/app/pages/basket/basket.component.css")).default]
    })
], BasketComponent);



/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contacts {\r\n  margin-top: 10vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdHMge1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.ts ***!
  \******************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm2015/ng-animate.js");




let ContactsComponent = class ContactsComponent {
    constructor() {
        this.visible = true;
    }
    ngOnInit() {
    }
};
ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.component.html")).default,
        // animations: [
        //   trigger('popOverState', [
        //     state('show', style({
        //       opacity: 1
        //     })),
        //     state('hide', style({
        //       opacity: 0
        //     })),
        //     transition('show => hide', animate('600ms ease-out')),
        //     transition('hide => show', animate('1000ms ease-in'))
        //   ])
        // ]
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('shake', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_3__["shake"])),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_3__["shake"]))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts.component.css */ "./src/app/pages/contacts/contacts.component.css")).default]
    })
], ContactsComponent);



/***/ }),

/***/ "./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userBlog {\r\n  margin-top: 10vh;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  font-family: 'Poppins-Regular', sans-serif;\r\n  position: relative;\r\n  background: black;\r\n}\r\n\r\n.formContainer {\r\n  width: 320px;\r\n  padding: 40px;\r\n  position: absolute;\r\n  z-index: 5;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -60%);\r\n}\r\n\r\n.formContainer h1 {\r\n  color: white;\r\n  font-weight: 500;\r\n  font-family: \"NothingYouCouldDo\";\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.formContainer input[type=\"text\"],\r\n.formContainer input[type=\"password\"],\r\n.formContainer input[type=\"email\"] {\r\n  border: 0;\r\n  background: none;\r\n  display: block;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  border: 2px solid #ecb70b;\r\n  padding: 10px 10px;\r\n  width: 200px;\r\n  outline: none;\r\n  color: white;\r\n  border-radius: 24px;\r\n  transition: 0.25s;\r\n}\r\n\r\n.formContainer input[type=\"text\"]:focus,\r\n.formContainer input[type=\"password\"]:focus,\r\n.formContainer input[type=\"email\"]:focus {\r\n  width: 210px;\r\n  border-color: #fa6e00;\r\n}\r\n\r\n.formContainer button {\r\n  border: 0;\r\n  background: none;\r\n  display: block;\r\n  margin: 20px auto 10px;\r\n  text-align: center;\r\n  padding: 10px 40px;\r\n  outline: none;\r\n  color: white;\r\n  border-radius: 24px;\r\n  transition: 0.25s;\r\n}\r\n\r\n.logIn button {\r\n  border: 2px solid #2ecc71;\r\n}\r\n\r\n.signUp button {\r\n  border: 2px solid #3421e0;\r\n}\r\n\r\n.formContainer a {\r\n  cursor: pointer;\r\n}\r\n\r\n.formContainer p {\r\n  color: white;\r\n  font-size: 15px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.signUp,\r\n.logIn,\r\n.formContainer h1 {\r\n  text-align: center;\r\n}\r\n\r\n.logIn button:hover {\r\n  background: #2ecc71;\r\n  cursor: pointer;\r\n}\r\n\r\n.signUp button:hover:enabled {\r\n  background: #3421e0;\r\n  cursor: pointer;\r\n}\r\n\r\n.validation {\r\n  text-align: left;\r\n  color: red;\r\n  margin-bottom: 19px;\r\n  position: relative;\r\n}\r\n\r\nsmall {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  margin-left: 40px;\r\n}\r\n\r\n.existedSmall,\r\n.wrongData {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  margin-left: 0;\r\n}\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 150px;\r\n}\r\n\r\n.waveEffect {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 150px;\r\n}\r\n\r\n.waveEffect .wave,\r\n.waveEffect .wave:before,\r\n.waveEffect .wave:after {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 143px;\r\n  left: 0;\r\n  background: url(\"https://firebasestorage.googleapis.com/v0/b/myproject-c5d44.appspot.com/o/Pizza%20backdround%2Fwave.png?alt=media&token=0ae12cf3-15fa-4992-9747-fea2f19e4e06\");\r\n  -webkit-filter: drop-shadow(2px 4px 6px black);\r\n          filter: drop-shadow(2px 4px 6px black);\r\n}\r\n\r\n.waveEffect .wave {\r\n  bottom: 0;\r\n  -webkit-animation: animate 10s linear infinite;\r\n          animation: animate 10s linear infinite;\r\n}\r\n\r\n.waveEffect .wave:before,\r\n.waveEffect .wave:after {\r\n  content: '';\r\n  top: 0;\r\n}\r\n\r\n.waveEffect .wave:before {\r\n  opacity: .4;\r\n  -webkit-animation: animate-reverse 10s linear infinite;\r\n          animation: animate-reverse 10s linear infinite;\r\n}\r\n\r\n.waveEffect .wave:after {\r\n  opacity: .6;\r\n  -webkit-animation-delay: -5s;\r\n          animation-delay: -5s;\r\n  -webkit-animation: animate-reverse 20s linear infinite;\r\n          animation: animate-reverse 20s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n  0% {\r\n    background-position: 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 1360px;\r\n  }\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 1360px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes animate-reverse {\r\n  0% {\r\n    background-position: 1360px;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0;\r\n  }\r\n}\r\n\r\n@keyframes animate-reverse {\r\n  0% {\r\n    background-position: 1360px;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0;\r\n  }\r\n}\r\n\r\n.Sign input.ng-touched.ng-invalid {\r\n  border: 2px solid red !important\r\n}\r\n\r\n@media screen and (max-width:960px) {\r\n  .waveEffect {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZGJhY2svZmVlZGJhY2stYXV0aG9yaXphdGlvbi9mZWVkYmFjay1hdXRob3JpemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBSUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsT0FBTztFQUNQLCtLQUErSztFQUMvSyw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsU0FBUztFQUNULDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7O0FBRUE7O0VBRUUsV0FBVztFQUNYLE1BQU07QUFDUjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzREFBOEM7VUFBOUMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsc0RBQThDO1VBQTlDLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLWF1dGhvcml6YXRpb24vZmVlZGJhY2stYXV0aG9yaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJCbG9nIHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1SZWd1bGFyJywgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIHtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogNTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSk7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIGgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LWZhbWlseTogXCJOb3RoaW5nWW91Q291bGREb1wiO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uZm9ybUNvbnRhaW5lciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbi5mb3JtQ29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlY2I3MGI7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uZm9ybUNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuLmZvcm1Db250YWluZXIgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxyXG4uZm9ybUNvbnRhaW5lciBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMge1xyXG4gIHdpZHRoOiAyMTBweDtcclxuICBib3JkZXItY29sb3I6ICNmYTZlMDA7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvcm1Db250YWluZXIgYnV0dG9uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICB0cmFuc2l0aW9uOiAwLjI1cztcclxufVxyXG5cclxuLmxvZ0luIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzJlY2M3MTtcclxufVxyXG5cclxuLnNpZ25VcCBidXR0b24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNDIxZTA7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm1Db250YWluZXIgcCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc2lnblVwLFxyXG4ubG9nSW4sXHJcbi5mb3JtQ29udGFpbmVyIGgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dJbiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyZWNjNzE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lnblVwIGJ1dHRvbjpob3ZlcjplbmFibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjMzQyMWUwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZhbGlkYXRpb24ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuc21hbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuLmV4aXN0ZWRTbWFsbCxcclxuLndyb25nRGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLndhdmVFZmZlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4ud2F2ZUVmZmVjdCAud2F2ZSxcclxuLndhdmVFZmZlY3QgLndhdmU6YmVmb3JlLFxyXG4ud2F2ZUVmZmVjdCAud2F2ZTphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTQzcHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL215cHJvamVjdC1jNWQ0NC5hcHBzcG90LmNvbS9vL1BpenphJTIwYmFja2Ryb3VuZCUyRndhdmUucG5nP2FsdD1tZWRpYSZ0b2tlbj0wYWUxMmNmMy0xNWZhLTQ5OTItOTc0Ny1mZWEyZjE5ZTRlMDZcIik7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XHJcbn1cclxuXHJcbi53YXZlRWZmZWN0IC53YXZlIHtcclxuICBib3R0b206IDA7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi53YXZlRWZmZWN0IC53YXZlOmJlZm9yZSxcclxuLndhdmVFZmZlY3QgLndhdmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLndhdmVFZmZlY3QgLndhdmU6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAuNDtcclxuICBhbmltYXRpb246IGFuaW1hdGUtcmV2ZXJzZSAxMHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4ud2F2ZUVmZmVjdCAud2F2ZTphZnRlciB7XHJcbiAgb3BhY2l0eTogLjY7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlLXJldmVyc2UgMjBzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMzYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtcmV2ZXJzZSB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTM2MHB4O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLlNpZ24gaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQgIWltcG9ydGFudFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk2MHB4KSB7XHJcbiAgLndhdmVFZmZlY3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FeedbackAuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackAuthorizationComponent", function() { return FeedbackAuthorizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm2015/ng-animate.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_classes_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/classes/user.model */ "./src/app/shared/classes/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");











let FeedbackAuthorizationComponent = class FeedbackAuthorizationComponent {
    constructor(userService, route, localStorageService, dialog, modalService) {
        this.userService = userService;
        this.route = route;
        this.localStorageService = localStorageService;
        this.dialog = dialog;
        this.modalService = modalService;
        this.users = [];
        this.signUpOrLogInCheck = true;
        this.title = 'Sign Up';
        this.userPasswordState = 'start';
        this.flipState = 'start';
        this.userNameState = 'start';
        this.blackList = { isBlackList: false };
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])
        });
        this.userService.getData().subscribe(actionArray => {
            this.users = actionArray.map(user => {
                return Object.assign({ id: user.payload.doc.id }, user.payload.doc.data());
            });
        });
        this.checkAuthorization();
    }
    ;
    changeAnimationState(subject) {
        return subject === 'end' ? 'start' : 'end';
    }
    ;
    //Перевірка логування / реєстрації
    checkLog() {
        this.flipState = this.changeAnimationState(this.flipState);
        this.signUpOrLogInCheck = !this.signUpOrLogInCheck;
        this.title = this.title === 'Sign Up' ? 'Log In' : 'Sign Up';
        this.existingName = false;
        this.existingEmail = false;
        this.form.reset();
    }
    signUp() {
        if (this.form.valid) {
            const formData = Object.assign({}, this.form.value);
            const newUser = new src_app_shared_classes_user_model__WEBPACK_IMPORTED_MODULE_6__["User"](formData.username, formData.email, formData.password, this.blackList);
            console.log(newUser);
            this.existingName = this.users.some(user => user.username === newUser.username);
            this.existingEmail = this.users.some(user => user.email === newUser.email);
            //Якщо такого нікнейму і мейлу нема, то перекидає на іншу компоненту
            if (!this.existingName && !this.existingEmail) {
                this.userService.setData(newUser);
                this.localStorageService.setUserLocalStorage(newUser.username);
                this.form.reset();
                this.checkAuthorization();
            }
        }
    }
    ;
    checkAuthorization() {
        if (this.localStorageService.getDataLocalStorage('User').length > 0) {
            this.route.navigate(['feedback/home']);
        }
    }
    ;
    logIn(template) {
        //Якщо форма пуста - відбувається shake-анімація
        !this.form.value.username ? this.userNameState = this.changeAnimationState(this.userNameState) : null;
        !this.form.value.password ? this.userPasswordState = this.changeAnimationState(this.userPasswordState) : null;
        const formData = Object.assign({}, this.form.value);
        if (this.users.some(user => user.username === formData.username && user.password === formData.password)) {
            const searchUser = this.users.find(user => user.username === formData.username && user.password === formData.password);
            this.wrongData = false;
            //якщо користувач в чорному списку, показуэться модалка з причиною, якщо вона є
            if (searchUser.blacklist.isBlackList) {
                this.reasonForBlock = searchUser.blacklist.reason;
                this.modalRef = this.modalService.show(template);
            }
            this.localStorageService.setUserLocalStorage(searchUser.username);
            this.checkAuthorization();
            this.form.reset();
        }
        else {
            this.wrongData = true;
        }
    }
    ;
    closeWindow() {
        this.modalRef.hide();
    }
    ;
};
FeedbackAuthorizationComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] }
];
FeedbackAuthorizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback-authorization',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback-authorization.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('shake', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start <=> end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_3__["shake"])),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flip', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start <=> end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_3__["flip"])),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback-authorization.component.css */ "./src/app/pages/feedback/feedback-authorization/feedback-authorization.component.css")).default]
    })
], FeedbackAuthorizationComponent);



/***/ }),

/***/ "./src/app/pages/feedback/feedback-home/feedback-home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/feedback/feedback-home/feedback-home.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".homeBlog {\r\n    margin-top: 10vh;\r\n    min-height: 90vh;\r\n    font-family: 'Poppins-Regular', sans-serif;\r\n  }\r\n  \r\n  header {\r\n    height: 6vh;\r\n    background: var(--main-color);\r\n    padding: 0 20px;\r\n    color: #fff;\r\n    position: fixed;\r\n    top: 10vh;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n  }\r\n  \r\n  .container {\r\n    padding: 0;\r\n  }\r\n  \r\n  .header-nav {\r\n    height: 6vh;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  .header-nav fa-icon {\r\n    cursor: pointer;\r\n    transition: .3s;\r\n  }\r\n  \r\n  .header-nav fa-icon:first-child:hover {\r\n    color: #31d309;\r\n  }\r\n  \r\n  .header-nav fa-icon:last-child:hover {\r\n    color: red;\r\n  }\r\n  \r\n  .content {\r\n    margin-top: 21vh;\r\n  }\r\n  \r\n  .userPost {\r\n    width: 95%;\r\n    max-width: 900px;\r\n    min-height: 120px;\r\n    border: 2px solid var(--main-color);\r\n    margin: 0 auto 30px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    word-wrap: break-word;\r\n  }\r\n  \r\n  .userPost p,\r\n  h4 {\r\n    color: white;\r\n  }\r\n  \r\n  .userPost fa-icon {\r\n    color: var(--main-color)\r\n  }\r\n  \r\n  .userPostText {\r\n    font-family: 'Poppins-Italic', sans-serif;\r\n  }\r\n  \r\n  label {\r\n    float: left;\r\n    text-align: left;\r\n  }\r\n  \r\n  .buttons {\r\n    text-align: left;\r\n  }\r\n  \r\n  .dateAndUser {\r\n    font-size: 15px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZGJhY2svZmVlZGJhY2staG9tZS9mZWVkYmFjay1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mZWVkYmFjay9mZWVkYmFjay1ob21lL2ZlZWRiYWNrLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lQmxvZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1SZWd1bGFyJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVyIHtcclxuICAgIGhlaWdodDogNnZoO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTB2aDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItbmF2IHtcclxuICAgIGhlaWdodDogNnZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItbmF2IGZhLWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLW5hdiBmYS1pY29uOmZpcnN0LWNoaWxkOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzFkMzA5O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLW5hdiBmYS1pY29uOmxhc3QtY2hpbGQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMjF2aDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJQb3N0IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICBcclxuICAudXNlclBvc3QgcCxcclxuICBoNCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyUG9zdCBmYS1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKVxyXG4gIH1cclxuICBcclxuICAudXNlclBvc3RUZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1JdGFsaWMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25zIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlQW5kVXNlciB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/pages/feedback/feedback-home/feedback-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/feedback/feedback-home/feedback-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeedbackHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackHomeComponent", function() { return FeedbackHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_classes_post_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/classes/post.model */ "./src/app/shared/classes/post.model.ts");
/* harmony import */ var src_app_shared_services_paginator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/paginator.service */ "./src/app/shared/services/paginator.service.ts");











let FeedbackHomeComponent = class FeedbackHomeComponent {
    constructor(localStorageService, route, paginatorService, userService, postService, dialog, modalService) {
        this.localStorageService = localStorageService;
        this.route = route;
        this.paginatorService = paginatorService;
        this.userService = userService;
        this.postService = postService;
        this.dialog = dialog;
        this.modalService = modalService;
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSignOutAlt"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faPen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPen"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faClock"];
        this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamationCircle"];
        this.posts = [];
        this.users = [];
        this.page = 1;
        this.postButtonName = 'Add';
        this.possibilityToCreate = true;
        this.reasonForBlock = '';
        //Після зміни даних блок  не перерендується. Застосований до головного циклу в HTML
        this.trackByPackId = (index, pack) => pack.id;
    }
    ngOnInit() {
        this.postService.getData().subscribe(actionArray => {
            this.posts = actionArray.map(post => {
                return Object.assign({ id: post.payload.doc.id }, post.payload.doc.data());
            });
            this.posts.length > 30 ? this.checkPaginator = true : this.checkPaginator = false;
        });
        this.userService.getData().subscribe(actionArray => {
            this.users = actionArray.map(user => {
                return Object.assign({ id: user.payload.doc.id }, user.payload.doc.data());
            });
            this.checkAuthorization();
        });
    }
    ;
    checkAuthorization() {
        const checkUser = this.localStorageService.getDataLocalStorage('User');
        if (checkUser.length === 0) {
            this.route.navigate(['feedback/authorization']);
        }
        else {
            this.userName = checkUser[0];
            const check = this.users.find(user => user.username === this.userName);
            //якщо користувач в чорному списку, зникає можливість створювати нові повідомлення
            check.blacklist.isBlackList ? this.possibilityToCreate = false : this.possibilityToCreate = true;
            this.reasonForBlock = check.blacklist.reason || 'not specified';
        }
    }
    ;
    logOut() {
        localStorage.removeItem('User');
        this.checkAuthorization();
    }
    ;
    openModal(template) {
        this.modalRef = this.modalService.show(template);
        this.postButtonName = 'Add';
    }
    ;
    deletePost(template, post) {
        this.modalRef = this.modalService.show(template);
        this.chosenPost = post;
    }
    ;
    confirmDeletePost() {
        this.postService.deleteData(this.chosenPost);
        this.modalRef.hide();
    }
    ;
    decline() {
        this.modalRef.hide();
    }
    ;
    addPost() {
        const user = this.users.filter(user => user.username === this.userName)[0];
        const newPost = new src_app_shared_classes_post_model__WEBPACK_IMPORTED_MODULE_9__["Post"](this.userPostText, user, new Date());
        //Спрацьовує, коли редагується пост, оскільки при редагування даю посту ID
        if (this.postId) {
            this.postService.updateData(newPost, this.postId);
            this.postId = '';
        }
        else {
            this.postService.setData(newPost);
        }
        ;
        this.modalRef.hide();
        this.userPostText = '';
    }
    ;
    editPost(template, post) {
        this.postButtonName = 'Save edit';
        this.modalRef = this.modalService.show(template);
        this.userPostText = post.text;
        this.postId = post.id;
    }
    ;
    //Сортування постів за датою
    sortArray(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    ;
};
FeedbackHomeComponent.ctorParameters = () => [
    { type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_paginator_service__WEBPACK_IMPORTED_MODULE_10__["PaginatorService"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
];
FeedbackHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback-home/feedback-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback-home.component.css */ "./src/app/pages/feedback/feedback-home/feedback-home.component.css")).default]
    })
], FeedbackHomeComponent);



/***/ }),

/***/ "./src/app/pages/feedback/feedback.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/feedback/feedback.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/feedback/feedback.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/feedback/feedback.component.ts ***!
  \******************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeedbackComponent = class FeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.css */ "./src/app/pages/feedback/feedback.component.css")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/pages/home/home-contacts/home-contacts.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/home-contacts/home-contacts.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contactsAndAbout {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.contacts {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: black;\r\n}\r\n\r\n.contact-info {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.card {\r\n  background: rgb(11, 9, 9);\r\n  padding: 0 20px;\r\n  width: calc(33% - 20px);\r\n  height: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-icon {\r\n  font-size: 28px;\r\n  background: var(--main-color);\r\n  width: 60px;\r\n  height: 60px;\r\n  text-align: center;\r\n  line-height: 60px !important;\r\n  border-radius: 50%;\r\n  transition: 0.3s linear;\r\n}\r\n\r\n.card:hover .card-icon {\r\n  background: none;\r\n  color: var(--main-color);\r\n  transform: scale(1.6);\r\n}\r\n\r\n.card p {\r\n  margin-top: 20px;\r\n  font-weight: 300;\r\n  letter-spacing: 2px;\r\n  max-height: 0;\r\n  opacity: 0;\r\n  transition: 0.3s linear;\r\n}\r\n\r\n.card a {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.card:hover p {\r\n  max-height: 40px;\r\n  opacity: 1;\r\n}\r\n\r\n.about {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.about-image,\r\n.about-text {\r\n  width: 50%;\r\n  height: auto;\r\n}\r\n\r\n.about-image img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.text-container {\r\n  width: 72%;\r\n  margin: 5vmax auto;\r\n  font-family: \"JosefinSans-Regular\";\r\n}\r\n\r\n.text-container h4 {\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  color: white;\r\n  margin-bottom: 13px;\r\n}\r\n\r\n.text-container span {\r\n  color: var(--main-color)\r\n}\r\n\r\n.text-container p {\r\n  font-size: 18px;\r\n  color: rgb(182, 178, 178);\r\n}\r\n\r\n@media screen and (max-width:1200px) {\r\n  .about-image,\r\n  .about-text {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width:850px) {\r\n  .text-container {\r\n    width: 85%;\r\n  }\r\n  .contact-info {\r\n    flex-direction: column;\r\n  }\r\n  .card {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  .mailCard {\r\n    margin-top: 10px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRhY3RzL2hvbWUtY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7O0FBRWI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7O0lBRUUsV0FBVztFQUNiO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250YWN0cy9ob21lLWNvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdHNBbmRBYm91dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jb250YWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDExLCA5LCA5KTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMzMlIC0gMjBweCk7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuY2FyZC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNik7XHJcbn1cclxuXHJcbi5jYXJkIHAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLmNhcmQgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgcCB7XHJcbiAgbWF4LWhlaWdodDogNDBweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmFib3V0LWltYWdlLFxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hYm91dC1pbWFnZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRleHQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNzIlO1xyXG4gIG1hcmdpbjogNXZtYXggYXV0bztcclxuICBmb250LWZhbWlseTogXCJKb3NlZmluU2Fucy1SZWd1bGFyXCI7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRhaW5lciBoNCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRhaW5lciBzcGFuIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcilcclxufVxyXG5cclxuLnRleHQtY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiKDE4MiwgMTc4LCAxNzgpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xyXG4gIC5hYm91dC1pbWFnZSxcclxuICAuYWJvdXQtdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg1MHB4KSB7XHJcbiAgLnRleHQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG4gIC5jb250YWN0LWluZm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAubWFpbENhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/home/home-contacts/home-contacts.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/home-contacts/home-contacts.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContactsComponent", function() { return HomeContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let HomeContactsComponent = class HomeContactsComponent {
    constructor() {
        this.faPhoneAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhoneAlt"];
        this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkerAlt"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"];
        this.faPizzaSlice = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPizzaSlice"];
    }
    ngOnInit() {
    }
};
HomeContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-contacts/home-contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-contacts.component.css */ "./src/app/pages/home/home-contacts/home-contacts.component.css")).default]
    })
], HomeContactsComponent);



/***/ }),

/***/ "./src/app/pages/home/home-feedback/home-feedback.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/home-feedback/home-feedback.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feedback-fl {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.feedback-image,\r\n.social {\r\n  width: 50%;\r\n}\r\n\r\n.feedback-image img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n@media screen and (max-width:850px) {\r\n  .feedback-image,\r\n  .social {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.social {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: \"JosefinSans-Regular\", sans-serif;\r\n  padding: 20px;\r\n}\r\n\r\n.social h3 {\r\n  color: white;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.share-button {\r\n  width: 200px;\r\n  height: 70px;\r\n  background: #dfe6e9;\r\n  border-radius: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  position: relative;\r\n  cursor: pointer;\r\n  transition: .1s linear;\r\n}\r\n\r\n.share-button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.share-button span {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #6a7072;\r\n  color: #f1f1f1;\r\n  text-align: center;\r\n  line-height: 70px;\r\n  z-index: 1;\r\n  transition: .4s linear;\r\n  border-radius: 40px;\r\n}\r\n\r\n.share-button:hover span {\r\n  transform: translateX(-100%);\r\n  transition-delay: .3s;\r\n}\r\n\r\n.share-button a {\r\n  flex: 1;\r\n  font-size: 26px;\r\n  color: #2d3436;\r\n  text-align: center;\r\n  transform: translateX(-100%);\r\n  opacity: 0;\r\n  transition: 0.3s linear;\r\n}\r\n\r\n.share-button:hover a {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n\r\n.share-button a i {\r\n  transition: 0.2s linear;\r\n}\r\n\r\n.share-button a i:hover {\r\n  color: var(--main-color)\r\n}\r\n\r\n.share-button a:nth-of-type(1) {\r\n  transition-delay: 1s;\r\n}\r\n\r\n.share-button a:nth-of-type(2) {\r\n  transition-delay: 0.8s;\r\n}\r\n\r\n.share-button a:nth-of-type(3) {\r\n  transition-delay: 0.6s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWZlZWRiYWNrL2hvbWUtZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBR0E7RUFDRTs7SUFFRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtZmVlZGJhY2svaG9tZS1mZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRiYWNrLWZsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZlZWRiYWNrLWltYWdlLFxyXG4uc29jaWFsIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZmVlZGJhY2staW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg1MHB4KSB7XHJcbiAgLmZlZWRiYWNrLWltYWdlLFxyXG4gIC5zb2NpYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc29jaWFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJKb3NlZmluU2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnNvY2lhbCBoMyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b24ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZDogI2RmZTZlOTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjFzIGxpbmVhcjtcclxufVxyXG5cclxuLnNoYXJlLWJ1dHRvbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uc2hhcmUtYnV0dG9uIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzZhNzA3MjtcclxuICBjb2xvcjogI2YxZjFmMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiAuNHMgbGluZWFyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b246aG92ZXIgc3BhbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b24gYSB7XHJcbiAgZmxleDogMTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgY29sb3I6ICMyZDM0MzY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLnNoYXJlLWJ1dHRvbjpob3ZlciBhIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLnNoYXJlLWJ1dHRvbiBhIGkge1xyXG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG59XHJcblxyXG4uc2hhcmUtYnV0dG9uIGEgaTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpXHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b24gYTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b24gYTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcclxufVxyXG5cclxuLnNoYXJlLWJ1dHRvbiBhOm50aC1vZi10eXBlKDMpIHtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home-feedback/home-feedback.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/home-feedback/home-feedback.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFeedbackComponent", function() { return HomeFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeFeedbackComponent = class HomeFeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-feedback/home-feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-feedback.component.css */ "./src/app/pages/home/home-feedback/home-feedback.component.css")).default]
    })
], HomeFeedbackComponent);



/***/ }),

/***/ "./src/app/pages/home/home-guests/home-guests.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/home/home-guests/home-guests.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  margin: 50px 0;\r\n}\r\n\r\n.guestText {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.guestText h1 {\r\n  color: var(--main-color);\r\n  font-family: \"NothingYouCouldDo\", sans-serif;\r\n}\r\n\r\n.sliderContainer {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  background: url(\"https://firebasestorage.googleapis.com/v0/b/myproject-c5d44.appspot.com/o/Pizza%20backdround%2Fservice-bg2.jpg?alt=media&token=7c4292e5-a9cc-4a7a-b08b-d4ca79b218a4\") no-repeat center center fixed;\r\n  background-size: cover;\r\n  font-family: \"Poppins-Regular\", sans-serif;\r\n}\r\n\r\n.sliderCard {\r\n  position: relative;\r\n  background: var(--main-color);\r\n  width: 320px;\r\n  height: 400px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.sliderCard .content {\r\n  width: 320px;\r\n  padding: 30px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\n.content .textBlockquote {\r\n  max-height: 72px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.sliderCard .content a {\r\n  display: inline-block;\r\n  margin: 10px 0 0;\r\n  padding: 7px 10px;\r\n  text-decoration: none;\r\n  border: 2px solid #262626;\r\n  color: #262626;\r\n  font-weight: 600;\r\n  position: absolute;\r\n  bottom: 15px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.sliderCard .content h5 {\r\n  font-family: \"JosefinSans-Regular\", sans-serif;\r\n}\r\n\r\n.sliderCard .content blockquote {\r\n  font-family: \"Poppins-Italic\", sans-serif;\r\n}\r\n\r\n.sliderCard .sliderPhoto {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 200px;\r\n  background: #000;\r\n}\r\n\r\n.sliderCard .sliderPhoto img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.swiper-slide {\r\n  width: 320px;\r\n}\r\n\r\n#scroll::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  border-radius: 10px;\r\n  background-color: #dfa53c;\r\n}\r\n\r\n#scroll::-webkit-scrollbar {\r\n  width: 5px;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n#scroll::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n  background: #D62929 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWd1ZXN0cy9ob21lLWd1ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb05BQW9OO0VBQ3BOLHNCQUFzQjtFQUN0QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWd1ZXN0cy9ob21lLWd1ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5ndWVzdFRleHQge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3Vlc3RUZXh0IGgxIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm90aGluZ1lvdUNvdWxkRG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNsaWRlckNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXlwcm9qZWN0LWM1ZDQ0LmFwcHNwb3QuY29tL28vUGl6emElMjBiYWNrZHJvdW5kJTJGc2VydmljZS1iZzIuanBnP2FsdD1tZWRpYSZ0b2tlbj03YzQyOTJlNS1hOWNjLTRhN2EtYjA4Yi1kNGNhNzliMjE4YTRcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNsaWRlckNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNsaWRlckNhcmQgLmNvbnRlbnQge1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCAudGV4dEJsb2NrcXVvdGUge1xyXG4gIG1heC1oZWlnaHQ6IDcycHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNsaWRlckNhcmQgLmNvbnRlbnQgYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjI2MjY7XHJcbiAgY29sb3I6ICMyNjI2MjY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5zbGlkZXJDYXJkIC5jb250ZW50IGg1IHtcclxuICBmb250LWZhbWlseTogXCJKb3NlZmluU2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zbGlkZXJDYXJkIC5jb250ZW50IGJsb2NrcXVvdGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtSXRhbGljXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uc2xpZGVyQ2FyZCAuc2xpZGVyUGhvdG8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi5zbGlkZXJDYXJkIC5zbGlkZXJQaG90byBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG5cclxuI3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmYTUzYztcclxufVxyXG5cclxuI3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuI3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICBiYWNrZ3JvdW5kOiAjRDYyOTI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/home/home-guests/home-guests.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/home/home-guests/home-guests.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeGuestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuestsComponent", function() { return HomeGuestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_guest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/guest.service */ "./src/app/shared/services/guest.service.ts");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");




// declare const Swiper: any;
let HomeGuestsComponent = class HomeGuestsComponent {
    constructor(guestService) {
        this.guestService = guestService;
        this.guests = [];
    }
    ngOnInit() {
        this.guestService.getData().subscribe(actionArray => {
            this.guests = actionArray.map(guests => {
                return Object.assign({ id: guests.payload.doc.id }, guests.payload.doc.data());
            });
        });
        this.guestService.getType().subscribe(actionArray => {
            this.mainType = actionArray.map(type => {
                return Object.assign({ id: type.payload.doc.id }, type.payload.doc.data());
            });
            this.mainTypeHTML = this.mainType[0].name;
        });
    }
    ;
    ngAfterViewInit() {
        this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            updateOnWindowResize: true,
            initialSlide: 2,
            observer: true,
            observeParents: true,
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    ;
};
HomeGuestsComponent.ctorParameters = () => [
    { type: src_app_shared_services_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"] }
];
HomeGuestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-guests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-guests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-guests/home-guests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-guests.component.css */ "./src/app/pages/home/home-guests/home-guests.component.css")).default]
    })
], HomeGuestsComponent);



/***/ }),

/***/ "./src/app/pages/home/home-main/home-main.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/home-main/home-main.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".intro {\r\n  height: 90vh;\r\n  overflow: hidden;\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 3;\r\n  margin-top: 10vh;\r\n  /* background: url(\"https://firebasestorage.googleapis.com/v0/b/myproject-c5d44.appspot.com/o/Pizza%20backdround%2FDesert.jpg?alt=media&token=68777d1f-9e4e-4b4f-a0f9-29858a3fdfe8\"); */\r\n}\r\n\r\n.video {\r\n  position: relative;\r\n}\r\n\r\n.video__media {\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.main {\r\n  width: 100%;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 12%;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n\r\n.main-text {\r\n  width: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n  color: white;\r\n  z-index: 10;\r\n}\r\n\r\n.main-text p {\r\n  font-family: 'NothingYouCouldDo', sans-serif;\r\n  font-size: 40px;\r\n  color: var(--main-color);\r\n}\r\n\r\n.main-text h1 {\r\n  font-family: \"JosefinSans-Bold\";\r\n  font-size: 50px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  vertical-align: bottom;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  border: 1px solid #c80000;\r\n  padding: 13px 41px;\r\n  color: #fefefe;\r\n  background: #c80000;\r\n  border-radius: 30px;\r\n  font-weight: 700;\r\n  transition: .3s all;\r\n}\r\n\r\nbutton:hover {\r\n  background: none;\r\n  color: white;\r\n}\r\n\r\n@media screen and (max-width:768px) {\r\n  button {\r\n    padding: 12px 25px;\r\n  }\r\n\r\n  .main-text {\r\n    width: 85%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width:375px) {\r\n  .main-text {\r\n    width: 70%;\r\n  }\r\n\r\n  .main {\r\n    margin-top: 7%;\r\n  }\r\n\r\n  .main-text h1 {\r\n    font-size: 35px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width:1920px) {\r\n  .video__media {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUxBQXVMO0FBQ3pMOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1tYWluL2hvbWUtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJvIHtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMztcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIC8qIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXlwcm9qZWN0LWM1ZDQ0LmFwcHNwb3QuY29tL28vUGl6emElMjBiYWNrZHJvdW5kJTJGRGVzZXJ0LmpwZz9hbHQ9bWVkaWEmdG9rZW49Njg3NzdkMWYtOWU0ZS00YjRmLWEwZjktMjk4NThhM2ZkZmU4XCIpOyAqL1xyXG59XHJcblxyXG4udmlkZW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnZpZGVvX19tZWRpYSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogMTIlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm1haW4tdGV4dCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5tYWluLXRleHQgcCB7XHJcbiAgZm9udC1mYW1pbHk6ICdOb3RoaW5nWW91Q291bGREbycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG5cclxuLm1haW4tdGV4dCBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpblNhbnMtQm9sZFwiO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4MDAwMDtcclxuICBwYWRkaW5nOiAxM3B4IDQxcHg7XHJcbiAgY29sb3I6ICNmZWZlZmU7XHJcbiAgYmFja2dyb3VuZDogI2M4MDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbi10ZXh0IHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkge1xyXG4gIC5tYWluLXRleHQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcblxyXG4gIC5tYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE5MjBweCkge1xyXG4gIC52aWRlb19fbWVkaWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home-main/home-main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/home/home-main/home-main.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMainComponent", function() { return HomeMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import * as AOS from 'aos'
let HomeMainComponent = class HomeMainComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-main/home-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-main.component.css */ "./src/app/pages/home/home-main/home-main.component.css")).default]
    })
], HomeMainComponent);



/***/ }),

/***/ "./src/app/pages/home/home-services/home-services.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/home-services/home-services.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins-Regular\", sans-serif;\r\n}\r\n\r\n.services {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: url(\"https://firebasestorage.googleapis.com/v0/b/myproject-c5d44.appspot.com/o/Pizza%20backdround%2Fservice-bg.gif?alt=media&token=3506d784-014f-4c20-abef-c213adb01f13\") no-repeat center center fixed;\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  width: 1000px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  margin: 20px;\r\n}\r\n\r\n.container .card {\r\n  position: relative;\r\n  height: 250px;\r\n  background: rgba(243, 180, 102, 0.527);\r\n  display: flex;\r\n  width: 45%;\r\n  margin: 30px 0;\r\n}\r\n\r\n.container .card .imgBx {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgb(243, 180, 102);\r\n  z-index: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  transition: .5s ease-in-out;\r\n  outline: 7px double #905527;\r\n\r\n}\r\n\r\n.container .card:hover .imgBx {\r\n  width: 150px;\r\n  height: 150px;\r\n  left: -75px;\r\n  top: calc(50% - 75px);\r\n  transition: .4s ease-in-out;\r\n}\r\n\r\n.container .card .imgBx:before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 240%;\r\n  color: rgb(237, 154, 77);\r\n  font-weight: 700;\r\n  font-family: \"JosefinSans-Bold\";\r\n  transition: .3s ease-in-out;\r\n  -webkit-filter: drop-shadow(2px 4px 6px black);\r\n          filter: drop-shadow(2px 4px 6px black);\r\n}\r\n\r\n.container .card:hover .imgBx:before {\r\n  display: none;\r\n}\r\n\r\n.container .card .imgBx img {\r\n  max-width: 100px;\r\n  transition: .4s ease-in-out;\r\n  -webkit-filter: drop-shadow(2px 0px 1px black);\r\n          filter: drop-shadow(2px 0px 1px black);\r\n}\r\n\r\n.container .card:hover .imgBx img {\r\n  max-width: 75px;\r\n}\r\n\r\n.container .card .content {\r\n  position: absolute;\r\n  right: 0;\r\n  width: calc(100% - 75px);\r\n  height: 100%;\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container .card .content h3 {\r\n  margin-bottom: 5px;\r\n  font-size: 24px;\r\n}\r\n\r\n.container .card .content a {\r\n  display: inline-block;\r\n  margin-top: 10px;\r\n  padding: 5px 10px;\r\n  background: #333;\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .container {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .container .card {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .container .card {\r\n    max-width: 300px;\r\n    flex-direction: column;\r\n    height: auto;\r\n  }\r\n\r\n  .container .card .imgBx {\r\n    position: relative;\r\n  }\r\n\r\n  .container .card .imgBx,\r\n  .container .card:hover .imgBx {\r\n    width: 100%;\r\n    height: 200px;\r\n    left: 0;\r\n  }\r\n\r\n  .container .card .imgBx img,\r\n  .container .card:hover .imgBx img {\r\n    max-width: 100px;\r\n  }\r\n\r\n  .container .card .content {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n\r\n  .container .card .imgBx:before {\r\n    display: none;\r\n  }\r\n\r\n  .container .card:hover .imgBx:before {\r\n    display: none;\r\n  }\r\n\r\n  .container .card .imgBx {\r\n    outline: 3px double #905527;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLXNlcnZpY2VzL2hvbWUtc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtTkFBbU47RUFDbk4sc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsMkJBQTJCOztBQUU3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsT0FBTztFQUNUOztFQUVBOztJQUVFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1zZXJ2aWNlcy9ob21lLXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2VydmljZXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL215cHJvamVjdC1jNWQ0NC5hcHBzcG90LmNvbS9vL1BpenphJTIwYmFja2Ryb3VuZCUyRnNlcnZpY2UtYmcuZ2lmP2FsdD1tZWRpYSZ0b2tlbj0zNTA2ZDc4NC0wMTRmLTRjMjAtYWJlZi1jMjEzYWRiMDFmMTNcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE4MCwgMTAyLCAwLjUyNyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNDUlO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkIC5pbWdCeCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAxODAsIDEwMik7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgb3V0bGluZTogN3B4IGRvdWJsZSAjOTA1NTI3O1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZDpob3ZlciAuaW1nQngge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGxlZnQ6IC03NXB4O1xyXG4gIHRvcDogY2FsYyg1MCUgLSA3NXB4KTtcclxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmltZ0J4OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNDAlO1xyXG4gIGNvbG9yOiByZ2IoMjM3LCAxNTQsIDc3KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW5TYW5zLUJvbGRcIjtcclxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQ6aG92ZXIgLmltZ0J4OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmltZ0J4IGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMHB4IDFweCBibGFjayk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQ6aG92ZXIgLmltZ0J4IGltZyB7XHJcbiAgbWF4LXdpZHRoOiA3NXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCAuY29udGVudCBoMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCAuY29udGVudCBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIC5jYXJkIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciAuY2FyZCAuaW1nQngge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciAuY2FyZCAuaW1nQngsXHJcbiAgLmNvbnRhaW5lciAuY2FyZDpob3ZlciAuaW1nQngge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgLmNhcmQgLmltZ0J4IGltZyxcclxuICAuY29udGFpbmVyIC5jYXJkOmhvdmVyIC5pbWdCeCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgLmNhcmQgLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIC5jYXJkIC5pbWdCeDpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgLmNhcmQ6aG92ZXIgLmltZ0J4OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciAuY2FyZCAuaW1nQngge1xyXG4gICAgb3V0bGluZTogM3B4IGRvdWJsZSAjOTA1NTI3O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home-services/home-services.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/home-services/home-services.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServicesComponent", function() { return HomeServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let HomeServicesComponent = class HomeServicesComponent {
    constructor() {
        this.faHamburger = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHamburger"];
        this.faCookie = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCookie"];
        this.faBreadSlice = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBreadSlice"];
        this.check = false;
    }
    ngOnInit() {
    }
};
HomeServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-services/home-services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-services.component.css */ "./src/app/pages/home/home-services/home-services.component.css")).default]
    })
], HomeServicesComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/menu/menu.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\r\n  margin-top: 10vh;\r\n}\r\n\r\n.menu-text {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.categories button {\r\n  font-family: \"Poppins-Regular\", serif;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  background: none;\r\n  color: var(--main-color);\r\n  border: 1px solid var(--main-color);\r\n  outline: none;\r\n  transition: .6s all;\r\n  cursor: pointer;\r\n  border-radius: 3px;\r\n  margin: 10px;\r\n}\r\n\r\n.categories button:hover,\r\n.categories .active {\r\n  background: var(--main-color);\r\n  color: black;\r\n}\r\n\r\n.categories {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 0 auto;\r\n  overflow-y: auto;\r\n}\r\n\r\n.products {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  background: url(\"https://firebasestorage.googleapis.com/v0/b/myproject-c5d44.appspot.com/o/Pizza%20backdround%2Fbg.jpg?alt=media&token=d7edead6-eadb-49e1-b823-4aa243013cbc\") no-repeat center center;\r\n}\r\n\r\n.card {\r\n  text-align: center;\r\n  font-family: \"Poppins-Regular\", sans-serif;\r\n  margin: 10px;\r\n  background: var(--main-color);\r\n  border-radius: 10px;\r\n  transition: .4s all;\r\n  border: none;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 4)\r\n}\r\n\r\n.card p {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.card img {\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.description {\r\n  min-height: 60px;\r\n  font-family: \"Poppins-Italic\", sans-serif;\r\n}\r\n\r\n.description p {\r\n  font-family: \"Poppins-Italic\", sans-serif;\r\n}\r\n\r\n.countProduct input {\r\n  width: 35px;\r\n  height: 35px;\r\n  background: none;\r\n  outline: none;\r\n  border: 1px solid #d49119;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n  margin: 0 5px;\r\n}\r\n\r\n.countProduct button {\r\n  border: none;\r\n  font-weight: bold;\r\n  outline: none;\r\n  background: none;\r\n  color: red;\r\n  transform: scale(1.8);\r\n  transition: .3s all;\r\n}\r\n\r\n.countProduct button:hover {\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n.order {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.order {\r\n  font-size: 20px;\r\n}\r\n\r\n.order .price {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YscU1BQXFNO0FBQ3ZNOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG59XHJcblxyXG4ubWVudS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIGJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCIsIHNlcmlmO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogLjZzIGFsbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgYnV0dG9uOmhvdmVyLFxyXG4uY2F0ZWdvcmllcyAuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcmllcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnByb2R1Y3RzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL215cHJvamVjdC1jNWQ0NC5hcHBzcG90LmNvbS9vL1BpenphJTIwYmFja2Ryb3VuZCUyRmJnLmpwZz9hbHQ9bWVkaWEmdG9rZW49ZDdlZGVhZDYtZWFkYi00OWUxLWI4MjMtNGFhMjQzMDEzY2JjXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IC40cyBhbGw7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCA0KVxyXG59XHJcblxyXG4uY2FyZCBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zLUl0YWxpY1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gcCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1JdGFsaWNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvdW50UHJvZHVjdCBpbnB1dCB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDQ5MTE5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxuLmNvdW50UHJvZHVjdCBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcclxufVxyXG5cclxuLmNvdW50UHJvZHVjdCBidXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vcmRlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ub3JkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm9yZGVyIC5wcmljZSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_classes_product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/classes/product.model */ "./src/app/shared/classes/product.model.ts");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var src_app_shared_services_paginator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/paginator.service */ "./src/app/shared/services/paginator.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");











let MenuComponent = class MenuComponent {
    constructor(categoryService, productService, route, localStorageService, paginatorService, routeLink, dialog, modalService, notificationsService) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.route = route;
        this.localStorageService = localStorageService;
        this.paginatorService = paginatorService;
        this.routeLink = routeLink;
        this.dialog = dialog;
        this.modalService = modalService;
        this.notificationsService = notificationsService;
        this.categories = [];
        this.products = [];
        this.filterProducts = [];
        this.filterCategoryName = 'pizza';
        this.countProductsNumber = 1;
        this.page = 1;
        this.checkPaginator = false;
        this.productPerPage = 9;
        this.isActiveCheckBox = false;
        this.options = {
            position: ["right", "top"],
            timeOut: 2000,
            lastOnBottom: true,
            clickToClose: true
        };
    }
    ngOnInit() {
        this.categoryService.getData().subscribe(actionArray => {
            this.categories = actionArray.map(category => {
                return Object.assign({ id: category.payload.doc.id }, category.payload.doc.data());
            });
        });
        this.productService.getData().subscribe(actionArray => {
            this.products = actionArray.map(product => {
                return Object.assign({ id: product.payload.doc.id }, product.payload.doc.data());
            });
            this.selectCategory('');
            this.paginatorService.currentPage.subscribe(page => this.page = page);
            this.isActiveModal = this.checkWindowShow();
        });
    }
    //Роблю кнопку активною при кліку
    isActive(item) {
        return this.selected === item;
    }
    ;
    selectCategory(name) {
        this.categoryName = name || this.route.snapshot.paramMap.get('category');
        this.filterCategory(this.categoryName);
        this.selected = name || this.route.snapshot.paramMap.get('category');
    }
    ;
    filterCategory(name) {
        this.filterCategoryName = name;
        this.filterProducts = this.products.filter(val => val.category === this.filterCategoryName.trim());
        this.filterProducts.length > this.productPerPage ? this.checkPaginator = true : this.checkPaginator = false;
        this.paginatorService.changePage(1);
    }
    ;
    countProductsInc(product) {
        product.count++;
    }
    ;
    countProductsDec(product) {
        if (product.count > 1) {
            product.count--;
        }
    }
    ;
    //Перевірка введення користувачем кількості продукту
    checkCountProduct(event, product) {
        const regExp = /^[1-9]{1}([0-9]{1})?([0-9]{1})?$/;
        const check = regExp.test(event.target.value);
        if (check) {
            product.count = Number(event.target.value);
        }
        else {
            event.target.value = 1;
            product.count = Number(event.target.value);
        }
    }
    ;
    orderInLocalST(product, template) {
        const newOrder = new src_app_shared_classes_product_model__WEBPACK_IMPORTED_MODULE_5__["Product"](product.category, product.name, product.description, product.price, product.count, product.image, product.size, product.weight, product.id);
        this.localStorageService.addProductLocalStorage(newOrder);
        //Якщо користувач хоче/не хоче бачити мадолку про добавлення товару в кошик
        if (!this.isActiveModal) {
            this.modalRef = this.modalService.show(template);
        }
        else {
            this.notificationsService.successNotification('Product successfully ordered');
        }
    }
    ;
    scrollUp() {
        window.scroll(0, 0);
    }
    ;
    closeWindow() {
        this.modalRef.hide();
        if (this.isActiveCheckBox && !this.checkWindowShow()) {
            localStorage.setItem('ModalWindowHide', JSON.stringify([this.isActiveCheckBox]));
            this.isActiveModal = this.checkWindowShow();
        }
    }
    ;
    checkWindowShow() {
        return this.localStorageService.getDataLocalStorage('ModalWindowHide').length > 0 ? true : false;
    }
    ;
};
MenuComponent.ctorParameters = () => [
    { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
    { type: src_app_shared_services_paginator_service__WEBPACK_IMPORTED_MODULE_7__["PaginatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] },
    { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/pages/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/pages/product-details/product-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".productDetails {\r\n  margin-top: 15vh;\r\n  min-height: 90vh;\r\n  font-family: 'Poppins-Regular', sans-serif;\r\n}\r\n\r\n.card {\r\n  margin: 0 auto;\r\n  background: var(--main-color);\r\n}\r\n\r\n.productImage img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n  padding: 5px 0;\r\n}\r\n\r\n.card .price {\r\n  color: red;\r\n  font-size: 23px;\r\n}\r\n\r\n.card .name {\r\n  font-size: 28px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.card .description {\r\n  font-family: 'Poppins-Italic', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUdBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3REZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuXHJcbi5jYXJkIC5wcmljZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5uYW1lIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZCAuZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1JdGFsaWMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/product-details/product-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_product_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product-details.service */ "./src/app/shared/services/product-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(productService, route, location) {
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.getProduct();
    }
    ngOnInit() {
    }
    getProduct() {
        this.productName = this.route.snapshot.paramMap.get('name');
        this.productCategory = this.route.snapshot.paramMap.get('category');
        this.productService.getData().subscribe(actionArray => {
            this.products = actionArray.map(products => {
                return Object.assign({ id: products.payload.doc.id }, products.payload.doc.data());
            });
            this.oneProduct = this.products.filter(product => product.category === this.productCategory && product.name === this.productName);
        });
    }
    ;
    goBack() {
        this.location.back();
    }
    ;
};
ProductDetailsComponent.ctorParameters = () => [
    { type: src_app_shared_services_product_details_service__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-details/product-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.component.css */ "./src/app/pages/product-details/product-details.component.css")).default]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/preloader-config.ts":
/*!*************************************!*\
  !*** ./src/app/preloader-config.ts ***!
  \*************************************/
/*! exports provided: ngxUiLoaderConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxUiLoaderConfig", function() { return ngxUiLoaderConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");


const ngxUiLoaderConfig = {
    fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["SPINNER"].squareJellyBox,
    fgsColor: '#fac554',
    pbThickness: 3,
    overlayColor: '#000',
    pbColor: '#fac554',
};


/***/ }),

/***/ "./src/app/shared/classes/category.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/classes/category.model.ts ***!
  \**************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Category {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/classes/guest.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/classes/guest.model.ts ***!
  \***********************************************/
/*! exports provided: Guest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guest", function() { return Guest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Guest {
    constructor(name, photo, quote, details, id) {
        this.name = name;
        this.photo = photo;
        this.quote = quote;
        this.details = details;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/classes/order.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/classes/order.model.ts ***!
  \***********************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Order {
    constructor(name, adress, number, date, product, isNew, id) {
        this.name = name;
        this.adress = adress;
        this.number = number;
        this.date = date;
        this.product = product;
        this.isNew = isNew;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/classes/post.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/post.model.ts ***!
  \**********************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Post {
    constructor(text, writtenBy, date, id) {
        this.text = text;
        this.writtenBy = writtenBy;
        this.date = date;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/classes/product.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/classes/product.model.ts ***!
  \*************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Product {
    constructor(category, name, description, price, count, image, size, weight, id) {
        this.category = category;
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = count;
        this.image = image;
        this.size = size;
        this.weight = weight;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/classes/type.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/type.model.ts ***!
  \**********************************************/
/*! exports provided: Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Type {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/classes/user.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/user.model.ts ***!
  \**********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(username, email, password, blacklist, id) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.blacklist = blacklist;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/pipes/category.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/category.pipe.ts ***!
  \***********************************************/
/*! exports provided: CategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPipe", function() { return CategoryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryPipe = class CategoryPipe {
    transform(arr, searchCategory) {
        return arr.filter(products => products.category === searchCategory);
    }
};
CategoryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'category'
    })
], CategoryPipe);



/***/ }),

/***/ "./src/app/shared/services/archive.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/archive.service.ts ***!
  \****************************************************/
/*! exports provided: ArchiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveService", function() { return ArchiveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let ArchiveService = class ArchiveService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('archive').snapshotChanges();
    }
    ;
    deleteArray(orders) {
        orders.forEach((value) => {
            this.firestore.doc('archive/' + value.id).delete();
        });
    }
    ;
    setData(order) {
        this.firestore.collection('archive').add(JSON.parse(JSON.stringify(order)));
    }
    ;
};
ArchiveService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ArchiveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArchiveService);



/***/ }),

/***/ "./src/app/shared/services/blacklist.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/blacklist.service.ts ***!
  \******************************************************/
/*! exports provided: BlacklistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlacklistService", function() { return BlacklistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let BlacklistService = class BlacklistService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('blacklist').snapshotChanges();
    }
    ;
    setData(editedUser) {
        this.firestore.collection('blacklist').add(JSON.parse(JSON.stringify(editedUser)));
    }
    ;
    updateData(editedUser, id) {
        this.firestore.doc('users/' + id).update(JSON.parse(JSON.stringify(editedUser)));
    }
    ;
    deleteData(user) {
        this.firestore.doc('blacklist/' + user.id).delete();
    }
    ;
};
BlacklistService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
BlacklistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlacklistService);



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let CategoryService = class CategoryService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('categories').snapshotChanges();
    }
    ;
    deleteData(cloud) {
        this.firestore.doc('categories/' + cloud.id).delete();
    }
    ;
    deleteArrayOfProducts(products) {
        products.forEach((value) => {
            this.firestore.doc('products/' + value.id).delete();
        });
    }
    ;
    setData(newCategory) {
        this.firestore.collection('categories').add(JSON.parse(JSON.stringify(newCategory)));
    }
    ;
};
CategoryService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/shared/services/guest.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/guest.service.ts ***!
  \**************************************************/
/*! exports provided: GuestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestService", function() { return GuestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let GuestService = class GuestService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('guests').snapshotChanges();
    }
    ;
    deleteData(cloud) {
        this.firestore.doc('guests/' + cloud.id).delete();
    }
    ;
    updateData(newGuest, id) {
        this.firestore.doc('guests/' + id).update(JSON.parse(JSON.stringify(newGuest)));
    }
    ;
    setData(newGuest) {
        this.firestore.collection('guests').add(JSON.parse(JSON.stringify(newGuest)));
    }
    ;
    getType() {
        return this.firestore.collection('types').snapshotChanges();
    }
    ;
    updateType(newType, id) {
        this.firestore.doc('types/' + id).update(JSON.parse(JSON.stringify(newType)));
    }
    ;
};
GuestService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
GuestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GuestService);



/***/ }),

/***/ "./src/app/shared/services/local-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LocalStorageService = class LocalStorageService {
    constructor(route) {
        this.route = route;
        this.ordersStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    addProductLocalStorage(newProduct) {
        let products = this.getDataLocalStorage('Products');
        if (products.length > 0) {
            if (products.find(elem => elem.id === newProduct.id)) {
                const index = products.findIndex(elem => elem.id === newProduct.id);
                products[index].count += newProduct.count;
            }
            else {
                products.push(newProduct);
            }
        }
        else {
            products = [newProduct];
        }
        this.setProductLocalStorage(products);
    }
    getDataLocalStorage(subject) {
        if (localStorage.length > 0 && localStorage.getItem(subject)) {
            return JSON.parse(localStorage.getItem(subject));
        }
        else {
            return [];
        }
    }
    ;
    setProductLocalStorage(item) {
        localStorage.setItem('Products', JSON.stringify(item));
        this.getOrderCount(item);
    }
    ;
    getOrderCount(newProd) {
        this.ordersStream.next(newProd);
    }
    ;
    setUserLocalStorage(item) {
        localStorage.setItem('User', JSON.stringify([item]));
    }
    ;
};
LocalStorageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");



let NotificationService = class NotificationService {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    successNotification(message) {
        this.notificationsService.success(message);
    }
    ;
    warningNotification(message) {
        this.notificationsService.warn(message);
    }
    ;
    errorNotification(message) {
        this.notificationsService.error(message);
    }
    ;
    infoNotification(message) {
        this.notificationsService.info(message);
    }
    ;
};
NotificationService.ctorParameters = () => [
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "./src/app/shared/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let OrderService = class OrderService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('orders').snapshotChanges();
    }
    ;
    deleteData(cloud) {
        this.firestore.doc('orders/' + cloud.id).delete();
    }
    ;
    updateData(newOrder, id) {
        this.firestore.doc('orders/' + id).update(JSON.parse(JSON.stringify(newOrder)));
    }
    ;
    setData(newOrder) {
        this.firestore.collection('orders').add(JSON.parse(JSON.stringify(newOrder)));
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/shared/services/paginator.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/paginator.service.ts ***!
  \******************************************************/
/*! exports provided: PaginatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorService", function() { return PaginatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);



let PaginatorService = class PaginatorService {
    constructor() {
        this.pageStream = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this.currentPage = this.pageStream.asObservable();
    }
    changePage(page) {
        this.pageStream.next(page);
    }
};
PaginatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaginatorService);



/***/ }),

/***/ "./src/app/shared/services/post.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/post.service.ts ***!
  \*************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let PostService = class PostService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('posts').snapshotChanges();
    }
    ;
    deleteData(post) {
        this.firestore.doc('posts/' + post.id).delete();
    }
    ;
    updateData(newPost, id) {
        this.firestore.doc('posts/' + id).update(JSON.parse(JSON.stringify(newPost)));
    }
    ;
    setData(newPost) {
        this.firestore.collection('posts').add(JSON.parse(JSON.stringify(newPost)));
    }
    ;
};
PostService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/shared/services/product-details.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/product-details.service.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsService", function() { return ProductDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let ProductDetailsService = class ProductDetailsService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('products/').snapshotChanges();
    }
    ;
};
ProductDetailsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ProductDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductDetailsService);



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let ProductService = class ProductService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('products').snapshotChanges();
    }
    ;
    deleteData(product) {
        this.firestore.doc('products/' + product.id).delete();
    }
    ;
    updateData(newProduct, id) {
        this.firestore.doc('products/' + id).update(JSON.parse(JSON.stringify(newProduct)));
    }
    ;
    setData(newProduct) {
        this.firestore.collection('products').add(JSON.parse(JSON.stringify(newProduct)));
    }
    ;
};
ProductService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let UserService = class UserService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getData() {
        return this.firestore.collection('users').snapshotChanges();
    }
    ;
    setData(newUser) {
        const user = JSON.parse(JSON.stringify(newUser));
        this.firestore.collection('users').add(user);
    }
    ;
    updateData(editedUser, id, userPosts) {
        this.firestore.doc('users/' + id).update(JSON.parse(JSON.stringify(editedUser)));
        if (userPosts) {
            userPosts.forEach((value) => {
                this.firestore.doc('posts/' + value.id).delete();
            });
        }
    }
    ;
    setItemLocalStorage(item) {
        localStorage.setItem('User', JSON.stringify([item]));
    }
    ;
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC7Q23m2VcMaukgt3Ckv1W48ZGAF5c0Bz0",
        authDomain: "myproject-c5d44.firebaseapp.com",
        databaseURL: "https://myproject-c5d44.firebaseio.com",
        projectId: "myproject-c5d44",
        storageBucket: "myproject-c5d44.appspot.com",
        messagingSenderId: "1038535925038",
        appId: "1:1038535925038:web:5726c46a5243ac3874eebf",
        measurementId: "G-5DJQ89LC3N"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Logos\pizza\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map