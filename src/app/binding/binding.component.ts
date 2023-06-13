import { Component } from "@angular/core";

@Component({
    selector:'app-binding',
    templateUrl: './binding.component.html'
})

export class BindingComponent{
    userName=''
    isOpenBtn = 'false'
    
    deleteUserName(){
        this.userName=''
    }

}
