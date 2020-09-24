function calculate()
{
 //window.alert("EMI") ;
 var amount=Number(document.forms["myform"]["amount"].value);
 var interest=Number(document.forms["myform"]["interest"].value);
 var time=Number(document.forms["myform"]["time"].value) ;

 if ( amount==0 || interest==0 || time==0 )
 {
   window.alert("Enter Details to calculate") ;
 }
 else
   {
     var totalInterest=(amount*interest)/(1.819*100) ;
     var emi=(totalInterest+amount)/12 ;
     var pay=emi*time
     emi=emi.toFixed(2)
     document.getElementById('emi').innerHTML="Monthly EMI :₹"+emi ;
     document.getElementById('rate').innerHTML="Total Interest :₹"+totalInterest.toFixed(2) ;
     document.getElementById('pay').innerHTML="Total Payment : :₹"+pay.toFixed(2) ;
   }
}
function gstCalculate()
{
 var amount=Number(document.forms["myform"]["amount"].value);
 var rate=Number(document.forms["myform"]["rate"].value);
 if(amount==0)
 {
     window.alert("Enter Details to calculate") ;
 }
 else
 {
    var gamount=(amount*rate)/100;
    var pay=amount+gamount ;
    var cgst=gamount/2 ;
     document.getElementById('total').innerHTML="GST Amount : ₹"+amount.toFixed(2);
     document.getElementById('gamount').innerHTML="GST Amount : ₹"+gamount.toFixed(2);
    document.getElementById('cgst').innerHTML="CGST : ₹"+cgst.toFixed(2) ;
    document.getElementById('pay').innerHTML="Total Payment : ₹"+pay.toFixed(2) ;
 }
}
 function ppfCalculate()
 {
   var amount=Number(document.forms["myform"]["amount"].value);
   var interest=Number(document.forms["myform"]["interest"].value);
   var time=Number(document.forms["myform"]["time"].value) ;

 if ( amount==0 || interest==0 || time==0 )
 {
   window.alert("Enter Details to calculate") ;
 }
 else
   {
     // ma=p*((Math.pow(1+i , time) - 1 ) / i ) ;
     interest=interest/100;
     var maturityAmount= amount*((Math.pow(1+interest,time)-1)/interest);
     var totalD=amount*time ;
     var tr=maturityAmount-totalD ;
     document.getElementById('deposite').innerHTML="Total Deposit : ₹"+totalD.toFixed(2) ;
     document.getElementById('rate1').innerHTML="Total Interest : ₹"+tr.toFixed(2) ;
     document.getElementById('mamount').innerHTML="Maturity Amount : : ₹"+maturityAmount.toFixed(2) ;
   }
 }
function sipCalculate()
{
 //window.alert("EMI") ;
 var amount=Number(document.forms["myform"]["amount"].value);
 var interest=Number(document.forms["myform"]["interest"].value);
 var time=Number(document.forms["myform"]["time"].value) ;

 if ( amount==0 || interest==0 || time==0 )
 {
   window.alert("Enter Details to calculate") ;
 }
 else
   {
     //fv=p*((Math.pow(1+i , n)-1)/i)*(1+i) ;
     interest=interest/(100*12) ;
     var amountInvestment=amount*time ;
     var expected=amount*((Math.pow(1+interest,time)-1)/interest)*(1+interest) ;
     var wg=expected-amountInvestment ;
 //    window.alert(amountInvestment);
     document.getElementById('emi').innerHTML="Expected Amount : ₹"+expected.toFixed(2) ;
     document.getElementById('rate').innerHTML="Amount Invested :₹"+amountInvestment.toFixed(2) ;
     document.getElementById('pay').innerHTML="Total Payment : ₹"+wg.toFixed(2) ;
   }
}