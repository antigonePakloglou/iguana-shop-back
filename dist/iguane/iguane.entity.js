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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iguane = void 0;
const demande_adoption_entity_1 = require("../demandeAdoption/demande_adoption.entity");
const refuge_entity_1 = require("../refuge/refuge.entity");
const typeorm_1 = require("typeorm");
let Iguane = class Iguane {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Iguane.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iguane.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => refuge_entity_1.Refuge, (refuge) => refuge.iguane),
    __metadata("design:type", refuge_entity_1.Refuge)
], Iguane.prototype, "refuge", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => demande_adoption_entity_1.DemandeAdoption, (demandeAdoption) => demandeAdoption.iguane),
    __metadata("design:type", Array)
], Iguane.prototype, "demandeAdoption", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Iguane.prototype, "couleur", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Iguane.prototype, "taille", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Iguane.prototype, "poids", void 0);
Iguane = __decorate([
    (0, typeorm_1.Entity)()
], Iguane);
exports.Iguane = Iguane;
//# sourceMappingURL=iguane.entity.js.map