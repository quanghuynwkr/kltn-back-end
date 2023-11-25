import { Controller, Get, Request, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AuthService } from "./auth/auth.service";

@Controller()
export class AppController {
  constructor(private authService: AuthService) {} //Dich vu cua auth module

  @UseGuards(LocalAuthGuard) //Phuong thuc bao mat theo local
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard) //Phuong thuc bao mat theo JWT
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
