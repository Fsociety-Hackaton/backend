import { UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class JWTAuthGuard extends AuthGuard("jwt") {
    handleRequest(err, user, info){
        if(err || !user){
            throw err || new UnauthorizedException("Usuario, contraseña o token invalidos")
        }
        return user
    }
}
