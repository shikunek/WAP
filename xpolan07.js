
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
    	input = "<input class='input' type='text' name='sortingInput' onkeyup='filtering("+i+","+id+")'>";
    	acsButton = "<button type='button' class='asc' onClick='sorting("+i+","+id+","+"0)'></button>";
    	descButton = "<button type='button' class='desc' onClick='sorting("+i+","+id+","+"1)'></button>";
    	cell1.innerHTML = input + acsButton + descButton;  	

    };
    
}

function filtering(n, k)
{
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


function sorting(n, id, direction)
{
	// console.log(n);
	// console.log(id.id);
	// console.log(direction);
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  	table = document.getElementById(id.id);
  	firstRow = document.getElementById(id.id).tBodies[0].rows[1];
  	dataType = firstRow.getElementsByTagName("td")[n].getAttribute("data-type");
  	if (dataType == null) 
  	{
  		dataType = "string";
  	}
  	// console.log(dataType);
  	switching = true;
  	//Set the sorting direction to ascending:
  	if (direction == 0) 
  	{
  		dir = "asc"; 	
  	}
  	else 
  	{
  		dir = "desc";
  	}
  	
  	/*Make a loop that will continue until
 	 no switching has been done:*/
  	while (switching) 
  	{
    	//start by saying: no switching is done:
    	switching = false;
    	rows = document.getElementById(id.id).tBodies[0].rows;
	    /*Loop through all table rows (except the
	    first, which contains table headers):*/
	    for (i = 2; i < (rows.length - 1); i++) 
	    {
	      	//start by saying there should be no switching:
	      	shouldSwitch = false;
	      	/*Get the two elements you want to compare,
	      	one from current row and one from the next:*/
	      	x = rows[i].getElementsByTagName("td")[n];
	      	y = rows[i + 1].getElementsByTagName("td")[n];
	      	/*check if the two rows should switch place,
	      	based on the direction, asc or desc:*/
	      	if (dir == "asc") 
	      	{
	      		if (dataType == "int") 
	      		{

  					if (parseInt(x.innerHTML,10) > parseInt(y.innerHTML,10)) 
	        		{	        			
	        	  		//if so, mark as a switch and break the loop:
	        	  		shouldSwitch= true;
	          			break;
	        		}
  				}

  				else
  				{
  					if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
	        		{
	        		
	        	  		//if so, mark as a switch and break the loop:
	        	  		shouldSwitch= true;
	          			break;
	        		}
  				}
	        	
	      	} 
	      	else if (dir == "desc") 
	      	{
	      		if (dataType == "int") 
	      		{
  					if (parseInt(x.innerHTML,10) < parseInt(y.innerHTML,10)) 
	        		{
	        		
	        	  		//if so, mark as a switch and break the loop:
	        	  		shouldSwitch = true;
	          			break;
	        		}
  				}

  				else
  				{
  					if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
	        		{
	        		
	        	  		//if so, mark as a switch and break the loop:
	        	  		shouldSwitch = true;
	          			break;
	        		}
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
	    } 
  	}
}

