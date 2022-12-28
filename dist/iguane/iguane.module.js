"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IguaneModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const iguane_entity_1 = require("./../iguane/iguane.entity");
const iguane_controller_1 = require("./iguane.controller");
const iguane_repository_1 = require("./iguane.repository");
const iguane_service_1 = require("./iguane.service");
let IguaneModule = class IguaneModule {
};
IguaneModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([iguane_entity_1.Iguane])],
        providers: [iguane_service_1.IguaneService, iguane_repository_1.IguaneRepository],
        controllers: [iguane_controller_1.IguaneController],
    })
], IguaneModule);
exports.IguaneModule = IguaneModule;
//# sourceMappingURL=iguane.module.js.map