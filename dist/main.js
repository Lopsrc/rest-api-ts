"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function start() {
    const logger = new common_1.Logger('AppModule');
    const port = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(port, () => logger.log(`listening on port ${port}`));
}
start();
//# sourceMappingURL=main.js.map