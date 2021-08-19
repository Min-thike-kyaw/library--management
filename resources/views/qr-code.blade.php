<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
    
<div class="visible-print text-center">
<input type="text" name="myText" value="Norway"
       selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico"> 

	<h1> Laravel QR Code Generator Example </h1>
     
	<form action="get">
	<div style="position:relative;width:200px;height:25px;border:0;padding:0;margin:0;">
  <select style="position:absolute;top:0px;left:0px;width:200px; height:25px;line-height:20px;margin:0;padding:0;"
          onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;">
    <option ></option>
    <option value="one">one</option>
    <option value="two">two</option>
    <option value="three">three</option>
  </select>
  <input type="text" name="displayValue" id="displayValue" 
         placeholder="add/select a value" onfocus="this.select()"
         style="position:absolute;top:0px;left:0px;width:183px;width:180px\9;#width:180px;height:23px; height:21px\9;#height:18px;border:1px solid #556;"  >
  <input name="idValue" id="idValue" type="hidden">
</div>
<button>submit</button>
	</form>

</div>
    
</body>
</html>
<script type="text/javascript">
createEditableSelect(document.forms[0].myText);
</script>
