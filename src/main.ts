/* eslint-disable prettier/prettier */
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      
    }),
  );
  const config = new DocumentBuilder()
    .setTitle("event-management")
    .setDescription("event-management-description")
    .setVersion("1.0")
    .addTag("ev-mng")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });
  await app.listen(3111);
  console.log("Running on port");
}
bootstrap();
