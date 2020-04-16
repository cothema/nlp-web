import { Component, OnInit } from "@angular/core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { AuthService } from "../../../@shared/services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  faGoogle = faGoogle;
  faSignOutAlt = faSignOutAlt;

  constructor(
    public authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

}
