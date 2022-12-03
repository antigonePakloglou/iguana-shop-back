"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefugeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const refuge_controller_1 = require("./refuge.controller");
const refuge_entity_1 = require("./refuge.entity");
const refuge_repository_1 = require("./refuge.repository");
const refuge_service_1 = require("./refuge.service");
let RefugeModule = class RefugeModule {
};
RefugeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([refuge_entity_1.Refuge])],
        providers: [refuge_service_1.RefugeService, refuge_repository_1.RefugeRepository],
        controllers: [refuge_controller_1.RefugeController],
    })
], RefugeModule);
exports.RefugeModule = RefugeModule;
//# sourceMappingURL=refuge.module.js.map