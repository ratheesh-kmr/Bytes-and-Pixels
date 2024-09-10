
		<?php

		// servername => localhost
		// username => root
		// password => empty
		// database name => staff
		$conn = mysqli_connect("localhost", "root", "", "hiring details");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		// Taking all 3 values from the form data(input)
		$email = $_REQUEST['email'];
		$name = $_REQUEST['name'];
		$Portfolio = $_REQUEST['Portfolio'];
		
		// Performing insert query execution
		// here our table name is college
		$sql = "INSERT INTO CompanyDetails VALUES ('$email',
			'$name','$Portfolio')";
		
		if(mysqli_query($conn, $sql)){
			echo "data stored in a database successfully Please browse your localhost php my admin to view the updated data";
				

		
		} else{
			echo "ERROR: Hush! Sorry $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection
		mysqli_close($conn);
		?>