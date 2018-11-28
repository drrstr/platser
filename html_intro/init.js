function initButtons()
	{
		var elems = document.getElementsByClassName("whiteItem");
		var bg = document.getElementsByClassName("bg");
		
		var e2 = document.getElementsByClassName("whiteItem_home");
		e2[0].onclick = redir;
        elems[1].style.borderWidth = "0px 0px 5px 0px";
        elems[2].textContent = "Info";
        elems[1].textContent = "Exam";
        elems[0].textContent = "CSS";
        e2[0].style.cursor = "pointer";
        for(var i = 0; i < elems.length; i++)
			{
				elems[i].style.cursor = "pointer";
			}
        for ( var i = 0; i < elems.length; i++ ) (function(i){ 
            elems[i].onclick = function() {
                var tc = elems[i].textContent;
                window.location = tc + ".html";
            }
          })(i);
		
    }
    function redir(link)
		{
			window.location = "index.html";
		}