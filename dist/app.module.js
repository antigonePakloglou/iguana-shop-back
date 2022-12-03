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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const demande_adoption_entity_1 = require("./demandeAdoption/demande_adoption.entity");
const demande_adoption_module_1 = require("./demandeAdoption/demande_adoption.module");
const iguane_entity_1 = require("./iguane/iguane.entity");
const iguane_module_1 = require("./iguane/iguane.module");
const refuge_entity_1 = require("./refuge/refuge.entity");
const refuge_module_1 = require("./refuge/refuge.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'iguane_shop',
                entities: [iguane_entity_1.Iguane, refuge_entity_1.Refuge, demande_adoption_entity_1.DemandeAdoption],
                synchronize: true,
            }),
            iguane_module_1.IguaneModule, refuge_module_1.RefugeModule, demande_adoption_module_1.DemandeAdoptionModule],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map