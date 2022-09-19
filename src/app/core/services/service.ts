import { AuthGuard } from "./auth-guard.service";
import { AuthenticationService } from "./authentication.service";
import { ApiService } from "./api.service";
export const serviceProvider = [
    AuthGuard,
    AuthenticationService,
    ApiService
]