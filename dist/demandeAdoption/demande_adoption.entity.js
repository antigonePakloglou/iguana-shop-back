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
exports.DemandeAdoption = void 0;
const iguane_entity_1 = require("../iguane/iguane.entity");
const typeorm_1 = require("typeorm");
let DemandeAdoption = class DemandeAdoption {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DemandeAdoption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DemandeAdoption.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], DemandeAdoption.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], DemandeAdoption.prototype, "numero_declaration", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => iguane_entity_1.Iguane, (iguane) => iguane.demandeAdoption),
    __metadata("design:type", iguane_entity_1.Iguane)
], DemandeAdoption.prototype, "iguane", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DemandeAdoption.prototype, "iguaneId", void 0);
DemandeAdoption = __decorate([
    (0, typeorm_1.Entity)()
], DemandeAdoption);
exports.DemandeAdoption = DemandeAdoption;
//# sourceMappingURL=demande_adoption.entity.js.map