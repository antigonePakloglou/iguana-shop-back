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
exports.DemandeAdoptionController = void 0;
const common_1 = require("@nestjs/common");
const demande_adoption_entity_1 = require("./demande_adoption.entity");
const demande_adoption_service_1 = require("./demande_adoption.service");
let DemandeAdoptionController = class DemandeAdoptionController {
    constructor(demandeAdoptionService) {
        this.demandeAdoptionService = demandeAdoptionService;
    }
    getAllRefuge() {
        return this.demandeAdoptionService.getAllDemandeAdoption();
    }
    create(demandeAdoption) {
        return this.demandeAdoptionService.createDemandeAdoption(demandeAdoption);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemandeAdoptionController.prototype, "getAllRefuge", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [demande_adoption_entity_1.DemandeAdoption]),
    __metadata("design:returntype", void 0)
], DemandeAdoptionController.prototype, "create", null);
DemandeAdoptionController = __decorate([
    (0, common_1.Controller)('api/demandeAdoption'),
    __metadata("design:paramtypes", [demande_adoption_service_1.DemandeAdoptionService])
], DemandeAdoptionController);
exports.DemandeAdoptionController = DemandeAdoptionController;
//# sourceMappingURL=demande_adoption.controller.js.map