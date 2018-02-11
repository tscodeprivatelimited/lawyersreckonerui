export class loginSession {

    islogin:boolean =false;

    login(){
        this.islogin=true;
    }
    

    logout(){
        this.islogin=false;
    }

    getSession(){
        return this.islogin;
    }

}
