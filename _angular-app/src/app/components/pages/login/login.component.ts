import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {
        key: '5XJP',
        password: 'secret'
    };

    showMessageError = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    submit() {
        this.authService.login(this.credentials)
            .subscribe((data) => {
                const token = data.token;
                window.localStorage.setItem('token', token);
                this.router.navigate(['/dashboard']);
            }, error => this.showMessageError = true);
        return false;
    }

}
