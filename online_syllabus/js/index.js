var input, filter, subject_list, li, a, i,j,flag, txtValue;


function search_subject() {

    subject_list = document.getElementById("subject_list");
    li = subject_list.getElementsByTagName('li');//リスト要素が配列で格納されている
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();

    

    for (i = 0; i < li.length; i++) {

      a = li[i].getElementsByTagName("a") //そのリスト内のaタグ全てを配列形式で取得
      flag = 0; //このaタグに対するフラッグ
      
      for(j=0;j<a.length;j++){

        content = a[j];
        txtValue = content.textContent || content.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1 || flag==1) {

         
            //含まれている場合の処理
            li[i].style.display = "";
            flag=1;

        } else {
            li[i].style.display = "none";
        }
      }

    
    }


    
}

var radio = document.getElementsByClassName('radio_btn');
var check_value = '';

function radio_second(){
  subject_list = document.getElementById("subject_list");
  li = subject_list.getElementsByTagName('li');

  for(i=0;i<radio.length;i++){
    if(radio.item(i).checked){
      check_value = radio.item(i).value;//選択されているボタンを取得
    }
  }

  return check_value;
}


var select_course,necessaly_course;


function radio_checked(){
  

  /*
  subject_list = document.getElementById("subject_list");
  li = subject_list.getElementsByTagName('li');

  for(i=0;i<radio.length;i++){
    if(radio.item(i).checked){
      check_value = radio.item(i).value;//選択されているボタンを取得
    }
  }
  */
  check_value = radio_second();

  if(check_value==0){

    for(i=0;i<li.length;i++){
      li[i].style.display="";
    }
    return;

  }
  else if(check_value==1){

    select_course = document.getElementsByClassName("necessaly_net").item(0).children;
    necessaly_course = document.getElementsByClassName("necessaly_sys").item(0).children;

  }
  else if(check_value==2){

    necessaly_course = document.getElementsByClassName("necessaly_net").item(0).children;
    select_course = document.getElementsByClassName("necessaly_sys").item(0).children;

  }
  for(i=0;i<select_course.item(0).children.length;i++){

    select_course[i].style.display="none";
    necessaly_course[i].style.display="";
    
  }

  return;



}





