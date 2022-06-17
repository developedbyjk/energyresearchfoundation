
// HERS LITTLE JS FOR THE WORKING OF ACCORDIAN
var button = document.getElementsByClassName("accordion");
var i;

for(i=0;i<button.length;i++){
    button[i].addEventListener('click',function(){
        this.classList.toggle("newclass");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
             panel.style.maxHeight= panel.scrollHeight + "px";
        }
    })
}
// END OF SCRIPT OF ACCORDIAN
