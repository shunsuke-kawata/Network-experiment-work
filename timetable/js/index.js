const sub_btn = document.getElementById("login_btn");
let num,pass;

var input_number,input_password;

num = ['12345678','20238112','20238120'];//学籍番号リスト
pass = ['qwertyu','Tatsuya_J12_15','zikken07'];//パスワードリスト


function location_change(number){
    document.location.href='./templates/'+ number +'.html';
    return true;
}

function master_key(){
    var url_key = window.prompt("閲覧先の学籍番号を入力してください。");
    for (let i=1;i<num.length;i++){
        if(num[i]==url_key){
            location_change(url_key);
            return true;
        }
    }

    alert("指定した学生が存在しません");
    return false;



}


function login_check(){

    input_number = document.getElementById("student_number");
    input_password = document.getElementById("student_password");
    if(input_number.value=='' || input_password.value==''){
        alert('空欄があります');
        return false;
    }

    for(let i=0;i<num.length;i++){
       if(num[i]==input_number.value){
        if(pass[i]==input_password.value){
            if(i==0){
                master_key();
                return true;
            }
            else{
                location_change(input_number.value);
                return true;
            }
        }
        else{
            alert("パスワードが違います");
            input_password.value="";
            return false;
        }
       }
      
    }
    alert("ユーザーが登録されていません");
    input_number.value="";
    input_password.value="";
    return false;

}



