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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefugeController = void 0;
const common_1 = require("@nestjs/common");
const refuge_service_1 = require("./refuge.service");
let RefugeController = class RefugeController {
    constructor(refugeService) {
        this.refugeService = refugeService;
    }
    getAllRefuge() {
        return this.refugeService.getAllRefuge();
    }
    getRefugeById(id) {
        return this.refugeService.getRefugeById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RefugeController.prototype, "getAllRefuge", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RefugeController.prototype, "getRefugeById", null);
RefugeController = __decorate([
    (0, common_1.Controller)('api/refuge'),
    __metadata("design:paramtypes", [refuge_service_1.RefugeService])
], RefugeController);
exports.RefugeController = RefugeController;
//# sourceMappingURL=refuge.controller.js.map