
window.onload = function(){
	tables = document.getElementsByTagName('table');
	for (var i = 0; i < tables.length; i++) {
		addRow(tables[i].id);		
	};
};

function addRow(id)
{
	var table = document.getElementById(id);
    var colsCount = table.rows[0].cells.length;
    var row = table.insertRow(0);
    for (var i = 0; i < colsCount; i++) 
    {
    	var cell1 = row.insertCell(i);
    	
    	cell1.innerHTML = "<input class='input' type='text' name='sortingInput' onkeyup='filtering("+i+","+id+")'> <button type='button' onClick='sorting(0)'>ASC</button> <button type='button' onClick='sorting(1)'>DESC</button>";  	

    };
    
}

function filtering(n, k)
{
	console.log(k.id);
	// console.log(n);
	
	var input, filter, table, tr, td, i;
  	input = document.getElementsByClassName("input")[n];
  	filter = input.value.toUpperCase();
  	table = document.getElementById(k.id);
  	tr = document.getElementById(k.id).tBodies[0].rows;
  	
  	for (i = 2; i < tr.length; i++) 
  	{
    	td = tr[i].getElementsByTagName("td")[n];
    	if (td) 
    	{
      		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) 
      		{
        		tr[i].style.display = "";
      		} 

      		else 
      		{
        		tr[i].style.display = "none";
      		}
    	}       
  	}
}


function sorting(n)
{
	
}

function sortTable(n) 
{
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) 
  {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) 
    {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
        {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } 
      else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
        {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) 
    {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}