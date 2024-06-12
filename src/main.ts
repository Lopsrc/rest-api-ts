import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function start(){
    const logger = new Logger('AppModule');
    const port = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);

    await app.listen(port, () => logger.log(`listening on port ${port}`));
}

start()