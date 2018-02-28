// window.onload = function () {

//     var numselection = document.getElementsByClassName("selection").length;

//     for (var i = 0; i < numselection; i++) {
//         document.getElementsByClassName("selection")[i].addEventListener("mouseover", function(event) {
//            var name = document.getElementsByClassName("project-individual")[(this.innerHTML*1-1)+6].innerHTML;
//            var newName = document.getElementsByClassName(name)[0].className.concat(" hide");
//            document.getElementsByClassName(name)[0].className = newName;
//            var backname = String(name).trim().concat("back");
//            var newBackName = document.getElementsByClassName(backname)[0].className.concat(" show");
//            document.getElementsByClassName(backname)[0].className = newBackName
//         })
//         document.getElementsByClassName("selection")[i].addEventListener("mouseleave", function(event) {
//             var name = document.getElementsByClassName("project-individual")[(this.innerHTML*1-1)+6].innerHTML;
//             var newName = document.getElementsByClassName(name)[0].className.slice(0,-5);
//             document.getElementsByClassName(name)[0].className = newName;
//             var backname = String(name).trim().concat("back");
//             document.getElementsByClassName(backname)[0].className = "project-individual ".concat(backname);
//          })
//     }
// }