const e="open",t=document.getElementById("ui-libras"),n=document.querySelectorAll(".ui-policy");function o(){var o=this.parentElement,i=o.classList.contains(e);n.forEach(function(t){t.classList.remove(e)}),t.style.display="none",i||(o.classList.add(e),"pt-BR"===o.id&&(t.style.display="block"))}window.onload=function(){"#internal"==location.hash?(document.body.classList.add("internal"),document.body.parentElement.style.backgroundColor="#000000",n.forEach(function(e){e.classList.add("open")}),document.getElementById("ui-libras").remove()):n.forEach(function(e){e.querySelector(".ui-title").addEventListener("click",o)})};