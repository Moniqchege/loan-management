import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../sidebar/sidebar.component";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SidebarComponent, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  isSidebarHiddenOnMobile = true;

  toggleSidebar() {
    this.isSidebarHiddenOnMobile = !this.isSidebarHiddenOnMobile;
  }
}
