function validation()
	{
		var x=document.forms["form"]["fname"].value;
		var y=document.forms["form"]["lname"].value;
		var z=document.forms["form"]["email"].value;
		var a=document.forms["form"]["saran"].value;
		// var b=document.forms["form"]["Gender"].value;
		if(x=="")
			{
				alert("Isi Nama depan dengan lengkap");
			}
		// else if(b!=1)
		// 	{
		// 		alert("Pilih Jenis Kelamin");
		// 	}	
		else if(y=="")
			{
				alert("Isi Nama belakang dengan lengkap");
			}	
		else if(z=="")
			{
				alert("Isi form Email ");
			}
		else if(z.indexOf("@")<0 || z.indexOf(".")<0)
			{
				alert("Format Email Masih Salah");
			}						
		else if(a=="")
			{
				alert("Isi Saran yang ingin Anda Berikan");
			}			
		else
			{
				alert("Berhasil dikirim, Terima kasih...!! :D");
			}
	}


	